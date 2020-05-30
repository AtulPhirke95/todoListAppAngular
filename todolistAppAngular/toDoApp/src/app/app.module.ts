import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { SharedModuleModule } from './shared-module/shared-module.module';
import { UserRegistrationModule } from './user-registration/user-registration.module';
import { TodoappModuleModule } from './todoapp-module/todoapp-module.module';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    UserRegistrationModule,
    TodoappModuleModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
