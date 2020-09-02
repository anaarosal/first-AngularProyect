import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  clickoPopup = false;

  constructor() { }

  ngOnInit(): void {
  }

  pop(){
    console.log('pincho en pop')
    this.clickoPopup = true;
  }
  cerrar(){
    console.log('cierro el modal')
    this.clickoPopup = false;
  }
}
