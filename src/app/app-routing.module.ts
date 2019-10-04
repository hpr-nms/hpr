import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //   { path: "", redirectTo: "/dashboard", pathMatch: "full",
  //   // canActivate: [RouteGuard]
  // },
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
    // canActivate: [RouteGuard]
  },


  // { path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
