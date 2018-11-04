import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';

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

        // Testing the function getUser
        var theUser= this.webService.getUser();
        console.log('THEUSER',theUser);
        
        // Before done like this
        //this.webService.dtmSubject.subscribe(dtms => this.dtvizmessages);
        // After -- added more security observable subject not visible
        // this.webService.dtvizmessages.subscribe(dtms => 
        //     {this.dtvizmessages = dtms}
        //     );
    }
}
