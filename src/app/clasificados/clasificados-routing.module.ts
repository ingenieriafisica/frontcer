import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificadosComponent } from './clasificados.component';

const routes: Routes = [{ path: '', component: ClasificadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasificadosRoutingModule { }
