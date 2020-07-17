import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"update",
    component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
