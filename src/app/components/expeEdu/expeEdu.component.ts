import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
//import { PorfolioService } from '../servicios/porfolio.service'; //(3)*

@Component({
  selector: 'app-expeEdu',
  templateUrl: './expeEdu.component.html',
  styleUrls: ['./expeEdu.component.css']
})
export class ExpeEduComponent implements OnInit {
expe: Experiencia[] = [];

constructor(private sExperiencia: SExperienciaService) /*private tokenService: TokenService*/{}

//isLogged = false;

ngOnInit(): void{
  this.cargarExperiencia();
//if(this.tokenService.getToken()){
  //this.isLogged = true;
//} else {
  //this.isLogged = false;
 }
//}
cargarExperiencia(): void {
this.sExperiencia.lista().subscribe(data => {this.expe = data;})
}
}



  //miPorfolio:any; //(9a) variable de tipo any.
  //experienciaList:any; //(10a) se crea la variable para recorrer las listas
 //educacionList:any;

  //(2)Se crea el constructor y se agrega la referencia *(3) arriba.
  //constructor(private datosPorfolio:PorfolioService){}

  //(4) para acceder cuando nosotros querramos, creamos los métodos o propiedades
  //
  //ngOnInit():void{
   //this.datosPorfolio.obtenerDatos().subscribe(data =>{ //(8) me suscribo al observable
      //console.log(data);

      //this.miPorfolio = data; //(9b) asignamos a la variable definida
     //this.experienciaList=data.experience; //(10b)
     //this.educacionList=data.education;
    //});
 // }

//}
