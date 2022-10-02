import { Component } from '@angular/core';

import { LoggedService } from './logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app';
  logged : boolean = sessionStorage.getItem("isLoggedIn") == "true" ? true:false;
  _text = ""
  constructor(private loggedService : LoggedService){
    this.logged = loggedService.logged;
    // if(sessionStorage.getItem("isLoggedIn") == null)
    //   sessionStorage.setItem("isLoggedIn" , "false");
  }
  getLoginState(){
    return this.loggedService.isLoggedIn();
  }
}
