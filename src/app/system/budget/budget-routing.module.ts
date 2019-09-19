



import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteGuard } from 'app/shared/oidc/route.guard';
import { BudgetComponent } from './budget.component';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetComponent,
    canActivate: [RouteGuard],

    children: [
      {
        path: 'temp',
        component: TempComponent,
        data: {
          breadcrumb: 'تست'
        },
        canActivate: [RouteGuard]
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
