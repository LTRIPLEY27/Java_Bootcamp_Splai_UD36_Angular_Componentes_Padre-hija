//IMPORTACIONES DE LOS EVENTOS
import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  //ATRIBUTOS DE CLASE

  segundo: number = 0;

  //LLAMADO A LOS INPUTS Y OUTPUTS

  @Input() inicio : any;
  @Output() multiplo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    this.segundo = this.inicio;//INPUT QUE RECIBE CON EL MÉTODO @Input
    setInterval(() => {
      this.segundo++;
      if(this.segundo % 10 == 0)
        this.multiplo.emit(this.segundo);
      }, 1000);
  }

}
