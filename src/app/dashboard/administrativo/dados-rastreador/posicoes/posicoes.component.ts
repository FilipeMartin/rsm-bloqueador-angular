import { Pagination } from '@app/models/interfaces/commons';
import { Component, OnInit } from '@angular/core';
import { TableComponentCols, TableComponentActions } from '@app/core/shared/table/table';
import { Router } from '@angular/router';
import { PlataformaService } from '@app/services/plataforma.service';
import { chunk } from 'lodash-es';

@Component({
  selector: 'app-posicoes',
  templateUrl: './posicoes.component.html',
  styleUrls: ['./posicoes.component.scss']
})
export class PosicoesComponent implements OnInit {

  loading = false;

  tableCols: TableComponentCols<any> = [
    { field: 'id', title: 'Id', order: true },
    { field: 'deviceId', title: 'Id Veículo', order: true },
    { field: 'longitude', title: 'Longitude', order: true},
    { field: 'speed', title: 'Velocidade', order: true},
    { field: 'protocol', title: 'Protocolo', order: true},
    { field: 'valid', title: 'Status', order: true},
  ];

  posicoes: Pagination<any> = {
    perPage: 0,
    page: 0,
    totalItems: 0,
    data: [],
    totalPages: 0
  };

  data: any;

  constructor(
    private plataforma: PlataformaService,
    private route: Router
    ) {
  }

  async ngOnInit() {
    await this.getData(20);
    this.gotoPage().then();
  }

  async gotoPage(page = 1) {
    this.loading = true;
    try {
      this.posicoes = await this.getPosicoes(page);
      console.log("object", this.posicoes);
    } catch (e) {
      //this.app.alert(e.message).then();
    } finally {
      this.loading = false;
    }
  }

  async getData(perPage: number) {
    const posicoes = await this.plataforma.getPosicoes();

    this.data = {
      posicoesAll: posicoes,
      posicoes: chunk(posicoes, perPage),
      perPage: perPage
    };
  }

  getPosicoes(page) {
    return {
      data: this.data.posicoes[page - 1],
      page: page,
      perPage: this.data.perPage,
      totalItems: this.data.posicoesAll.length,
      totalPages: this.data.posicoes.length
    };
  }

}
