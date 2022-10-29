import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccesoDenegadoComponent } from "./componentes/acceso-denegado/acceso-denegado.component";
import { ErrorResponseComponent } from './componentes/error-response/error-response.component';
import { BaseComponent } from './componentes/base/base.component';
@NgModule({
    declarations: [
        ErrorResponseComponent,
        AccesoDenegadoComponent,
        BaseComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ErrorResponseComponent,
        AccesoDenegadoComponent,
        BaseComponent
    ]
})
export class SharedModule { }