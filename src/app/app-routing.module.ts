import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './new-experiencia.component';


const routes: Routes = [
      {path: '', component: HomeComponent },
      {path: 'login', component: LoginComponent },
      { path: 'nuevaexp', component: NewExperienciaComponent},
     

];
 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]

})
export class AppRoutingModule { }


//@NgModule({
  //  imports: [RouterModule.forRoot(routes)],
    //exports: [RouterModule]
//})
//export class RouterModule {}