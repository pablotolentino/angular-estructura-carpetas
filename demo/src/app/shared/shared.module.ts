import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { ModalModule } from "ngx-bootstrap/modal";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AccesoDenegadoComponent,  ErrorResponseComponent } from "./componentes";
@NgModule({
    declarations: [
        ErrorResponseComponent,
        AccesoDenegadoComponent
    ],
    imports: [
        CommonModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forChild(),
        AccordionModule,

    ],
    exports: [
        ErrorResponseComponent,
        AccesoDenegadoComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AccordionModule,
        PaginationModule,
        ModalModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
})
export class SharedModule { }