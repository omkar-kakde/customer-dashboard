import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './shared/component/login-form/login-form.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { CustomerViewComponent } from './shared/component/customer-view/customer-view.component';
import { CustomerUpdateComponent } from './shared/component/customer-update/customer-update.component';
import { CustomerAddComponent } from './shared/component/customer-add/customer-add.component';
const routes: Routes = [

  {path:'', component:LoginFormComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'create', component:CustomerAddComponent},
  {path:'login', component:LoginFormComponent},
  {path:'id', component:CustomerAddComponent},
  {path:'view/:id', component:CustomerViewComponent},
  {path:':id', component:CustomerUpdateComponent},
  {path:'update/:id', component:CustomerUpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
