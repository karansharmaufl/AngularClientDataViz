import { Component } from '@angular/core';
import { DtvizmessagesComponent } from './dtvizmessages.component';
import { NavComponent } from  './nav.component';
import { NewDtvizmessagesComponent } from './new-dtvizmessage.component';

@Component({
  selector: 'app-home',
  template: `
            
            <app-new-dtvizmessage></app-new-dtvizmessage>
            <app-dtvizmessages></app-dtvizmessages>`
  
})
export class HomeComponent {}
