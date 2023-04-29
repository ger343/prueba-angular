import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// importamos los componentes *
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import {HabilidadesComponent } from './components/habilidades/habilidades.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
//import { ExpeEduComponent } from './components/expeEdu/expeEdu.component';
//(5a) Importamos el módulo HttpClient para obtener los recursos del servidor.
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NewExperienciaComponent } from './new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditSkillComponent } from './components/habilidades/edit-skill.component';
import { NewSkillComponent } from './components/habilidades/new-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    HabilidadesComponent,
    //ExpeEduComponent,
    AcercadeComponent,
    PresentacionComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaComponent,
    EducacionComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}) 
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
