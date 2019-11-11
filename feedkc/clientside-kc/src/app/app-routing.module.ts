import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {DrviewComponent} from "./drview/drview.component";
import {RequestorComponent} from "./requestor/requestor.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'donor/:username',
    component:DrviewComponent
  },
  {
    path:'requester/:username',
    component:RequestorComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
