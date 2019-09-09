import { Component, OnInit } from '@angular/core';

import DataSource from 'devextreme/data/data_source';
import { DemoService } from './demo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dx-grid',
  templateUrl: './dx-grid.component.html',
  styleUrls: ['./dx-grid.component.css']
})
export class DxGridComponent implements OnInit {




  dataSource:any; // DataSource;

  collapsed = false;
  contentReady = (e) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(["EnviroCare"]);
    }
  };
  customizeTooltip = (pointsInfo) => {
    return { text: parseInt(pointsInfo.originalValue) + "%" };
  }
  constructor(
    public service:DemoService,
    httpClient: HttpClient
    ) {}
  ngOnInit() {
    this.dataSource=   this.service.getCustomers();
  }
}
