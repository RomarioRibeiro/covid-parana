import { CovidapiService } from './serveci/covidapi.service';
import { Component, OnInit } from '@angular/core';
import { Covid } from './module/covid.modul';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  dados : Covid;
    parana: any ='/assets/imagem/logo.jpg'
    unopar: any ='/assets/imagem/unopar.png'
constructor(private covidSrevice : CovidapiService ){}

ngOnInit(){

  this.carregardados();

}

carregardados(){
this.covidSrevice.obterdados()
.then(dados => this.dados = dados );

}


}
