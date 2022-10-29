import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandejasRoutingModule } from './bandejas-routing.module';
import { EvaluacionComponent, FirmadosComponent, FormalizacionComponent } from './paginas';
import { MenuComponent } from './componentes';
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
