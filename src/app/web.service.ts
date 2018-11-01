import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/toPromise';
//import { Observable } from 'rxjs/Observable';
//import { map, catchError } from 'rxjs/operators;

@Injectable()
export class WebService {
    
    constructor(private http: HttpClient) { }

    getMessages(){
        return this.http.get('http://localhost:5000/api/dtvizmessages').toPromise();
    }
}

