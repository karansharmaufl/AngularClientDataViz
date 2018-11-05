import { Component, OnInit } from '@angular/core';
import { DtvizmessagesComponent } from './dtvizmessages.component';
import { NavComponent } from  './nav.component';
import { NewDtvizmessagesComponent } from './new-dtvizmessage.component';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { WebService } from './web.service';

import { Router } from '@angular/router';

// <app-new-dtvizmessage></app-new-dtvizmessage>
// <app-dtvizmessages></app-dtvizmessages>
@Component({
  selector: 'app-home',
  template: `
              <app-login></app-login>
            `
  
})
export class HomeComponent{

  

  //constr
  constructor(){}


  ngOnInit(): void {
      

    
  }


}
