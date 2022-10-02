import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoggedService } from './logged.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent
  ],
  imports: [
    MdbCollapseModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'',
        component:DashboardComponent,
        canActivate:[LoggedService]
      },
      {
        path:'logout',
        component:LogoutComponent
      },
      { path: '**', redirectTo: '' }
    ])
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
}
