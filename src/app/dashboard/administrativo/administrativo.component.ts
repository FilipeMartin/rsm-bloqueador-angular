import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.scss']
})
export class AdministrativoComponent implements OnInit {


  menu: Array<any> = [
    {
      title: 'Usuários',
      children: [
        {text: 'Clientes', icon: 'ta-user-group', path: 'usuarios/clientes'},
        {text: 'Administradores', icon: 'ta-user-o', path: 'usuarios/administradores'},
      ],
    },
    {
      title: 'Veiculos',
      children: [
        {text: 'Todos', icon: 'ta-gears', path: 'veiculos'},
      ],
    },
    {
      title: 'Dados do Rastreador',
      children: [
        {text: 'Posições', icon: 'ta-location', path: 'dados-rastrador/posicoes'},
        {text: 'Eventos', icon: 'ta-etapas', path: 'dados-rastrador/eventos'},
      ],
    }
  ];

  constructor() {
  }

  ngOnInit() {

  }

}
