import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {

  datoTitulo= "";

  listaPublicaciones = [
    {
      titulo:"Toy Story",
      texto: "Mola mucho",
      urlImagen:"https://picsum.photos/id/1/200/300",
      favorito:true,
    },
    {
      titulo:"Melocotones azules",
      texto: "Supernutritivas",
      urlImagen:"https://picsum.photos/id/12/200/300",
      favorito:false,
    },
    {
      titulo:"Diseño sim",
      texto: "Innovador",
      urlImagen:"https://picsum.photos/id/11/200/300",
      favorito:true,
    },
    {
      titulo:"Austral",
      texto: "Libros",
      urlImagen:"https://picsum.photos/id/31/200/300",
      favorito:false,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  marcarFav(publi){
    console.log('DBL CLICK')
    console.log(publi)
    if(publi.favorito == true){
      publi.favorito = false;
    }else{
      publi.favorito = true;
    }
  }
  publicarContenido(){
    let miNuevaPublicacion = {
      titulo: this.datoTitulo,
      texto:"datos inventados",
      urlImagen:"https://picsum.photos/id/260/200/300",
      favorito: false,
    }
    this.listaPublicaciones.push(miNuevaPublicacion)
    this.datoTitulo=""
  }

}
