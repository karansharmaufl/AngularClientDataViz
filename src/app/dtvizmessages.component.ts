import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';

// Placeholder template

@Component({
    selector: 'app-dtvizmessages',
    template: `
        <div *ngFor = "let dtm of webService.dtvizmessages">
            <mat-card style="margin: 8px;">
                <mat-card-title [routerLink]="['/dtvizmessages', dtm.owner]" style="cursor:pointer"> {{dtm.owner}} </mat-card-title>
                <mat-card-content>{{dtm.text}}</mat-card-content>
            </mat-card>
        </div>
    `
})

export class DtvizmessagesComponent {
    constructor(private webService : WebService, private route: ActivatedRoute) {}

    ngOnInit(){
        console.log('ROUTE_HERE', this.route.snapshot.params.name);
    }
}
