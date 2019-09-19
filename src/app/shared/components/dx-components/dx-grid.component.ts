import { Component, OnInit } from '@angular/core';

import DataSource from 'devextreme/data/data_source';
import { HttpClient } from '@angular/common/http';
import { DxService } from './dx.service';

@Component({
  selector: 'app-dx-grid',
  templateUrl: './dx-grid.component.html',
  styleUrls: ['./dx-grid.component.css']
})
export class DxGridComponent implements OnInit {

  events: Array<string> = [];

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
    public dxService:DxService
    ) {}
  ngOnInit() {
    this.dataSource=   this.dxService.getCustomers();
  }
  logEvent(eventName,event) {
    console.log(eventName,event);

    this.events.unshift(eventName);
}

clearEvents() {
    this.events = [];
}
}
