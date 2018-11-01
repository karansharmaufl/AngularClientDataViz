import { Component } from '@angular/core';
import { WebService } from './web.service';

// Placeholder template

@Component({
    selector: 'app-new-dtvizmessage',
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-form-field>
                    <input [(ngModel)]="owner" matInput placeholder="Name">
                </mat-form-field><br/>
                <mat-form-field>
                    <textarea matInput placeholder="Message"></textarea>
                </mat-form-field><br/>
                <button (click) = "post()" mat-button color="primary">POST</button>                
            </mat-card-content>
        </mat-card>
    `
})

export class NewDtvizmessagesComponent {
        constructor(private webService : WebService) {}
 
        owner = "tester";


        post() {
            console.log(this.owner);
        }
}
