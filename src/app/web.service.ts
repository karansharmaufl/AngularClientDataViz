import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DtvizmessagesComponent } from './dtvizmessages.component';

//import 'rxjs/add/operator/toPromise';
//import { Observable } from 'rxjs/Observable';
//import { map, catchError } from 'rxjs/operators;

@Injectable()
export class WebService {
    
    uBASE_URL = 'http://localhost:5000/api';

    

    dtvizmessages : DtvizmessagesComponent[]



    constructor(private http: HttpClient) {
        this.getMessages();
     }

    async getMessages(){
        var response = await this.http.get<DtvizmessagesComponent[]>(this.uBASE_URL + '/dtvizmessages').toPromise();
        this.dtvizmessages = response;
    }

    async postMessage(dtm){
        var response = this.http.post(this.uBASE_URL + '/dtvizmessages', dtm).toPromise();
        this.dtvizmessages.push(dtm);
    }

}

