import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "@app/dashboard/shared/header/header.component";
import {SharedModule as CoreSharedModule} from "@app/core/shared/shared.module";
import {RouterModule} from "@angular/router";
import {NotificationsComponent} from './notifications/notifications.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import {MenuComponent} from './menu/menu.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    NotificationsComponent, 
    UserMenuComponent, 
    MenuComponent,
  ],
  imports: [
    RouterModule,
    CoreSharedModule,
    CommonModule
  ],
  entryComponents: [],
  exports: [
    HeaderComponent, 
    CoreSharedModule
  ],

})
export class SharedModule {
}
