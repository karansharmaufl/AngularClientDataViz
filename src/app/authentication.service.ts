import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Injectable()

export class AuthenticationService {
    constructor(private http : HttpClient, private sb : MatSnackBar){}

    uBASE_URL = 'http://localhost:5000/api';

    async register(user) {
        try{
            var response =  await this.http.post(this.uBASE_URL + '/register', user).toPromise();
            console.log('RESPONSE', response);
        }catch(error){
            this.handleError(error);
        }

    }

    private handleError(error){
        console.log(error);
        this.sb.open(error, 'close', {duration:2000});
    }

}




