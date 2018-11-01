import { Component } from '@angular/core';
import { DtvizmessagesComponent } from './dtvizmessages.component';

@Component({
  selector: 'app-root',
  template: `<h1>Dashboard</h1>
            <app-new-dtvizmessage></app-new-dtvizmessage>
            <app-dtvizmessages></app-dtvizmessages>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
