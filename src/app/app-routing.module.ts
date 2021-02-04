import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { AuthModule } from './auth/auth.module';
const routes: Routes = [
  {path:'testing',component:TestingComponent},
  {path:'auth',loadChildren:'./auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
