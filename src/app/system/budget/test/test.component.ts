import { Component, OnInit, ChangeDetectionStrategy, } from '@angular/core';

import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: []
})
export class TestComponent implements OnInit {

  emp = 'سلام گروه پنل';
  applingFilter = 'auto'; // auto, onClick
  applyFilterText = 'test text';
  dataSource: any;
  cityDataSource: any; // ICity[];
  url: string;
  oldEditData: any;

  // tslint:disable-next-line: new-parens
  newbankfortest: any =
    {
      id: 100,
      bankBranchId: 100,
      bankBranchName: 'branch test',
      accountNumber: '0000',
      accountName: 'account test',
      sarfaslHesabId: null,
      sarfaslHesabName: null,
      isMunicipality: true,
      priority: 100,
      cityId: 303,
      cityName: 'city test',
      nameForShow: null
    };

  customCityData = [{
    id: 1,
    name: 'City1'
  },
  {
    id: 2,
    name: 'City2'
  },
  {
    id: 3,
    name: 'City3'
  }];

  customid: number;

  _gridBoxValue: number = 2;
  _gridSelectedRowKeys: number[] = [2];

  constructor() {
  }

  ngOnInit() {
    // this.cityService.getAll().subscribe(
    //   data => {
    //     console.log('data City', data);
    //     console.log('dataSource City', this.cityDataSource);
    //     this.cityDataSource = data;
    //   },
    //   fail => {
    //     console.log('getAll Cities', fail);
    //   },
    //   () => {
    //     // alert(this.dataSource[0].bankBranchName);
    //   }
    // );

    // this.bankAccountService.getAll().subscribe(
    //   data => {
    //     console.log('data', data);
    //     console.log('dataSource', this.dataSource);
    //     this.dataSource = data;
    //     this.dataSource.push(this.newbankfortest);
    //   },
    //   fail => {
    //     console.log('getAll Banks', fail);
    //   },
    //   () => {
    //     // alert(this.dataSource[0].bankBranchName);
    //   }
    // );

    // this.gridCRUDMethod();
  }

  summerizeCountText(data) {
    return 'تعداد : ' + data.value;
  }

  ontest() {
  }

  // gridCRUDMethod() {
  //   this.dataSource = new DataSource({
  //     key: 'id',
  //     requireTotalCount: false,
  //     load: (loadOptions) => {
  //       loadOptions.requireTotalCount = false;

  //       return this.bankAccountService.getAllPromise()
  //         .then(res => {
  //           return {
  //             data: res
  //           };
  //         })
  //         .catch(reason => {
  //           console.log(reason);
  //           alert(reason.message);
  //         });
  //     },
  //     remove: (key: number) => {
  //       return this.bankAccountService.delete(key).toPromise()
  //         .then(res => {
  //           alert('Delete Success');
  //           return {
  //             data: res
  //           };
  //         })
  //         .catch(reason => {
  //           console.log(reason);
  //           alert(reason.message);
  //         });
  //     },
  //     insert: (values) => {
  //       const xxx = this.customid;
  //       return this.bankAccountService.insert(values).toPromise()
  //         .then(res => {
  //           alert('Insert Success');
  //           return {
  //             data: res
  //           };
  //         })
  //         .catch(reason => {
  //           console.log(reason);
  //           alert(reason.message);
  //         });
  //     },
  //     update: (key: number, values: IBankAccount) => {
  //       return this.bankAccountService.update(this.oldEditData).toPromise()
  //         .then(res => {
  //           alert('Update Success');
  //           return {
  //             data: res,
  //           };
  //         })
  //         .catch(reason => {
  //           console.log(reason);
  //           alert(reason.message);
  //         });
  //     },
  //   });
  // }

  rowUpdating(e) {
    this.oldEditData = null;

    const oldData = e.oldData ;
    const newData = e.newData;
    const listOfProp = Object.getOwnPropertyNames(newData);

    listOfProp.forEach(r => {
      oldData[r] = newData[r];
    });

    this.oldEditData = oldData;
  }

  getSelectedItemsKeys(items) {
    var result = [],
      that = this;

    items.forEach(function (item) {
      if (item.selected) {
        result.push(item.key);
      }
      if (item.items.length) {
        result = result.concat(that.getSelectedItemsKeys(item.items));
      }
    });
    return result;
  }

  get gridBoxValue(): number {
    return this._gridBoxValue;
  }

  set gridBoxValue(value: number) {
    this._gridSelectedRowKeys = value && [value] || [];
    this._gridBoxValue = value;
  }

  get gridSelectedRowKeys(): number[] {
    return this._gridSelectedRowKeys;
  }

  set gridSelectedRowKeys(value: number[]) {
    this._gridBoxValue = value.length && value[0] || null;
    this._gridSelectedRowKeys = value;
  }

  gridBox_displayExpr(item) {
    return item && item.name;
  }

}
