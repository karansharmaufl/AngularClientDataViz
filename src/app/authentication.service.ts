import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Injectable()

export class AuthenticationService {
    constructor(private http : HttpClient, private sb : MatSnackBar, private router : Router){}

    uBASE_URL = 'http://localhost:5000/authentication';

    NAME_KEY = 'firstName';
    TOKEN_KEY = 'tokenKey';
    EMAIL_KEY = 'emailID'


    get name(){
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    async register(user) {
        try{
            delete user.confirmPassword;
            var response =  await this.http.post(this.uBASE_URL + '/register', user).toPromise();
            console.log('RESPONSE', response);
            console.log('RESPONSE_TOKEN', response['token']);

            if(!response['token']){
                console.log('TOKEN_NOT_VALID');
                this.sb.open('Invalid Token', 'close', {duration : 2000});
                return;
            }
                

            localStorage.setItem(this.TOKEN_KEY, response['token']);
            localStorage.setItem(this.NAME_KEY, response['firstName']);
            localStorage.setItem(this.EMAIL_KEY, response['emailID']); 
            this.router.navigate(['/']); // This is used for redirection after successfull registration
        }catch(error){
            this.handleError(error);
        }

    }

    private handleError(error){
        console.log(error);
        this.sb.open(error, 'close', {duration:2000});
    }

}




