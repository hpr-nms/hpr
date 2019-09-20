



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetComponent } from './budget.component';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetComponent,

    children: [
      {
        path: 'temp',
        component: TempComponent,
        data: {
          breadcrumb: 'تست'
        },
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
export class BudgetRoutingModule { }
