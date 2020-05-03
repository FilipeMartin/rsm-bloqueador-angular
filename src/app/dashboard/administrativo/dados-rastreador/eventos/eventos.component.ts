import { Pagination } from '@app/models/interfaces/commons';
import { Component, OnInit } from '@angular/core';
import { TableComponentCols, TableComponentActions } from '@app/core/shared/table/table';
import { Router } from '@angular/router';
import { PlataformaService } from '@app/services/plataforma.service';
import { chunk } from 'lodash-es';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  loading = false;

  tableCols: TableComponentCols<any> = [
    { field: 'id', title: 'Id', order: true },
    { field: 'bingKey', title: 'Bing Key', order: true},
    { field: 'mapUrl', title: 'Mapa', order: true},
    { field: 'zoom', title: 'Zoom', order: true},
    { field: 'version', title: 'Versão', order: true },
  ];
  
  veiculos: Pagination<any> = {
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
      this.veiculos = await this.getVeiculos(page);
      console.log("object", this.veiculos);
    } catch (e) {
      //this.app.alert(e.message).then();
    } finally {
      this.loading = false;
    }
  }

  async getData(perPage: number) {
    const veiculos = [await this.plataforma.getEventos()];

    this.data = {
      veiculosAll: veiculos,
      veiculos: chunk(veiculos, perPage),
      perPage: perPage
    };
  }

  getVeiculos(page) {
    return {
      data: this.data.veiculos[page - 1],
      page: page,
      perPage: this.data.perPage,
      totalItems: this.data.veiculosAll.length,
      totalPages: this.data.veiculos.length
    };
  }

}
