import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-numerico2',
  templateUrl: './selector-numerico2.component.html',
  styleUrls: ['./selector-numerico2.component.css']
})
export class SelectorNUMERICO2Component implements OnInit {

  //DECLARACION DE INPUTS Y ATRIBUTOS

  @Input() minimo : any;
  @Input() maximo : any;
  actual : any;

  constructor() { }

  ngOnInit(): void {
    this.actual = this.minimo
  }

  incrementar() {
    if(this.actual < this.minimo)
      this.actual ++;
  }

  decrementar() {
    if(this.actual > this.maximo)
      this.actual --;
  }

  fijar(v : number) {
    if(v >= this.minimo && v <= this.maximo)
      this.actual = v;
  }

}
