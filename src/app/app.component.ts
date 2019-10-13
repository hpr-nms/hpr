
import { Component, OnInit, HostListener, Input, ElementRef } from '@angular/core';

import { FormControl, FormGroupDirective, NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DxService } from './shared/components/dx-components/dx.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { IdxOptions } from './shared/components/dx-components/dx-base/IdxOptions';
import { DxDefault } from './shared/components/dx-components/dx-base/dx-defaults';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // providers: [MousetrapService, CustomEventsService]
})
export class AppComponent implements OnInit {
  opensEditPanel: boolean;
  closesEditPanel: boolean;
  dx: any;
  json: any;
  dxback: any;
  dataSource$ = new BehaviorSubject<any>([]);
  dxOptions: IdxOptions;
  options: FormGroup;
  aaa;
  inputtxt = '';
  model: any = { radio: "always" };
  hig = "70vh";
  constructor(fb: FormBuilder, public dxserv: DxService, private http: HttpClient) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      value: 'purple'
    });
  }
  ngOnInit(): void {
    this.dxOptions = new IdxOptions();
    this.dxOptions.Columns = [
      { caption: 'ایدی ماموریت', dataField: 'ID', dataType: "number", sortOrder: 'asc' },
      { caption: 'xcc ماموریت', dataField: 'Product', dataType: "string", sortOrder: "desc" },
      { caption: 'کد ماموریت', dataField: 'Amount', dataType: "string", sortOrder: "desc" },
      { caption: 'cx ماموریت', dataField: 'Region', dataType: "string" },
      { caption: 'نام ماموریت', dataField: 'State', dataType: "string" },
      { caption: 'ایدی برنامه', dataField: 'Discount', dataType: "number" },
      { caption: 'ایدی برنامه', dataField: 'Phone', dataType: "string" },
      { caption: 'کد برنامه', dataField: 'Channel', dataType: "string" },
      { caption: 'نام برنامه', dataField: 'Sector', dataType: "string" },
    ];
    this.dataSource$.next(this.dxserv.getCustomers());
  }
  clearForm(form: NgForm) {
    this.inputtxt = null;
    this.closesEditPanel = !this.closesEditPanel;
    this.dxback = JSON.parse(this.json);
    console.log('dxback', this.dxback);



  }
  submit() {
    this.dx = new DxDefault();
    console.log('dx', this.dx);
    this.json = JSON.stringify(this.dx);
    console.log('json::::', this.json);
    this.opensEditPanel = !this.opensEditPanel;


    const promise = this.http
    .post('src/json/hostConfig.json',this.json).subscribe(data=>{
      console.log(data);
    });


    // const promise = this.http
    //   .get('assets/json/hostConfig.json').subscribe(data => {
    //     console.log(data);
    //   });
  }
}
