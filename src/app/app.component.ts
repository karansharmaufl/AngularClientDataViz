import { Component, ViewChild } from '@angular/core';
import { DtvizmessagesComponent } from './dtvizmessages.component';

@Component({
  selector: 'app-root',
  template: `<h1>Dashboard</h1>
            <app-new-dtvizmessage (onPosted) = "onPosted($event)"></app-new-dtvizmessage>
            <app-dtvizmessages></app-dtvizmessages>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my app';

  @ViewChild(DtvizmessagesComponent) dtms : DtvizmessagesComponent

  onPosted(dtm){
    console.log('DTMessage: ',dtm);
    this.dtms.dtvizmessages.push(dtm);
  }
}
