import { Component, OnInit, ViewChild, Input, OnChanges, EventEmitter, Output } from "@angular/core";
import { DxTemplateDirective, DxDataGridComponent } from "devextreme-angular";
import { DxService } from "../dx.service";
import { DxiDataGridColumn } from 'devextreme-angular/ui/nested/base/data-grid-column-dxi';
import { IColumn, IdxOptions } from './IdxOptions';
import { of } from 'rxjs';


@Component({
  selector: "app-dx-base",
  templateUrl: "./dx-base.component.html",
  styleUrls: ["./dx-base.component.css"],
  providers: [DxService, DxTemplateDirective]
})
export class DxBaseComponent implements OnInit, OnChanges {

  @Input('dataSource') dataSource: any;
  @Input('dxOptions') dxOptions: IdxOptions;

  @ViewChild(DxDataGridComponent,{static:false}) dataGrid: DxDataGridComponent;
  @ViewChild('gridContainer',{static:false}) gridContainer: DxDataGridComponent;

  @Output() clickedRow=new EventEmitter<any>() ;
  // #region "test data"
  gridHeight=250;
  searchtxt;
  dxColumns;
  filterRow;
  selectedItemKeys;
  fixtexts = {
    fix: "سنجاق", leftPosition: 'چپ', rightPosition: 'راست', unfix: 'بدون سنجاق'
  };
  dropDownOptions = { width: 500 };
  editorOptions = { itemTemplate: "statusTemplate" };



  // #endregion "test data"

  constructor(public dxService: DxService) {
    // this.dataSource = dxService.getCustomers();
console.log('dxOptions',this.dxOptions)

  }

  ngOnInit() {
    console.log('gridContainer', this.gridContainer)
    console.log('dataGrid', this.dataGrid)
    console.log('dxOptions',this.dxOptions)

    // console.log('oninit', this.dxOptions);

    if (this.dxOptions) {
      console.log('oninit', this.dxOptions.filterRow);


      this.dataGrid.filterRow=this.dxOptions.filterRow;
      this.dxColumns = this.dxOptions.Columns;
    }
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    // console.log(changes);
    this.dxColumns = this.dxOptions.Columns;

    if (changes['dataSource'].currentValue) {
      // console.log(changes['dataSource'].currentValue);
    if( this.dataGrid){
      this.dataGrid.dataSourceChange = changes['dataSource'].currentValue;
    }

    }

  }
  rowClick(row){
console.log('row clicked',row);
this.clickedRow.emit(row)

  }
  onFilterRowChange(event){
    console.log(event);

  }
  selectStatus() {
    if (this.searchtxt == "All") {
      this.dataGrid.instance.clearFilter();
      console.log(this.dataGrid.columns)
    } else {
      this.dataGrid.instance.filter(["Task_Status", "=", this.searchtxt]);
    }
  }


  getDispalyValue(rowData) {
    console.log('rowData', rowData);

    return 'fdgdfg';
  }
  logEvent(event) {
    console.log(event);

  }
  selectionChanged(event) {
    console.log(event);
    this.selectedItemKeys = event.selectedRowKeys;
  }
  //برای دیلیت کردن گروهی ایتم های سلکت شده
  deleteRecords() {
    // یک دکمه در ویو گذاشته شود و در کلیک ان این تابع صدا زده شود
    // this.selectedItemKeys.forEach((key) => {
    //     this.dataSource.remove(key);
    // });
    // this.dataGrid.instance.refresh();
  }





  public getTestData() {



  }

}

