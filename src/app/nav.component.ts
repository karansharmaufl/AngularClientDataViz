import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'
import { Router } from '@angular/router';

// Placeholder template

@Component({
    selector: 'app-nav',
    template: `
        <mat-toolbar color="primary">
            <button mat-button (click)="display()">{{disAppName}}</button>
            <button *ngIf="authentication.isAuthenticated" mat-button routerLink="/dtvizmessages">DTMS</button>
            <span style="flex: 1 1 auto"></span>
            <button *ngIf="!authentication.isAuthenticated" mat-button routerLink="/login">Login</button>
            <button *ngIf="!authentication.isAuthenticated" mat-button routerLink="/register">Register</button>
            <button *ngIf="authentication.isAuthenticated" mat-button (click)="authentication.logout()">Logout</button>
        </mat-toolbar>
        
    `
})

export class NavComponent {
    constructor(public authentication : AuthenticationService, private router : Router) {}
    disAppName="RTDV";
    display(){
        console.log('DISPLAY_ME');
        var _router = this.router;
        if(this.authentication.isAuthenticated){
            console.log('AUTH');
            this.disAppName = 'RTDV Welcome' + this.authentication.name;
            _router.navigateByUrl('/dashboard');
        }else{
            console.log('NOT_AUTH');
            
            _router.navigateByUrl('/');
        }
    }
}
