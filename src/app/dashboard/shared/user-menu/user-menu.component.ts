import {Component, OnInit} from '@angular/core';
import {AuthService} from "@app/services/auth.service";

@Component({
  selector: 'user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss', '../styles/commons.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
  }

}
