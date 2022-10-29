import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/componentes';

@Component({
  selector: 'app-formalizacion',
  templateUrl: './formalizacion.component.html',
  styleUrls: ['./formalizacion.component.css']
})
export class FormalizacionComponent extends BaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
