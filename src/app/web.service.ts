import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/toPromise';
//import { Observable } from 'rxjs/Observable';
//import { map, catchError } from 'rxjs/operators;

@Injectable()
export class WebService {
    
    uBASE_URL = 'http://localhost:5000/api';

    constructor(private http: HttpClient) { }

    getMessages(){
        return this.http.get(this.uBASE_URL + '/dtvizmessages').toPromise();
    }

    postMessage(dtm){
        return this.http.post(this.uBASE_URL + '/dtvizmessages', dtm).toPromise();
    }

}

