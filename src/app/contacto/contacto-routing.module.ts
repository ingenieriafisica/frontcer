import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto.component';
import { BuzondesugerenciasComponent } from './buzondesugerencias/buzondesugerencias.component';

const routes: Routes = [
  { path: '', component: ContactoComponent },
  {path:'',component:BuzondesugerenciasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
