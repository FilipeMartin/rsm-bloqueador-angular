import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NgbModule,
  NgbPaginationModule,
  NgbAlertModule,
  NgbTooltipModule,
  NgbAccordionModule,
  NgbPopoverModule
} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BreadcrumbModule} from 'angular-crumbs';
import {LoadingComponent} from './loading/loading.component';
import {AccordionComponent} from './accordion/accordion.component';
import {CollapseComponent} from './collapse/collapse.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {TableComponent} from './table/table.component';
import {OrdersComponent} from './table/helper/orders/orders.component';
import {httpInterceptorProviders} from "@app/core/http-interceptors";
import {NgxMaskModule} from "ngx-mask";
import {RouterModule} from "@angular/router";
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    LoadingComponent,
    AccordionComponent,
    CollapseComponent,
    TableComponent,
    OrdersComponent,
    OrderByPipe
  ],
  providers: [httpInterceptorProviders],
  entryComponents: [],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgbTooltipModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbPopoverModule,
    HttpClientModule,
    NgbAccordionModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    NgxMaskModule.forRoot({})
  ],
  exports: [
    CommonModule,
    NgbModule,
    PdfViewerModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbTooltipModule,
    NgbAccordionModule,
    NgbPopoverModule,
    ReactiveFormsModule,
    HttpClientModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingComponent,
    AccordionComponent,
    CollapseComponent,
    TableComponent,
    OrdersComponent,
    NgxMaskModule,
    OrderByPipe
  ],

})
export class SharedModule {
}
