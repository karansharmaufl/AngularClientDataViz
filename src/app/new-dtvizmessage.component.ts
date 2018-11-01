import { Component } from '@angular/core';
import { WebService } from './web.service';

// Placeholder template

@Component({
    selector: 'app-new-dtvizmessage',
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-form-field>
                    <input [(ngModel)]="dtvizmessage.owner" matInput placeholder="Name">
                </mat-form-field><br/>
                <mat-form-field>
                    <textarea [(ngModel)] = "dtvizmessage.text" matInput placeholder="Message"></textarea>
                </mat-form-field><br/>
                <button (click) = "post()" mat-button color="primary">POST</button>                
            </mat-card-content>
        </mat-card>
    `
})

export class NewDtvizmessagesComponent {

    
    constructor(private webService : WebService) {}

    dtvizmessage = {
        owner: "",
        text: ""
    }


    post() {
        this.webService.postMessage(this.dtvizmessage);
    }
}
