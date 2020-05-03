import { Component, OnInit } from '@angular/core';
import { Pagination } from '@app/models/interfaces/commons';
import { TableComponentCols, TableComponentActions } from '@app/core/shared/table/table';
import { Router } from '@angular/router';
import { PlataformaService } from '@app/services/plataforma.service';
import { chunk } from 'lodash-es';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '@app/models/interfaces/plataforma';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  loading = false;

  tableCols: TableComponentCols<any> = [
    { field: 'id', title: 'id', order: true },
    { field: 'name', title: 'Nome', order: true },
    { field: 'phone', title: 'Telefone', order: true},
    { field: 'map', title: 'Mapa', order: true},
    { field: 'latitude', title: 'Latitude', order: true},
    { field: 'longitude', title: 'Longitude', order: true},
    { field: 'expirationTime', title: 'Data de Expiração', order: true},
  ];

  actions: TableComponentActions = [
    { action: 'edit', text: 'Editar', className: 'btn-primary', icon: 'ta-edit' }
  ];

  clientes: Pagination<any> = {
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
      this.salvarUsuario(e.data);
    }
  }

  async gotoPage(page = 1) {
    this.loading = true;
    try {
      this.clientes = await this.getClientes(page);
    } catch (e) {
      //this.app.alert(e.message).then();
    } finally {
      this.loading = false;
    }
  }

  async getData(perPage: number) {
    const clientes = await this.plataforma.getClientes();

    this.data = {
      clientesAll: clientes,
      clientes: chunk(clientes, perPage),
      perPage: perPage
    };
  }

  getClientes(page) {
    return {
      data: this.data.clientes[page - 1],
      page: page,
      perPage: this.data.perPage,
      totalItems: this.data.clientesAll.length,
      totalPages: this.data.clientes.length
    };
  }

  async salvarUsuario(usuario?: Usuario) {
    const modalRef = this.modal.open(EditFormComponent, {size: 'lg'});
    modalRef.componentInstance.usuario = usuario;

    try {
      await modalRef.result;
      
    } catch(e) {
      console.log(e);
    }
  }

}
