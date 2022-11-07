import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BandejasModule } from '../bandejas/bandejas.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './paginas/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    BandejasModule,
    SharedModule
  ]
})
export class HomeModule { }
