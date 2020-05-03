import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from "angular-crumbs";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService, private title: Title) {
  }

  ngOnInit() {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      const title = crumbs.map(i => i.displayName).join(' - ');
      this.title.setTitle(`${title} : Assitente Normativo De Operação`);
    });
  }

}
