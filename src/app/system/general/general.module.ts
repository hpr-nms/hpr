import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';
import { GeneralRoutingModule } from './general-routing.module';
import { BankComponent } from './bank/bank.component';
import { TopNavComponent } from './element/top-nav/top-nav.component';
import { FormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';

@NgModule({
  declarations: [
    GeneralComponent,
    BankComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModuleModule,
    GeneralRoutingModule
  ]
})
export class GeneralModule { }
