import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports:[
    LoginComponent,
    LogoutComponent,
    RegistrationComponent
  ]
})
export class UserRegistrationModule { }
