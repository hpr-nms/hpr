import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxButtonModule, DxBulletModule, DxTemplateModule, DxDataGridModule } from 'devextreme-angular';
import { DxGridComponent } from './dx-grid/dx-grid.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DxGridComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
