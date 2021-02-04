import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { UregComponent } from './ureg/ureg.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [UregComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    UregComponent
  ]
})
export class AuthModule { }
