import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GeneralModule } from './general/general.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./general/general.module').then(m => m.GeneralModule) }, 
  { path: 'seguridad', loadChildren: () => import('./seguridad/seguridad.module').then(m => m.SeguridadModule) }, 
  { path: 'convivencia', loadChildren: () => import('./convivencia/convivencia.module').then(m => m.ConvivenciaModule) },
  { path: 'contacto', loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule) }, 
  { path: 'clasificados', loadChildren: () => import('./clasificados/clasificados.module').then(m => m.ClasificadosModule) },
  { path: 'general', loadChildren: () => import('./general/general.module').then(m => m.GeneralModule ) },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
