import { Component } from '@angular/core';
import { WebService } from './web.service';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

// Placeholder template


// was accessing array using webService check below
// by adding observables the security increases -- using loal dtvizmessages array now
//EXAMPLE:   div *ngFor = "let dtm of webService.dtvizmessages"
// Canged again more security <div *ngFor = "let dtm of dtvizmessages">

//Pipe will handle the asynchronous way of getting data and update dtvizmessages while updating the forms

@Component({
    selector: 'app-dtvizmessages',
    templateUrl: './dtvizmessages.component.html' 
})

export class DtvizmessagesComponent {


    // Activated Route added for routerLink used above in template
    constructor(public webService : WebService, private route: ActivatedRoute, private authsvc : AuthenticationService,private router : Router) {}

    dtvizmessages;

    ngOnInit(){
        //console.log('ROUTE_HERE', this.route.snapshot.params.name);
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);

        // Testing the function getUser
        var theUser= this.webService.getUser();
        //console.log('THEUSER',theUser);
        //console.log('ALL_MESSAGES_ARRAY',this.webService.getMessages(name));
        // Before done like this
        //this.webService.dtmSubject.subscribe(dtms => this.dtvizmessages);
        // After -- added more security observable subject not visible
        // this.webService.dtvizmessages.subscribe(dtms => 
        //     {this.dtvizmessages = dtms}
        //     );
    }

    messageFlag(postEmail)
    {
        var retVal
        if(this.authsvc.emailID === postEmail){
            retVal = true;
        }else{
            retVal = false;
        }
        //console.log('RETVAL',retVal);
        return retVal;
    }

    deletePost(dtm){
        //console.log('CALLED_ME',id);
        this.webService.deleteMessage(dtm);
    }

    editPost(dtm){
        console.log('CLICKED_ME');
        this.router.navigateByUrl('/editDtm/'+dtm.id);
    }
}
