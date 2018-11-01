import { Component } from '@angular/core';
import { DtvizmessagesComponent } from './dtvizmessages.component';
import { NavComponent } from  './nav.component';
import { NewDtvizmessagesComponent } from './new-dtvizmessage.component';

@Component({
  selector: 'app-root',
  template: `
            <app-nav></app-nav>
            <app-new-dtvizmessage></app-new-dtvizmessage>
            <app-dtvizmessages></app-dtvizmessages>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
