import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { PromptComponent } from './prompt/prompt.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ModalPageComponent } from './modal-page/modal-page.component';
import { ModalCheckListComponent } from './modal-check-list/modal-check-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const components = [
  AlertComponent,
  ConfirmComponent,
  PromptComponent,
  ModalPageComponent,
  // FileUploaderComponent,
  ModalCheckListComponent,
];

@NgModule({
  declarations: components,
  entryComponents: components,
  exports: components,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntryComponentsModule { }
