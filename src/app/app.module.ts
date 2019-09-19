import { DashboardComponent } from './dashboard.component';
import {
  NgModule,
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { AppRoutingModule } from './app-routing.module';



import { DxModuleModule } from './shared/components/dx-module/dx-module.module';
import { DxService } from './shared/components/dx-components/dx.service';


@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    SharedModuleModule,
    FormsModule,
    DxModuleModule,

    AppRoutingModule
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
