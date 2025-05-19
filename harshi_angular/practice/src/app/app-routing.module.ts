import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DatabindingComponent } from './databinding/databinding/databinding.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent},

  {path:'databinding',component:DatabindingComponent},

  {path:'data',loadChildren:()=>import('./databinding/databinding.module').then(a=>a.DatabindingModule)},

    {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
