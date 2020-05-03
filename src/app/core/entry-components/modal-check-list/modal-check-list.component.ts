import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-check-list',
  templateUrl: './modal-check-list.component.html',
  styleUrls: ['./modal-check-list.component.scss']
})
export class ModalCheckListComponent implements OnInit {

  htmlContent: any;
  title: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  setContent(title = "Check List Equipamento", content) {
    const message = content instanceof Array ? content.join('<br>') : content;

    this.htmlContent = message;
  }
}
