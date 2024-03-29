﻿import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { DxDataGridModule, DxTreeListModule } from "devextreme-angular";
import { DxBaseComponent } from "../dx-components/dx-base/dx-base.component";
import { CommonModule } from '@angular/common';
import { FormComponentComponent } from '../form-component/form-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DxDataGridModule,
    DxTreeListModule
  ],
  exports: [
    DxBaseComponent,FormComponentComponent

  ],
  declarations: [
    DxBaseComponent,FormComponentComponent
  ],
  schemas: [],
  providers: []
})
export class DxModuleModule { }
