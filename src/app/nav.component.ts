import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'
import { Router } from '@angular/router';

// Placeholder template

@Component({
    selector: 'app-nav',
    template: `
        <mat-toolbar color="primary">
            <button mat-button routerLink="/">RtDataViz</button>
            <button mat-button routerLink="/dtvizmessages">DTMessages</button>
            <span style="flex: 1 1 auto"></span>
            <button mat-button routerLink="/register">Register</button>
            <button *ngIf="authentication.isAuthenticated" mat-button routerLink="/register">Welcome {{authentication.name}}</button>
        </mat-toolbar>
        
    `
})

export class NavComponent {
    constructor(private authentication : AuthenticationService, private router : Router) {}
}
