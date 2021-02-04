import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UregComponent } from './ureg/ureg.component';

const routes: Routes = [
{path:'auth/register',component: UregComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
