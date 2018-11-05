import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DtvizmessagesComponent } from './dtvizmessages.component';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { HubConnection } from '@aspnet/signalr';
//import 'rxjs/add/operator/toPromise';
//import { Observable } from 'rxjs/Observable';
//import { map, catchError } from 'rxjs/operators;

@Injectable()
export class WebService {
    
    uBASE_URL = 'http://localhost:5000/api';

    

    //private dtmSubject = new Subject();
    
    //private dtvizmessagesStore : DtvizmessagesComponent[]

    //dtvizmessages = this.dtmSubject.asObservable();

    dtvizmessages : DtvizmessagesComponent[]

    private _hubConnection : HubConnection

    // Using messages as subject -> WHen update through http request takes place

    constructor(private http: HttpClient, private sb: MatSnackBar,
         private authsvc : AuthenticationService, private router : Router
         ) {
        //this.getMessages('');
     }
     
        //Using async and await
        async getMessages(user){
        try{
            user = (user) ? '/'+user : '';
            var response = await this.http.get<DtvizmessagesComponent[]>(this.uBASE_URL + '/dtvizmessages' + user).toPromise();
            this.dtvizmessages = response;  // Adding data instantly
            //console.log('MESSAGES_HERE', response);
        }catch(error){
            this.handleError("Unable to get messages");
        }
        }

        async postMessage(dtm){
        try{
            var response = this.http.post(this.uBASE_URL + '/dtvizmessages', dtm).toPromise();
            console.log('POSTRESPONSE',response);
            //this.dtvizmessages.push(dtm);  // Adding data instantly -- adding using signalr
        }catch(error){
            this.handleError("Unable to post messages");
        }
        }

        async editMessage(dtm){
            console.log('DTM_INEDIT',dtm);
            try{
                var response = await this.http.put(this.uBASE_URL + '/dtvizmessages/'+dtm.id, dtm).toPromise();
                const index: number = this.dtvizmessages.indexOf(dtm);
                if (index !== -1) {
                    this.dtvizmessages.splice(index, 1);
                }
                this.dtvizmessages.push(dtm);
            }catch(error){
                console.log('ERROR',error);
                this.handleError("Unable to edit message");
            }
            this.router.navigateByUrl('/');
        }

        async deleteMessage(msg){
            console.log('IAMHERE');
            try{
                var response = await this.http.delete(this.uBASE_URL + '/dtvizmessages/'+msg.id).toPromise();
                console.log('MESSAGES_ARRAY_BD', this.dtvizmessages);

                const index: number = this.dtvizmessages.indexOf(msg);
                if (index !== -1) {
                    this.dtvizmessages.splice(index, 1);
                }     
                console.log('MESSAGES_ARRAY_AD', this.dtvizmessages);
                //var index = this.dtvizmessages.findIndex( msg => msg === msg)
                //console.log('INDEX_HERE',index);
                //var index = this.dtvizmessages.findIndex( msg => msg.id == key.id);
                //console.log('LINK',this.uBASE_URL + '/dtvizmessages/'+id);
                //console.log('DELETED_OBJECT_WITH', id);
            }catch(error){
                this.handleError("Something went wrong !!");
            }
        }


        // START HERE
        async getUser(){
            var response = await this.http.get(this.uBASE_URL+'/users/me', this.authsvc.tokenHeader).toPromise();
            //console.log('RESPONSE', response);
            return response;

        }

        // get tokenHeader(){
        //     var header = new Headers()

        // }

    /* 
    getMessages(user){
        user = (user) ? '/'+user : '';
        // Subscribe using observables
        //check = this.ht
        //console.log('WATCH_THIS',this.http.get<DtvizmessagesComponent[]>(this.uBASE_URL + '/dtvizmessages' + user).toPromise());
        var response = this.http.get<DtvizmessagesComponent[]>(this.uBASE_URL + '/dtvizmessages' + user).subscribe(response => {
            this.dtvizmessagesStore = response;
            //console.log('CHECK_HERE',this.dtvizmessagesStore);
            this.dtmSubject.next(this.dtvizmessagesStore); // This is the get request
        },
            error => {
                this.handleError("Unable get messages");
            }
        );
            // Adding data instantly
    }

    // FLOW:    MAKE MESSAGE STORE  --================-->  CALL OBSERVABLE NEXT TO NOTIFY THE SUBJECT

    postMessage(dtm){
        try{
            var response = this.http.post(this.uBASE_URL + '/dtvizmessages', dtm);
            this.dtvizmessagesStore.push(dtm);  // Adding data instantly
            this.dtmSubject.next(this.dtvizmessagesStore); // This is the put request
        }catch(error){
            this.handleError("Unable to post messages");
        }
        
    }
    */
    // Use snack bar at bottom to add error message
    private handleError(error){
        console.log(error);
        this.sb.open(error, 'close', {duration:2000});
    }

}


// Important links
//1. https://stackblitz.com/edit/angular-eqs6cp?file=app%2Fapp.component.html

