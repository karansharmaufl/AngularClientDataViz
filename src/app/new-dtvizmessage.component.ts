import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthenticationService } from './authentication.service';
import { MatSnackBar } from '@angular/material';

// Placeholder template
//<button *ngIf="!authentication.isAuthenticated" mat-button routerLink="/login">Login</button>
@Component({
    selector: 'app-new-dtvizmessage',
    template: `
        <mat-card class="card">
            <mat-card-title>Create new DTM</mat-card-title>
            <mat-card-content>
                <mat-form-field>
                    <input [(ngModel)]="dtvizmessage.topic" matInput placeholder="Topic*">
                </mat-form-field><br/>
                <mat-form-field>
                    <textarea [(ngModel)] = "dtvizmessage.text" matInput placeholder="Your text..*"></textarea>
                </mat-form-field><br/>
                <mat-form-field>
                    <input [(ngModel)]="dtvizmessage.color" matInput placeholder="Color(Red/Blue/Green)">
                </mat-form-field><br/>
                <button (click) = "post()" mat-button color="primary">POST</button>                
            </mat-card-content>
        </mat-card>
    `
})

export class NewDtvizmessagesComponent {

    
    constructor(private webService : WebService, private authsvc: AuthenticationService, 
        private sb : MatSnackBar) {}

    dtvizmessage = {
        owner: this.authsvc.name,
        ownerEmailID: this.authsvc.emailID,
        topic: "",
        text: "",
        color: ""
    }

    post() {
        console.log('MSG',this.dtvizmessage);
        if(this.dtvizmessage.text ==='' || this.dtvizmessage.topic ===''){
            this.sb.open('Please provide information marked with *', 'close', {duration: 4000});
            return;
        }
        this.webService.postMessage(this.dtvizmessage);
        this.dtvizmessage.topic = "";
        this.dtvizmessage.text = "";
        this.dtvizmessage.color = "";
    }
}
