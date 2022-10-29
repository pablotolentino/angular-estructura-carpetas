import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/componentes';

@Component({
  selector: 'app-firmados',
  templateUrl: './firmados.component.html',
  styleUrls: ['./firmados.component.css']
})
export class FirmadosComponent extends BaseComponent implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
