import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DtvizmessagesComponent } from './dtvizmessages.component';
import { NewDtvizmessagesComponent } from  './new-dtvizmessage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from  './nav.component';
import { HomeComponent } from  './home.component';
import { RegisterComponent } from './register/register.component';


import { 
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

var routes = [
  {
  path: '', 
  component: HomeComponent
  },
  {
    path: 'dtvizmessages/:name', 
    component: DtvizmessagesComponent
  },
  {
    path: 'dtvizmessages', 
    component: DtvizmessagesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];



import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DtvizmessagesComponent, 
    NewDtvizmessagesComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService, AuthenticationService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
