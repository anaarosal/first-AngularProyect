import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  numeroContador = 0;

  esPar = true;

  constructor() { }

  ngOnInit(): void {
  }

  suma(){ 
    this.numeroContador++
    console.log(this.numeroContador)

    if(this.numeroContador%2 == 0){
      console.log('es par')
      this.esPar = true;
    }else{
      console.log('es impar')
      this.esPar=false;
    }
  }

  resta(){
    this.numeroContador--
    console.log(this.numeroContador)

    if(this.numeroContador%2 == 0){
      console.log('es par')
      this.esPar = true;
    }else{
      console.log('es impar')
      this.esPar=false;
    }
  }
}
