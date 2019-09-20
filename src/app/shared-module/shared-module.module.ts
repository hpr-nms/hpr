import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DxModuleModule } from '../shared/components/dx-module/dx-module.module';
@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [

  ],
  exports: [
    DxModuleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]


})
export class SharedModuleModule { }
