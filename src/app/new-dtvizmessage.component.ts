import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthenticationService } from './authentication.service';

// Placeholder template
//<button *ngIf="!authentication.isAuthenticated" mat-button routerLink="/login">Login</button>
@Component({
    selector: 'app-new-dtvizmessage',
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
                <button (click) = "post()" mat-button color="primary">POST</button>                
            </mat-card-content>
        </mat-card>
    `
})

export class NewDtvizmessagesComponent {

    
    constructor(private webService : WebService, private authsvc: AuthenticationService, 
        ) {}

    dtvizmessage = {
        owner: this.authsvc.name,
        ownerEmailID: this.authsvc.emailID,
        topic: "",
        text: "",
        color: ""
    }

    post() {
        this.webService.postMessage(this.dtvizmessage);
    }
}
