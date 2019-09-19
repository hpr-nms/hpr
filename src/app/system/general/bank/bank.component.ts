import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from 'app/services/server.service';
import { Subscription } from 'rxjs';
import { IdxOptions } from 'app/shared/components/dx-components/dx-base/IdxOptions';
import { AppPermissionConfigService } from 'app/services/app-permission-config.service';

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
    public serverServ: ServerService,
    public AppConfig:AppPermissionConfigService
  ) { }

  ngOnInit() {
    this.Options = new IdxOptions();
    this.getFormList();
  }
  private getFormList() {
    this.subscription.push(this.serverServ.getFormAuto('General/Bank/GetAll', false).subscribe(data => {
      this.Options.Columns = [
        { caption: 'ایدی', dataField: 'id', dataType: "string" },
        { caption: 'نام بانک', dataField: 'name', dataType: "string" }
      ];
      this.dataSource = data.data;
      console.log('received data', data);

    }));
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
