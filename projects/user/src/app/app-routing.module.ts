import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', 
  loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
  },
  {
    path:'auth', 
  loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes ,  { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
