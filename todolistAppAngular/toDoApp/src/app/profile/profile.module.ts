import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileUpdateComponent } from './user-profile/user-profile-update/user-profile-update.component';
import { UserProfileViewComponent } from './user-profile/user-profile-view/user-profile-view.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileUpdateComponent,
    UserProfileViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports:[    
    UserProfileComponent,
    UserProfileUpdateComponent,
    UserProfileViewComponent,]
})
export class ProfileModule { }
