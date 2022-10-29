import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./componentes/footer/footer.component";
import { NavbarComponent } from "./componentes/navbar/navbar.component";

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [
      CommonModule    
    ],
    exports:[
        NavbarComponent,
        FooterComponent
    ]
  })
  export class CoreModule { }