import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service'
import { Router } from '@angular/router';

// Placeholder template

@Component({
    selector: 'app-login',
    template: `
    <br/>
    <mat-card>
        <mat-card-title>Login</mat-card-title>
        <mat-form-field>
            <input style="width:400px" matInput [(ngModel)]="loginData.email" placeholder="Email" type="email">
        </mat-form-field><br/>
        <mat-form-field>
            <input style="width:400px" matInput [(ngModel)]="loginData.password" placeholder="Password" type="password"> 
        </mat-form-field><br/>
        <button mat-raised-button color="primary" (click)="login()">Login</button>
    </mat-card>
        `
})

export class LoginComponent {
    constructor(private authentication : AuthenticationService, private router : Router) {}

    loginData = {
        email: '',
        password: ''
    }

    login(){
        console.log(this.loginData);
        //Create this under development
        this.authentication.login(this.loginData);
    }
}
