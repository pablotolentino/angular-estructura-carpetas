import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandejasRoutingModule } from './bandejas-routing.module';
import { EvaluacionComponent } from './paginas/evaluacion/evaluacion.component';
import { FormalizacionComponent } from './paginas/formalizacion/formalizacion.component';
import { FirmadosComponent } from './paginas/firmados/firmados.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EvaluacionComponent,
    FormalizacionComponent,
    FirmadosComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    BandejasRoutingModule,
    SharedModule
  ],
  exports:[
    MenuComponent
  ]
})
export class BandejasModule { }
