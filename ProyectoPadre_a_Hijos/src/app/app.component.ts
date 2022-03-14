import { Component } from '@angular/core';

//REFLEJA AL COMPONENTE HIJO
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoPadre_a_Hijos';

  //atributos y métodos de la clase

  //POR CADA INSTANCIA DEFINIDA DEL COMPONENTE HIJO un atributo a retornar
  numero1 : number = 0;
  numero2 : number = 0;
  numero3 : number = 0;
  resultado : any;

  //DEFINIMOS CONSTRUCTOR DE CLASE

  constructor () {
    this.numero1 = this.retornaValor(); //LLAMAMOS E INICIALIZAMOS CON EL MÉTODO QUE RETORNARÁ EL RANDOM
    this.numero2 = this.retornaValor();
    this.numero3 = this.retornaValor();

  }

  //MÉTODO QUE INICIALIZARÁ DESDE EL CONSTRUCTOR LOS VALORES DE LOS ATRIBUTOS

  retornaValor() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  //MÉTODO QUE DISPARARÁ EL EVENTO

  pushing() {
     this.numero1 = this.retornaValor();
     this.numero2 = this.retornaValor();
     this.numero3 = this.retornaValor();
    if(this.numero1 == this.numero2 && this.numero1 == this.numero3) {
      this.resultado = 'you win';
    } else {
      this.resultado = 'you lose';
    }
  }
}
