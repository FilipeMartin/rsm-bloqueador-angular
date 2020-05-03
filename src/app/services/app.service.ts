import { ModalCheckListComponent } from './../core/entry-components/modal-check-list/modal-check-list.component';
import { Injectable } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AlertComponent } from '../core/entry-components/alert/alert.component';
import { ConfirmComponent } from '../core/entry-components/confirm/confirm.component';
import { PromptComponent } from '../core/entry-components/prompt/prompt.component';
import { ModalPageComponent } from '../core/entry-components/modal-page/modal-page.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  moment: any;
  config: any;
  private inputSubject = new BehaviorSubject<string>('');

  constructor(
    public modal: NgbModal,
    public auth: AuthService,
    public router: Router,
    public modalConfig: NgbModalConfig
  ) {
    this.config = environment;
    this.modalConfig.backdrop = 'static';
  }

  alert(message: string | Array<string>, title: string = 'Alerta', options?: Array<any> | any) {
    const ref = this.modal.open(AlertComponent, options);
    ref.componentInstance.title = title;
    ref.componentInstance.setMessage(message);
    return ref.result;
  }

  confirm(message: string, title: string = 'Confirme',
    options: { text: string, value: any, cssClass: string }[] =
      [
        { text: 'Cancelar', value: false, cssClass: 'btn btn-link' },
        { text: 'Ok', value: true, cssClass: 'btn-primary' }
      ]) {
    const ref = this.modal.open(ConfirmComponent, { backdrop: 'static' });
    ref.componentInstance.setMessage(message);
    ref.componentInstance.title = title;
    ref.componentInstance.options = options;
    return ref.result;
  }

  prompt(message: string, title: string = 'Confirme') {
    const ref = this.modal.open(PromptComponent, { backdrop: 'static' });
    ref.componentInstance.setMessage(message);
    ref.componentInstance.title = title;
    return ref.result;
  }

  openDialog(content) {
    const modalRef = this.modal.open(ModalPageComponent, {
      backdrop: 'static',
      size: 'xl'
    });
    try {
      if (modalRef.componentInstance !== undefined) {
        const component = modalRef.componentInstance as ModalPageComponent;
        component.render(content);
      }
    } catch (e) {
      console.error(e);
    }
    return modalRef.result;
  }

  modalCheckList(content, title?: string) {
    const modalRef = this.modal.open(ModalCheckListComponent, {
      backdrop: 'static',
      size: 'lg'
    });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.htmlContent = content;
    return modalRef.result;
  }

  printPage() {
  }

  atualizarValorInput(value: string) {
    this.inputSubject.next(value);
  }

  getInputValue() {
    return this.inputSubject.asObservable();
  }
}
