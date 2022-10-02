import { Component, OnInit } from '@angular/core';
import { LoggedService } from '../logged.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username : any = "";
  firstname : any = "";
  lastname: any = "";
  dateOfBirth : any = "";
  constructor(private loggedService: LoggedService) {
      this.username = sessionStorage.getItem("username");
      this.firstname = sessionStorage.getItem("prenume");
      this.lastname = sessionStorage.getItem("nume");
      this.dateOfBirth = sessionStorage.getItem("dateOfBirth");
   }

  ngOnInit(): void {
  }
  
}
