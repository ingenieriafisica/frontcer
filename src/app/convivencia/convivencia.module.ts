import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvivenciaRoutingModule } from './convivencia-routing.module';
import { ConvivenciaComponent } from './convivencia.component';
import { EventosComponent } from './eventos/eventos.component';
import { ParqueaderosComponent } from './parqueaderos/parqueaderos.component';
import { ZonascomunesComponent } from './zonascomunes/zonascomunes.component';


@NgModule({
  declarations: [
    ConvivenciaComponent,
    EventosComponent,
    ParqueaderosComponent,
    ZonascomunesComponent
  ],
  imports: [
    CommonModule,
    ConvivenciaRoutingModule
  ]
})
export class ConvivenciaModule { }
