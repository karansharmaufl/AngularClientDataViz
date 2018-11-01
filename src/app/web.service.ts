import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DtvizmessagesComponent } from './dtvizmessages.component';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

//import 'rxjs/add/operator/toPromise';
//import { Observable } from 'rxjs/Observable';
//import { map, catchError } from 'rxjs/operators;

@Injectable()
export class WebService {
    
    uBASE_URL = 'http://localhost:5000/api';

    

    dtmSubject = new Subject();
    
    private dtvizmessages : DtvizmessagesComponent[]

    // Using messages as subject -> WHen update through http request takes place

    constructor(private http: HttpClient, private sb: MatSnackBar) {
        this.getMessages('');
     }

    getMessages(user){
        user = (user) ? '/'+user : '';
        // Subscribe using observables
        var response = this.http.get<DtvizmessagesComponent[]>(this.uBASE_URL + '/dtvizmessages' + user).subscribe(response => {
            this.dtvizmessages = response;
            this.dtmSubject.next(this.dtvizmessages);
        },
            error => {
                this.handleError("Unable get messages");
            }
        );
            // Adding data instantly
    }

    postMessage(dtm){
        try{
            var response = this.http.post(this.uBASE_URL + '/dtvizmessages', dtm);
            this.dtvizmessages.push(dtm);  // Adding data instantly
        }catch(error){
            this.handleError("Unable to post messages");
        }
        
    }

    // Use snack bar at bottom to add error message
    private handleError(error){
        console.log(error);
        this.sb.open(error, 'close', {duration:2000});
    }

}


//Using async and await
// async getMessages(user){
//     try{
//         user = (user) ? '/'+user : '';
//         var response = await this.http.get<DtvizmessagesComponent[]>(this.uBASE_URL + '/dtvizmessages' + user).toPromise();
//         this.dtvizmessages = response;  // Adding data instantly
        
//     }catch(error){
//         this.handleError("Unable to get messages");
//     }
    
// }

// async postMessage(dtm){
//     try{
//         var response = this.http.post(this.uBASE_URL + '/dtvizmessages', dtm).toPromise();
//         this.dtvizmessages.push(dtm);  // Adding data instantly
//     }catch(error){
//         this.handleError("Unable to post messages");
//     }
    
// }

