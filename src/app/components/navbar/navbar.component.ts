import { Component } from '@angular/core';
//import { PorfolioService } from '../servicios/porfolio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  //constructor(private datosPorfolio:PorfolioService) {}
constructor(private router:Router) {}
  ngOnInit(): void {
    //this.datosPorfolio.obtenerDatos().subscribe(data => {
      //console.log(data);
    }//);
login(){
    this.router.navigate(['/login']);
  }

}
