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
    selector: 'app-editmessage',
    template: `
    <mat-card class="card">
        <mat-card-content>
        <mat-form-field>
            <input [(ngModel)]="dtvizmessage.topic" matInput placeholder="Topic">
        </mat-form-field><br/>
        <mat-form-field>
            <textarea [(ngModel)] = "dtvizmessage.text" matInput placeholder="Your text.."></textarea>
        </mat-form-field><br/>
        <mat-form-field>
            <input [(ngModel)]="dtvizmessage.color" matInput placeholder="Color(Red/Blue/Green)">
        </mat-form-field><br/>
        <button (click) = "editMessage()" mat-button color="primary">POST</button>                
        </mat-card-content>
    </mat-card>
    `
})

export class EditComponent {


    // Activated Route added for routerLink used above in template
    constructor(private webService : WebService, private authsvc: AuthenticationService, private router : Router, private route : ActivatedRoute) {}

    currDtm

    dtvizmessage = {

        owner: this.authsvc.name,
        ownerEmailID: this.authsvc.emailID,
        topic: "",
        text: "",
        color: "",
        id: ""
    }

    

    ngOnInit(){
        var id = this.route.snapshot.params.postId;
        //console.log('ID',id);
        var allMsgs = this.webService.dtvizmessages;
        //console.log('ALLMSGS',JSON.stringify(allMsgs));
        var arr = JSON.parse(JSON.stringify(allMsgs
            ));

        var currDtm = arr.filter( dtm => dtm.id == id)[0];
        console.log('CRRTXT',currDtm);
        this.dtvizmessage.topic = currDtm.topic;
        this.dtvizmessage.text = currDtm.text;
        this.dtvizmessage.color = currDtm.color;
        this.dtvizmessage.id = currDtm.id;
        //console.log(curr[0]);
        
    }

    editMessage(){
        //console.log('DTM_INEDITCOMPONNET',dtm);
        this.webService.editMessage(this.dtvizmessage);
    }

}
