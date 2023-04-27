import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit{
  persona: persona = new persona ("","","",);

  miPorfolio:any;
  //datosPorfolio: any;
  

  constructor(public personaService: PersonaService,private datosPorfolio:PorfolioService ){}
 
  ngOnInit():void{    
    this.datosPorfolio.obtenerDatos().subscribe(data =>{ 
      console.log(data);

      this.miPorfolio = data; 

    });
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
