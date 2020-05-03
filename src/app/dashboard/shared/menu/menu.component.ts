import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', "../styles/commons.scss"]
})
export class MenuComponent implements OnInit {

  @Input() menu = [
    {text: 'Clientes', icon: 'ta-user-group', path: '/dashboard/usuarios/clientes'},
    {text: 'Adminstradores', icon: 'ta-user-o', path: '/dashboard/usuarios/administradores'},
    {text: 'Veículos', icon: 'ta-gears', path: '/dashboard/veiculos'},
    {text: 'Configurações', icon: 'ta-gear', path: '/dashboard/configuracao'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
