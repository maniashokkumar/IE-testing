import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckpnrComponent } from './checkpnr/checkpnr.component';

import { DetailsformComponent } from './detailsform/detailsform.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SelectSeatComponent } from './select-seat/select-seat.component';

const routes: Routes = [
  {
    path:"",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"selectseat",
    component:SelectSeatComponent
  },
  {
    path:"passengerdetails",
    component:DetailsformComponent
  },
  {
    path:"checkpnr",
    component:CheckpnrComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
