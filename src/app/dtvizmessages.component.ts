import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';

// Placeholder template


// was accessing array using webService check below
// by adding observables the security increases -- using loal dtvizmessages array now
//EXAMPLE:   div *ngFor = "let dtm of webService.dtvizmessages"

@Component({
    selector: 'app-dtvizmessages',
    template: `
        <div *ngFor = "let dtm of dtvizmessages">
            <mat-card style="margin: 8px;">
                <mat-card-title [routerLink]="['/dtvizmessages', dtm.owner]" style="cursor:pointer"> {{dtm.owner}} </mat-card-title>
                <mat-card-content>{{dtm.text}}</mat-card-content>
            </mat-card>
        </div>
    `
})

export class DtvizmessagesComponent {


    // Activated Route added for routerLink used above in template
    constructor(private webService : WebService, private route: ActivatedRoute) {}

    dtvizmessages;

    ngOnInit(){
        console.log('ROUTE_HERE', this.route.snapshot.params.name);
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
        this.webService.dtmSubject.subscribe(dtms => this.dtvizmessages);
    }
}
