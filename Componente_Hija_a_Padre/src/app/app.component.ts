import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Componente_Hija_a_Padre';
  mensaje = ''; //RECIBIRÁ EL PARÁMETRO ENVIADO POR EL COMPONENTE HIJO

  // MÉTODO QUE DISPARARÁ EL EVENTO

  actualiza(t : any) {//EL PARÁMETRO LO RECIBE DESDE EL COMPONENTE HIJO
    this.mensaje = t + '(se actualiza cada 10 segundos y con parámetros de la hija)';
  }
}
