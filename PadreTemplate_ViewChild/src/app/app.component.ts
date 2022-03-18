import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PadreTemplate_ViewChild';

  // definición del atributo artículos, el cual mediante el binding se imprimirá en hija
  articulos = [  //ARCHIVO JSON QUE FUNGIRÁ COMO BASE DE DATOS MIENTRAS NO APUNTEMOS A UNA API EXTERNA
              {
                codigo : 1,
                descripcion : 'papas',
                precio : 10.55
              },
              {
                codigo : 2,
                descripcion : 'manzanas',
                precio : 12.10
              },
              {
                codigo : 3,
                descripcion : 'melón',
                precio : 52.30
              },
              {
                codigo : 4,
                descripcion : 'cebollas',
                precio : 17
              },
              {
                codigo : 5,
                descripcion : 'calabaza',
                precio : 20
              },
            ]
}
