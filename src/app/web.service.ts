import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DtvizmessagesComponent } from './dtvizmessages.component';
import { MatSnackBar } from '@angular/material';

//import 'rxjs/add/operator/toPromise';
//import { Observable } from 'rxjs/Observable';
//import { map, catchError } from 'rxjs/operators;

@Injectable()
export class WebService {
    
    uBASE_URL = 'http://localhost:5000/api';

    

    dtvizmessages : DtvizmessagesComponent[]



    constructor(private http: HttpClient, private sb: MatSnackBar) {
        this.getMessages();
     }

    async getMessages(){
        try{
            
            var response = await this.http.get<DtvizmessagesComponent[]>(this.uBASE_URL + '/dtvizmessages').toPromise();
            this.dtvizmessages = response;
            
        }catch(error){
            this.handleError("Unable to get messages");
        }
        
    }

    async postMessage(dtm){
        try{
            var response = this.http.post(this.uBASE_URL + '/dtvizmessages', dtm).toPromise();
            this.dtvizmessages.push(dtm);
        }catch(error){
            this.handleError("Unable to post messages");
        }
        
    }

    private handleError(error){
        console.log(error);
        this.sb.open(error, 'close', {duration:2000});
    }

}

