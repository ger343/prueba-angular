import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service'
import { persona } from '../../model/persona.model';
//import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: persona = new persona("","","");

  //constructor(public personaService: PersonaService){}

  miPorfolio: any;

  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit():void{
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPorfolio = data;
      });
    //this.personaService.getPersona().subscribe(data => {this.persona = data});
  }
}
