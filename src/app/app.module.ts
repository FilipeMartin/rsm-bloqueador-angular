import { HomeModule } from './home/home.module';
import {SharedModule} from './core/shared/shared.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { EntryComponentsModule } from 'src/app/core/entry-components/entry-components.module';

import localeBr from "@angular/common/locales/pt";
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeBr, 'pt-BR');
registerLocaleData(localeBr, 'pt');


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule,
    HttpClientModule,
    HomeModule,
    EntryComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
