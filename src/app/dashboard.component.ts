import { Component } from '@angular/core';
import { DtvizmessagesComponent } from './dtvizmessages.component';
import { NewDtvizmessagesComponent } from './new-dtvizmessage.component';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { WebService } from './web.service';

@Component({
  selector: 'app-dashboard',
  template:
    `
    <app-new-dtvizmessage></app-new-dtvizmessage>
    <app-dtvizmessages></app-dtvizmessages>
    `

  // 
  //       <app-dtvizmessages></app-dtvizmessages>
  
})
export class DashboardComponent {

  _hubConnection : HubConnection
  constructor(private wbsc: WebService) { }

  ngOnInit() {
    console.log('HELLOWORLD');
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    //.withUrl('https://redataviz20181105061447.azurewebsites.net/notify',
    //.withUrl('http://localhost:5000/notify',

    this._hubConnection = new HubConnectionBuilder()
                          .configureLogging(signalR.LogLevel.Debug)
                          .withUrl('http://localhost:5000/notify',
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
        //console.log('I AM HERE');
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
