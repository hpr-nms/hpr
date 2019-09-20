import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { DxDataGridModule } from "devextreme-angular";
import { DxBaseComponent } from "../dx-components/dx-base/dx-base.component";
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DxDataGridModule
  ],
  declarations: [DxBaseComponent],
  exports: [DxBaseComponent],
  schemas: [],
  providers: []
})
export class DxModuleModule { }
