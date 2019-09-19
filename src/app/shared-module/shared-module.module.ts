import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownGridComponent } from '../elements/dropdown-grid';
import { DropdownUserComponent } from '../elements/dropdown-user';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../elements/breadcrumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';
import { HeadersComponent } from '../elements/headers/headers.component';
import { NgbModule, NgbCalendar, NgbCalendarPersian, NgbDatepickerI18n, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { CustomValidatorsModule } from 'app/shared/custom-validators/custom-validators.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule, PopoverModule, ProgressbarModule } from 'ngx-bootstrap';
import { SelectGridComponent } from 'app/shared/select-grid/select-grid.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBoxComponent } from 'app/shared/form-box/form-box.component';
import { InputComponent } from 'app/shared/input/input.component';
import { SelectComponent } from 'app/shared/select/select.component';
import { SelectTemplateMultiComponent } from 'app/shared/select-template-multi/select-template-multi.component';
import { NgbDatepickerI18nPersian } from 'app/shared/NgbDatepickerI18nPersian';
import { NgbDateCustomParserFormatter } from 'app/shared/DateCustomParserFormatter';
import { TooltipDirective } from 'app/shared/tooltip.directive';
import { PasswordService } from 'app/services/password.service';
import { DxModuleModule } from 'app/shared/components/dx-module/dx-module.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    TreeModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpModule,
    CustomValidatorsModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    NgSelectModule,
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    DxModuleModule
  ],
  declarations: [
    DropdownGridComponent,
    DropdownUserComponent,
    BreadcrumbComponent,
    HeadersComponent,
    SelectGridComponent,
    TooltipDirective,
    FormBoxComponent,
    InputComponent,
    SelectComponent,
    SelectTemplateMultiComponent,
  ],
  exports: [
    DropdownGridComponent,
    DropdownUserComponent,
    BreadcrumbComponent,
    HeadersComponent,
    SelectGridComponent,
    TooltipDirective,
    FormBoxComponent,
    InputComponent,
    SelectComponent,
    SelectTemplateMultiComponent,
    DxModuleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarPersian },
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian },
    { provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter },
    PasswordService
  ]
})
export class SharedModuleModule {}
