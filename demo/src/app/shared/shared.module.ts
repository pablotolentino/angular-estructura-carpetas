import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AccesoDenegadoComponent,  ErrorResponseComponent } from "./componentes";
@NgModule({
    declarations: [
        ErrorResponseComponent,
        AccesoDenegadoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ErrorResponseComponent,
        AccesoDenegadoComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }