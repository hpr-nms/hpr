import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IdxOptions } from 'src/app/shared/components/dx-components/dx-base/IdxOptions';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styles: []
})
export class BankComponent implements OnInit, OnDestroy {

  bankModel = new AppBank();

  Options: IdxOptions;
  dataSource;
  subscription: Subscription[] = [];
  constructor(
  ) { }

  ngOnInit() {
    this.Options = new IdxOptions();
    this.getFormList();
  }
  private getFormList() {
    this.dataSource = [
      { id: 1, name: 'df' },
      { id: 2, name: 'dgbvf' },
      { id: 3, name: 'dncvnf' },
      { id: 4, name: 'dvcf' }
    ]
    this.Options.Columns = [
      { caption: 'ایدی', dataField: 'id', dataType: "string" },
      { caption: 'نام بانک', dataField: 'name', dataType: "string" }
    ];

  }

  ngOnDestroy(): void {
    if (this.subscription.length > 0) {
      this.subscription.forEach(el => {
        el.unsubscribe();
      });
    }
  }

  getserver() {
    this.getFormList();
  }

  submitForm(MapParvaneForm, $event) {

  }
  clearform(form) {

  }

}




export class AppBank {
  constructor(
    public id: number = 0,
    public name: string = null
  ) { }
}
