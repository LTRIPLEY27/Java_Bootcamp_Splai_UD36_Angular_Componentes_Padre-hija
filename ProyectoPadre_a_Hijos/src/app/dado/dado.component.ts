import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  //SI RECIBIRÁ VALORES DE OTRO COMPONENTE SE DEBE DE EXPLICITAR CON EL DECORADOR @Input o @Output CUANDO APLIQUE
@Input() valor : any;

  //DEFINICIÓN DE ATRIBUTOS

  constructor() { }

  ngOnInit(): void {

  }

}
