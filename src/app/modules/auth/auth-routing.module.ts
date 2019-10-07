import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SginUpComponent } from './sgin-up/sgin-up.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'signUp/:userId', component: SginUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
