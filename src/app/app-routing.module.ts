import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewSkillComponent } from './components/habilidades/new-skill.component';
import { EditSkillComponent } from './components/habilidades/edit-skill.component';



const routes: Routes = [
      {path: '', component: HomeComponent },
      {path: 'login', component: LoginComponent },
      { path: 'nuevaexp', component: NewExperienciaComponent},
      { path: 'editexp/:id', component: EditExperienciaComponent },  
      {path: 'nuevaedu', component: NeweducacionComponent },
      {path: 'editedu/:id', component: EditeducacionComponent },
      {path: 'newskill', component: NewSkillComponent},
      {path: 'editskill/:id', component: EditSkillComponent}

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