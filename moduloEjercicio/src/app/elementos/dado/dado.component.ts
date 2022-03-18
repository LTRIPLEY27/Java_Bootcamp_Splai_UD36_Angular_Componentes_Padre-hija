import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  @Input() valor : any; //'Input' de la variable que recibirá los datos de padre

  constructor() { }

  ngOnInit(): void {
  }

}
