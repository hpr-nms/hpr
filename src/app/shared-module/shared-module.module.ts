import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DxModuleModule } from '../shared/components/dx-module/dx-module.module';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [

  ],
  exports: [
    DxModuleModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]


})
export class SharedModuleModule { }
