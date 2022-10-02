import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})
// export class CanActivateGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     return true;
//   }
// }

export class LoggedService implements CanActivate {
  logged : boolean = sessionStorage.getItem("isLoggedIn") == "true" ? true:false;
  constructor(private http : HttpClient, private router:Router) {
      if(sessionStorage.getItem("isLoggedIn") == null)
        sessionStorage.setItem("isLoggedIn" , "false");
   }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  {
      if(sessionStorage.getItem('isLoggedIn') == "true"){
        return true;
      } 
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }})
      return false;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  isLoggedIn(){
    return sessionStorage.getItem("isLoggedIn") == 'true'?true:false;
  }
  log(username : string , password : string): any{
    this.http.post("http://localhost:3000/auth" , {email : username , parola:password}).subscribe((res : any)=>{
      console.log(res);
      if(res.succedded == true){
          console.log("User " + username + " have  just logged in!\n");
          sessionStorage.setItem("username" , username);
          sessionStorage.setItem("isLoggedIn", "true");
          sessionStorage.setItem("nume" , res.user.nume);
          sessionStorage.setItem("prenume" , res.user.prenume);
          sessionStorage.setItem("dateOfBirth" , res.user.dateOfBirth);
          console.log(this.isLoggedIn());
          this.router.navigate(['/'], {replaceUrl:true});
      }
      return res;
    })
  }
  register(username:string , password:string , firstName:string, lastName:string , dateOfBirth:string ){
    console.log("New account created!" , username);
    sessionStorage.setItem("username",username);
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("nume" , lastName);
    sessionStorage.setItem("prenume" , firstName);
    sessionStorage.setItem("dateOfBirth" , dateOfBirth);
    console.log(this.isLoggedIn);
    this.http.post("http://localhost:3000/api/users" , {
      "email" : username,
      "nume" : lastName,
      "prenume" : firstName,
      "dateOfBirth" : dateOfBirth,
      "parola" : password
    }).subscribe((res : any) =>{
      
      // TODO: router navigate to dashboard
    })
  }
}
