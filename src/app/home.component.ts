import { Component, OnInit } from '@angular/core';
import { DtvizmessagesComponent } from './dtvizmessages.component';
import { NavComponent } from  './nav.component';
import { NewDtvizmessagesComponent } from './new-dtvizmessage.component';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { WebService } from './web.service';
import * as signalR from '@aspnet/signalr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  template: `
            
            <app-new-dtvizmessage></app-new-dtvizmessage>
            <app-dtvizmessages></app-dtvizmessages>`
  
})
export class HomeComponent{

  _hubConnection : HubConnection

  //constr
  constructor(private wbsc: WebService, private router : Router){}


  ngOnInit(): void {
    console.log('HELLOWORLD');
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this._hubConnection = new HubConnectionBuilder()
                          .configureLogging(signalR.LogLevel.Debug)
                          .withUrl('https://redataviz20181105061447.azurewebsites.net/notify',
                          {
                            skipNegotiation : true,
                            transport:signalR.HttpTransportType.WebSockets
                          })
                          .build();
    // this._hubConnection
    //   .start()
    //   .then(() => console.log('Connection started!'))
    //   .catch(err => console.log('Error while establishing connection'));

      this._hubConnection.on("Add", (dtm: DtvizmessagesComponent) => {
        console.log('I AM HERE');
        this.wbsc.dtvizmessages.push(dtm);
        this.wbsc.getMessages('');
        //this.router.navigateByUrl('/');
      });
      this._hubConnection.on("Delete", (dtm : DtvizmessagesComponent) => {
        this.wbsc.dtvizmessages = this.wbsc.dtvizmessages.filter(dtm => dtm !== dtm);
        this.wbsc.getMessages('');
      });
      this._hubConnection.start();  

    
  }


}
