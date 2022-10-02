import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../logged.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName:string = "";
  lastName:string = "";
  username:string = "";
  password:string = "";
  dateOfBirth:string = "";
  constructor(private logged: LoggedService, private router: Router) {
    this.firstName = "";
    this.lastName = "";
    this.username = "";
    this.password = "";
    this.dateOfBirth = "";
   }

  ngOnInit(): void {
    if(this.logged.isLoggedIn() == true)
      this.router.navigate(['/'], {replaceUrl:true});
  }
  
  RegisterUser():void{
    // console.log({
    //   email : this.username,
    //   nume : this.lastName,
    //   prenume : this.firstName,
    //   dateOfBirth : this.dateOfBirth,
    //   parola : this.password
    // });
    this.logged.register(this.username , this.password , this.firstName , this.lastName , this.dateOfBirth);
    this.router.navigate(['/'], {replaceUrl:true});
  }
}
