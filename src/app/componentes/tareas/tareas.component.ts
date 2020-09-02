import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  listaPorHacer=["HTML","CSS","JS"];
  listaCompletadas=['Siesta', 'Comer'];
  entradaTarea="";

  constructor() { }

  ngOnInit(): void {
  }

  addTarea(){
    this.listaPorHacer.push(this.entradaTarea);
    this.entradaTarea="";
  }
  completeTarea(tarea){
    console.log('tarea')
    console.log(tarea)
    // this.listaPorHacer.splice
    const index = this.listaPorHacer.indexOf(tarea);
    if(index > -1){
      this.listaPorHacer.splice(index,1);
    }
    this.listaCompletadas.push(tarea)
  }
  descompletaTarea(tarea,i){
    this.listaCompletadas.splice(i,1);
    this.listaPorHacer.push(tarea)
  }
}
