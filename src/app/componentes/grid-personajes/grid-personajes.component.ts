import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-grid-personajes',
  templateUrl: './grid-personajes.component.html',
  styleUrls: ['./grid-personajes.component.scss']
})
export class GridPersonajesComponent implements OnInit {

  numeroPersonajes=0;
  listaPersonajes=[];

  constructor(
    private miApiNueva: ApiService
    
  ) { }

  ngOnInit(): void {
    console.log('estoy en gridPersonajes')

    this.miApiNueva.getPersonajes().subscribe( quieroRespuesta =>{
      console.log('quieroRespuesta')
      console.log(quieroRespuesta)

      this.numeroPersonajes= quieroRespuesta['info']['count']
      this.listaPersonajes=quieroRespuesta['results']
    },error =>{
      console.log('error')
      console.log(error)
    })
  }

}
