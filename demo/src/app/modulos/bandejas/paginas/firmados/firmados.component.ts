import { Component, OnInit, TemplateRef } from '@angular/core';
import { BaseComponent } from 'src/app/shared/componentes';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-firmados',
  templateUrl: './firmados.component.html',
  styleUrls: ['./firmados.component.css']
})
export class FirmadosComponent extends BaseComponent implements OnInit {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {
    super();
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }

}
