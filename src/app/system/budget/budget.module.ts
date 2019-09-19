import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetComponent } from './budget.component';
import { TopNavComponent } from './element/top-nav/top-nav.component';
import { TempComponent } from './temp/temp.component';
import { TestComponent } from './test/test.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    BudgetComponent,
    TopNavComponent,
    TempComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModuleModule,
    BudgetRoutingModule,
    DxDataGridModule
  ]
})
export class BudgetModule { }
