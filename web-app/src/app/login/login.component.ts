import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoggedService } from '../logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = "";
  password: string = "";
  wrongPassword : boolean = false;
  constructor(private loggedService: LoggedService , private router:Router) { 
    this.username = "";
    this.password = "";
    this.wrongPassword = false;
  }

  ngOnInit(): void {
    if(this.loggedService.isLoggedIn() == true)
      this.router.navigate(['/'], {replaceUrl:true});
  }
  VerifyLogin():void{ 
  }
  LoginUser():void{
    this.loggedService.log(this.username , this.password);
    console.log("Here");
  }
}
