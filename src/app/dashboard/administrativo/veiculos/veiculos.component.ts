import { Component, OnInit } from '@angular/core';
import { Pagination } from '@app/models/interfaces/commons';
import { TableComponentCols, TableComponentActions } from '@app/core/shared/table/table';
import { Router } from '@angular/router';
import { PlataformaService } from '@app/services/plataforma.service';
import { chunk } from 'lodash-es';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Veiculo } from '@app/models/interfaces/plataforma';
import { EditFormComponent } from './edit-form/edit-form.component';


@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {

  loading = false;

  tableCols: TableComponentCols<any> = [
    { field: 'id', title: 'Id', order: true },
    { field: 'name', title: 'Nome', order: true },
    { field: 'model', title: 'Modelo', order: true},
    { field: 'phone', title: 'Telefone', order: true},
    { field: 'contact', title: 'Cliente', order: true},
    { field: 'uniqueId', title: 'Imei', order: true},
    { field: 'status', title: 'Status', order: true},
  ];

  actions: TableComponentActions = [
    { action: 'edit', text: 'Editar', className: 'btn-primary', icon: 'ta-edit' }
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
    private route: Router,
    private modal: NgbModal
    ) {
  }

  async ngOnInit() {
    await this.getData(20);
    this.gotoPage().then();
  }

  itemAction(e) {
    if (e.action === 'edit') {
      this.salvarVeiculo(e.data);
    }
  }

  async gotoPage(page = 1) {
    this.loading = true;
    try {
      this.veiculos = await this.getVeiculos(page);
    } catch (e) {
      //this.app.alert(e.message).then();
    } finally {
      this.loading = false;
    }
  }

  async getData(perPage: number) {
    const veiculos = await this.plataforma.getVeiculos();

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

  async salvarVeiculo(veiculo?: Veiculo) {
    const modalRef = this.modal.open(EditFormComponent, {size: 'lg'});
    modalRef.componentInstance.veiculo = veiculo;

    try {
      await modalRef.result;
      
    } catch(e) {
      console.log(e);
    }
  }

}
