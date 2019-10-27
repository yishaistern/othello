import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickColorComponent } from './components/pick-color/pick-color.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pick-color',
    component: PickColorComponent
  },
  {
    path: 'pick-color',
    component: PickColorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
