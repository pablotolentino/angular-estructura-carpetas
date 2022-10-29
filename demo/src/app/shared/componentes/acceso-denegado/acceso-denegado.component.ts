import { Component, OnInit } from '@angular/core';
import { PermisoBuilder } from '../../builders/index';

@Component({
  selector: 'app-acceso-denegado',
  templateUrl: './acceso-denegado.component.html',
  styleUrls: ['./acceso-denegado.component.css']
})
export class AccesoDenegadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var pb = new PermisoBuilder();
  }

}
