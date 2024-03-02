import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvivenciaComponent } from './convivencia.component';

const routes: Routes = [{ path: '', component: ConvivenciaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvivenciaRoutingModule { }
