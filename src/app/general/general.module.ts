import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { MntoComponent } from './mnto/mnto.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { MedioambienteComponent } from './medioambiente/medioambiente.component';
import { EventosComponent } from './eventos/eventos.component';
import { StrapiService } from '../strapi.service';
import { EventosService } from './eventos/eventos.service';

@NgModule({
  declarations: [
    GeneralComponent,
    MntoComponent,
    NoticiasComponent,
    ReglamentoComponent,
    MascotasComponent,
    MedioambienteComponent,
    EventosComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule
  ],
  providers: [StrapiService,EventosService],
})
export class GeneralModule { }
