import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general.component';
import { MntoComponent } from './mnto/mnto.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ReglamentoComponent } from './reglamento/reglamento.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { MedioambienteComponent } from './medioambiente/medioambiente.component';
import { EventosComponent } from './eventos/eventos.component';


const routes: Routes = [
  { path: '', component: GeneralComponent },
  { path: 'news', component: NoticiasComponent },
  { path: 'mnto', component: MntoComponent },
  { path: 'reglamento', component: ReglamentoComponent },
  { path: 'mascotas', component: MascotasComponent },
  { path: 'medioambiente', component: MedioambienteComponent },
  { path: 'eventos', component: EventosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
