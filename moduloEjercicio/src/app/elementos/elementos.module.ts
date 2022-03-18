import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadoComponent } from './dado/dado.component';



@NgModule({
  declarations: [
    DadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [  //INCORPORACIÓN DEL 'EXPORTS' DEL COMPONENTE DADO
    DadoComponent
  ],
})
export class ElementosModule { }
