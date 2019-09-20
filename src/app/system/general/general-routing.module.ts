import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general.component';
import { BankComponent } from './bank/bank.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      {
        path: 'bank',
        component: BankComponent,
        data: {
          breadcrumb: 'بانک'
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes
    // , { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
