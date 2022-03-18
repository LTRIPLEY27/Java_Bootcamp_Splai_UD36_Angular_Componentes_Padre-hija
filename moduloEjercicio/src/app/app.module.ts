import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementosModule } from './elementos/elementos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementosModule  //DECLARACIÓN DEL MÓDULO ELEMENTOS DENTRO DE LOS IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
