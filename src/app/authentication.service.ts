import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';



@Injectable()

export class AuthenticationService {
    constructor(private http : HttpClient, private sb : MatSnackBar, private router : Router){}

    uBASE_URL = 'http://localhost:5000/authentication';
    //uBASE_URL = 'https://redataviz20181105061447.azurewebsites.net/authentication';

    NAME_KEY = 'firstName';
    TOKEN_KEY = 'tokenKey';
    EMAIL_KEY = 'emailID'


    authenticateUser(response){  // Store the token in local storage
        if(!response['token']){
            console.log('TOKEN_NOT_VALID');
            this.sb.open('Invalid Token', 'close', {duration : 2000});
            return;
        }
        localStorage.setItem(this.TOKEN_KEY, response['token']);
        localStorage.setItem(this.NAME_KEY, response['firstName']);
        localStorage.setItem(this.EMAIL_KEY, response['emailID']);
        this.router.navigate(['/dashboard']); // This is used for redirection after successfull registration or login
    }

    get name(){
        return localStorage.getItem(this.NAME_KEY);
    }

    get emailID(){
        return localStorage.getItem(this.EMAIL_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    get tokenHeader(){
        //var tHeader = new Headers({'Authorization': 'Bearer '+localStorage.getItem(this.TOKEN_KEY)});
        var res = new HttpParams({});
        //res.set(param: 'headers', value: tHeader);
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'Bearer '+localStorage.getItem(this.TOKEN_KEY)
            })
          };


        return httpOptions;
    }

    async login(loginData){
        try{
            var response = await this.http.post(this.uBASE_URL+'/login',loginData).toPromise();
            console.log('RESPONSE', response);
            this.authenticateUser(response);
        }
        catch(error){
            this.handleError("Something went wrong !!");
        }
    }

    logout(){
        console.log('LOGMEOUT');
        localStorage.removeItem(this.NAME_KEY);
        localStorage.removeItem(this.EMAIL_KEY);
        localStorage.removeItem(this.TOKEN_KEY);
        this.router.navigate(['/']);
    }

    async register(user) {
        //console.log('USER_COMMLATER',user);
        if(user.firstName===''||user.lastName===''||user.emailID===''||user.password===''){
            this.sb.open('ERROR','Please complete the form',{duration:4000});
            return;
        }

        try{
            delete user.confirmPassword;
            //console.log('USER_HERE', user);
            var response =  await this.http.post(this.uBASE_URL + '/register', user).toPromise();
            console.log('RESPONSE', response['ackMessage']);

            if(response['ackMessage']==='Microsoft.EntityFrameworkCore.DbUpdateException'){
                return this.sb.open('EmailID Error:', 'Email id already exists ', {duration : 4000});
            }
            //if(response.)
            this.authenticateUser(response);
        }catch(error){
            //console.log('ERROR HERE', error);
            this.handleError("check username and password");
        }

    }

    private handleError(error){
        console.log(error);
        this.sb.open(error, 'close', {duration:2000});
    }

}




