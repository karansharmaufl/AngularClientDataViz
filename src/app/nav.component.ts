import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'
import { Router } from '@angular/router';

// Placeholder template

@Component({
    selector: 'app-nav',
    template: `
        <mat-toolbar color="primary">
            <button mat-button (click)="display()">RtDataViz</button>
            <button *ngIf="authentication.isAuthenticated" mat-button routerLink="/dtvizmessages">DTMessages</button>
            <span style="flex: 1 1 auto"></span>
            <button *ngIf="!authentication.isAuthenticated" mat-button routerLink="/login">Login</button>
            <button *ngIf="!authentication.isAuthenticated" mat-button routerLink="/register">Register</button>
            <button *ngIf="authentication.isAuthenticated" mat-button routerLink="/dashboard">Welcome {{authentication.name}}</button>
            <button *ngIf="authentication.isAuthenticated" mat-button (click)="authentication.logout()">Logout</button>
        </mat-toolbar>
        
    `
})

export class NavComponent {
    constructor(public authentication : AuthenticationService, private router : Router) {}

    display(){
        console.log('DISPLAY_ME');
        var _router = this.router;
        if(this.authentication.isAuthenticated){
            console.log('AUTH');
            _router.navigateByUrl('/dashboard');
        }else{
            console.log('NOT_AUTH');
            _router.navigateByUrl('/');
        }
    }
}
