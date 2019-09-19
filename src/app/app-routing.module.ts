import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  //   { path: "", redirectTo: "/dashboard", pathMatch: "full",
  //   // canActivate: [RouteGuard]
  // },
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
    // canActivate: [RouteGuard]
  },
  {
    path: 'budget',
    loadChildren: 'app/system/budget/budget.module#BudgetModule',
    data: {
      breadcrumb: 'بودجه'
    }
  },
  // {
  //   path: "accounting",
  //   loadChildren: 'app/system/accounting/accounting.module#AccountingModule',
  // data: {
  //   breadcrumb: 'حسابداری'
  // },
  //   canActivate: [RouteGuard]
  // },
  // {
  //   path: "treasury",
  //   loadChildren: 'app/system/treasury/treasury.module#TreasuryModule',
  // data: {
  //   breadcrumb: 'خزانه'
  // },
  //   canActivate: [RouteGuard]
  // },
  // {
  //   path: "financial",
  //   loadChildren: 'app/system/Financial/Financial.module#FinancialModule',
  // data: {
  //   breadcrumb: 'مالی'
  // },
  //   canActivate: [RouteGuard]
  // },
  {
    path: 'general',
    loadChildren: 'app/system/general/general.module#GeneralModule',
    data: {
      breadcrumb: 'عمومی'
    }
  }

  // { path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
