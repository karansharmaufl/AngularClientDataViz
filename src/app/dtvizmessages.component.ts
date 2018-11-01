import { Component } from '@angular/core';
import { WebService } from './web.service';

// Placeholder template

@Component({
    selector: 'app-dtvizmessages',
    template: `
        <div *ngFor = "let dtm of dtvizmessages">
            <mat-card style="margin: 8px;">
                <mat-card-title> {{dtm.owner}} </mat-card-title>
                <mat-card-content>{{dtm.text}}</mat-card-content>
            </mat-card>
        </div>
    `
})

export class DtvizmessagesComponent {
        constructor(private webService : WebService) {}

async ngOnInit() {
    var response = await this.webService.getMessages();
    console.log('RESPONSEDATA', response);
    console.log('RESPONSETYPE', typeof(response));
    this.dtvizmessages = response;
}

    dtvizmessages;
}
