import { Usuario } from './../../../../models/interfaces/plataforma';
import { Pagination } from '@app/models/interfaces/commons';
import { Component, OnInit } from '@angular/core';
import { TableComponentCols, TableComponentActions } from '@app/core/shared/table/table';
import { Router } from '@angular/router';
import { PlataformaService } from '@app/services/plataforma.service';
import { chunk } from 'lodash-es';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.scss']
})
export class AdministradoresComponent implements OnInit {

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

  administradores: Pagination<any> = {
    perPage: 0,
    page: 0,
    totalItems: 0,
    data: [],
    totalPages: 0
  };

  // REMOVER
  data: any;
  //========

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
      this.administradores = await this.getAdministradores(page);
      console.log("object", this.administradores);
    } catch (e) {
      //this.app.alert(e.message).then();
    } finally {
      this.loading = false;
    }
  }

  async getData(perPage: number) {
    let administradores = await this.plataforma.getClientes();

    administradores = administradores.filter(item => item.admin == true);

    this.data = {
      administradoresAll: administradores,
      administradores: chunk(administradores, perPage),
      perPage: perPage
    };
  }

  getAdministradores(page) {
    return {
      data: this.data.administradores[page - 1],
      page: page,
      perPage: this.data.perPage,
      totalItems: this.data.administradoresAll.length,
      totalPages: this.data.administradores.length
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
