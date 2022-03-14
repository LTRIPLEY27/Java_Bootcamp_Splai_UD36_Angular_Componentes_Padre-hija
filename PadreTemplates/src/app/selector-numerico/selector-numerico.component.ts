import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-numerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.css']
})
export class SelectorNumericoComponent implements OnInit {
//DECORADORES PARA RECIBIR Y ENVIAR PARAMETROS: IMPERATIVO

  @Input() minimo : any;
  @Input() maximo : any;
  actual : any;


  constructor() { }

  ngOnInit(): void {
    this.actual = this.minimo;
  }

  //MÉTODOS A IMPLEMENTAR DESDE EL TEMPLATE

  incrementar() {
    if(this.actual < this.maximo)
      this.actual++;
  }

  decrementar() {
    if (this.actual > this.minimo)
      this.actual--;
  }

  //FUNCIÓN QUE RECIBE EL PARÁMETRO @Input
  fijar(x : number) {
    if(x >= this.minimo && x <= this.maximo)
      this.actual = x;
  }


}
