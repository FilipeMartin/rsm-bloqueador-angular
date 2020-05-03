import { NgModule } from '@angular/core';
import { SharedModule } from '@app/core/shared/shared.module';

import { DadosRastreadorRoutingModule } from './dados-rastreador-routing.module';
import { DadosRastreadorComponent } from './dados-rastreador.component';
import { PosicoesComponent } from './posicoes/posicoes.component';
import { EventosComponent } from './eventos/eventos.component';


@NgModule({
  declarations: [
    DadosRastreadorComponent, 
    PosicoesComponent, 
    EventosComponent],
  imports: [
    SharedModule,
    DadosRastreadorRoutingModule
  ]
})
export class DadosRastreadorModule { }
