import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("nume");
    sessionStorage.removeItem("prenume");
    sessionStorage.removeItem("dateOfBirth");
    sessionStorage.setItem("isLoggedIn" , "false");
    this.router.navigate(['/login'] , {replaceUrl: true});
  }

}
