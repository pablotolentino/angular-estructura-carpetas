import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluacionComponent } from './paginas/evaluacion/evaluacion.component';
import { FirmadosComponent } from './paginas/firmados/firmados.component';
import { FormalizacionComponent } from './paginas/formalizacion/formalizacion.component';

const routes: Routes = [
  {
    path: 'evaluacion',
    component: EvaluacionComponent
  },
  {
    path: 'formalizacion',
    component: FormalizacionComponent
  },
  {
    path: 'firmados',
    component: FirmadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandejasRoutingModule { }
