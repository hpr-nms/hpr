import { DashboardComponent } from './dashboard.component';
import {
  NgModule,
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { AppRoutingModule } from './app-routing.module';

import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DxModuleModule } from './shared/components/dx-module/dx-module.module';
import { DxService } from './shared/components/dx-components/dx.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    SharedModuleModule,
    HttpClientModule,
    FormsModule,
    DxModuleModule,
    MatInputModule,
    MatButtonModule,MatDatepickerModule,
    AppRoutingModule,MatNativeDateModule,MatCheckboxModule,
    ReactiveFormsModule,
    // MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    DxService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() { }
}
