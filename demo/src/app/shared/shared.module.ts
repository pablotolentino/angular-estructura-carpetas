import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccesoDenegadoComponent, BaseComponent, ErrorResponseComponent } from "./componentes"
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