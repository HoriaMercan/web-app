import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class LoggedService {
  logged : boolean = false;
  constructor(private http : HttpClient) { }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  log(username : string , password : string){
    this.http.post("http://localhost:3000/auth" , {email : username , password:password}).subscribe((res : any)=>{
      if(res.succeded == true){
          console.log("User " + username + " have  just logged in!\n");
          sessionStorage.setItem("username" , username);
      }
    })
  }
  register(username:string , password:string , firstName:string, lastName:string , dateOfBirth:string ){
    this.http.post("http://localhost:3000/api/users" , {
      "email" : username,
      "nume" : lastName,
      "prenume" : firstName,
      "dateOfBirth" : dateOfBirth,
      "password" : password
    }).subscribe((res : any) =>{
      console.log("New account created!" , username);
      sessionStorage.setItem("username",username);
      // TODO: router navigate to dashboard
    })
  }
}
