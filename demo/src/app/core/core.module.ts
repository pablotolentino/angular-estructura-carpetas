import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent, NavbarComponent } from "./componentes/";


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }