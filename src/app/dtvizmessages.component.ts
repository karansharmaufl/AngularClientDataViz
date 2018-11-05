import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

// Placeholder template


// was accessing array using webService check below
// by adding observables the security increases -- using loal dtvizmessages array now
//EXAMPLE:   div *ngFor = "let dtm of webService.dtvizmessages"
// Canged again more security <div *ngFor = "let dtm of dtvizmessages">

//Pipe will handle the asynchronous way of getting data and update dtvizmessages while updating the forms

@Component({
    selector: 'app-dtvizmessages',
    template: `
        <div *ngFor = "let dtm of webService.dtvizmessages">
            <mat-card [style.background]="dtm.color" style="margin: 8px;">
                <button *ngIf="messageFlag(dtm.ownerEmailID)" mat-button color="primary" (click)="editPost(dtm)">EDIT</button>
                <button *ngIf="messageFlag(dtm.ownerEmailID)" mat-button color="primary" (click)="deletePost(dtm)">DELETE</button>
                <mat-card-title [routerLink]="['/dtvizmessages', dtm.owner]" style="cursor:pointer"> {{dtm.owner}} ........created by {{dtm.ownerEmailID}} </mat-card-title>
                <mat-card-content>{{dtm.topic}}</mat-card-content>
                <mat-card-content>{{dtm.text}}</mat-card-content>
            </mat-card>
        </div>
    `
})

export class DtvizmessagesComponent {


    // Activated Route added for routerLink used above in template
    constructor(private webService : WebService, private route: ActivatedRoute, private authsvc : AuthenticationService,private router : Router) {}

    dtvizmessages;

    ngOnInit(){
        //console.log('ROUTE_HERE', this.route.snapshot.params.name);
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);

        // Testing the function getUser
        var theUser= this.webService.getUser();
        //console.log('THEUSER',theUser);
        //console.log('ALL_MESSAGES_ARRAY',this.webService.getMessages(name));
        // Before done like this
        //this.webService.dtmSubject.subscribe(dtms => this.dtvizmessages);
        // After -- added more security observable subject not visible
        // this.webService.dtvizmessages.subscribe(dtms => 
        //     {this.dtvizmessages = dtms}
        //     );
    }

    messageFlag(postEmail)
    {
        var retVal
        if(this.authsvc.emailID === postEmail){
            retVal = true;
        }else{
            retVal = false;
        }
        //console.log('RETVAL',retVal);
        return retVal;
    }

    deletePost(dtm){
        //console.log('CALLED_ME',id);
        this.webService.deleteMessage(dtm);
    }

    editPost(dtm){
        console.log('CLICKED_ME');
        this.router.navigateByUrl('/editDtm/'+dtm.id);
    }
}
