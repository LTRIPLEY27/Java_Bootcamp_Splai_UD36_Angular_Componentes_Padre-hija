import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadoarticulos',
  templateUrl: './listadoarticulos.component.html',
  styleUrls: ['./listadoarticulos.component.css']
})
export class ListadoarticulosComponent implements OnInit {

  @Input() datos : any;  //DEFINCIÓN DEL INPUT EN LA CLASE HIJA PUES ES LA VARIABLE QUE RECIBIRÁ LA ESTRUCTURA DE PADRE MEDIANTE EL BINDING

  constructor() { }

  ngOnInit(): void {
  }

}
