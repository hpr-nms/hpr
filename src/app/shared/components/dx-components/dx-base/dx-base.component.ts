import { Component, OnInit, ViewChild, Input, OnChanges, EventEmitter, Output, OnDestroy } from "@angular/core";
import { DxTemplateDirective, DxDataGridComponent } from "devextreme-angular";

import { DxiDataGridColumn } from 'devextreme-angular/ui/nested/base/data-grid-column-dxi';
import { IdxOptions } from './IdxOptions';
import { Subscription } from 'rxjs';
import { DxDefault, IfilterRow } from './dx-defaults';
// import * as AspNetData from "devextreme-aspnet-data-nojquery";

@Component({
  selector: "app-dx-base",
  templateUrl: "./dx-base.component.html",
  styleUrls: ["./dx-base.component.css"],
  providers: [DxTemplateDirective]
})
export class DxBaseComponent implements OnInit, OnChanges, OnDestroy {


  @Input('dataSource') dataSource;  // دریافت دیتا سورس
  @Input('dxOptions') dxOptions: IdxOptions;  // دریافت تمامی تنظیمات گرید از کامپوننت پدر
  @Input('dxOptions') dxDefault: DxDefault;  // دریافت تمامی تنظیمات گرید از کامپوننت پدر
  @Input('gridName') gridName; // نام برای ذخیره تنظیمات گرید در اینده
  @Input('deselectGrid') deselectGrid; // نام برای ذخیره تنظیمات گرید در اینده
  @Input() public classOffset = ''; //'col-md-1';
  @Input() public dxClass = 'col-md-12';
  @Input() public disableSelectRow = false;
  @Output() onRowClick = new EventEmitter<any>();
  @ViewChild(DxDataGridComponent,{static:false}) dataGrid: DxDataGridComponent;

  operationDescriptions = new DxDefault().filterRow.operationDescriptions;

  // #region "test data"
  gridHeight: string | number = "60vh";
  // searchtxt;
  dxColumns;
  filterRow;
  selectedItemKeys;
  fixtexts = {
    fix: "سنجاق", leftPosition: 'چپ', rightPosition: 'راست', unfix: 'بدون سنجاق'
  };
  dropDownOptions = { width: 500 };
  editorOptions = { itemTemplate: "statusTemplate" };

  // #endregion "test data"
  subscription: Subscription[] = [];

  wordWrapEnabled=false;
  remoteOperations=true;
  cellHintEnabled=true;


  constructor() {

  }

  ngOnInit() {
    this.filterRow=new IfilterRow();
    // this.dataGrid.filterBuilder.filterOperationDescriptions=this.operationDescriptions;
    if (this.dxOptions) {
      // this.dataGrid.filterRow = this.dxOptions.filterRow;
      // this.dataGrid.filterRow.operationDescriptions = this.operationDescriptions;
      this.dxColumns = this.dxOptions.Columns;
      if (this.dxOptions.height) {
        this.gridHeight = this.dxOptions.height;
      }
    }
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (this.dataGrid) {
      this.dxColumns = this.dxOptions.Columns;

      if (changes['deselectGrid']) {
        if (this.dataGrid.instance) { this.dataGrid.instance.deselectAll(); }
      }
      if (changes['dataSource']) {
        if (changes['dataSource'].currentValue) {
          this.dataGrid.dataSourceChange = changes['dataSource'].currentValue;
        }
      }
      if (changes['disableSelectRow']) {
        this.disableSelectRow = this.disableSelectRow;
      }

    }
  }

  ngOnDestroy(): void {
    if (this.subscription.length > 0) {
      this.subscription.forEach(el => {
        el.unsubscribe();
      });
    }
  }
  onFilterValueChange(event){console.log('onFilterValueChange',event);
  }
  onHeaderFilrerChng(event) {
    console.log("onHeaderFilrerChng", event);

  }

  rowClick(row) {
    this.onRowClick.emit(row.key);
  }
  onFilterRowChange(event) {
    console.log(event);

  }
  // selectStatus() {
  //   if (this.searchtxt == "All") {
  //     this.dataGrid.instance.clearFilter();
  //   } else {
  //     this.dataGrid.instance.filter(["Task_Status", "=", this.searchtxt]);
  //   }
  // }


  getDispalyValue(rowData) {
    console.log('rowData', rowData);

    return 'fdgdfg';
  }
  logEvent(event) {
    console.log(event);

  }
  selectionChanged(event) {
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

  columnsChange(event) {
    // console.log('columnsChange',event);

  }

  public getTestData() {
  }

}
