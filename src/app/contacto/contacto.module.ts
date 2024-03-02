import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { BuzondesugerenciasComponent } from './buzondesugerencias/buzondesugerencias.component';


@NgModule({
  declarations: [
    ContactoComponent,
    BuzondesugerenciasComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
