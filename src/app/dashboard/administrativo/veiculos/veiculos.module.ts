import { NgModule } from '@angular/core';
import { SharedModule } from '@app/core/shared/shared.module';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos.component';
import { EditFormComponent } from './edit-form/edit-form.component';


@NgModule({
  declarations: [
    VeiculosComponent,
    EditFormComponent
  ],
  imports: [
    SharedModule,
    VeiculosRoutingModule
  ],
  entryComponents: [
    EditFormComponent
  ]
})
export class VeiculosModule { }
