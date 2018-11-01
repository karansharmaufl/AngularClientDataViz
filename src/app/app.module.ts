import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DtvizmessagesComponent } from './dtvizmessages.component';
import { NewDtvizmessagesComponent } from  './new-dtvizmessage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from  './nav.component';
import { HomeComponent } from  './home.component';
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
    path: 'dtvizmessages', 
    component: DtvizmessagesComponent
  }
];



import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DtvizmessagesComponent, 
    NewDtvizmessagesComponent,
    NavComponent,
    HomeComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [WebService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
