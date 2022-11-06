import { Component,  OnDestroy,  OnInit, ViewChild } from '@angular/core';
import {  ErrorResponseComponent,BaseComponent } from 'src/app/shared/componentes';
import { DestinosCredito, Productos } from 'src/app/shared/enums';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent extends BaseComponent  {

  @ViewChild('errorComponent') set errorResponseComponent(directive: ErrorResponseComponent) {

  };

 
  constructor() {
    super();
  }

  // ngOnInit(): void {
  //   if (DestinosCredito.Sustitucion == 1) {

  //   }

  //   if (Productos.HipotecaSantander == 0) {

  //   }
  //   if (!this.errorResponseComponent) {
  //     console.log('existe');
  //   }
  // }

}
