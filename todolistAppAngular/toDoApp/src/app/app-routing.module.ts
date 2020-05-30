import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
//import { RegistrationComponent } from './user-registration/registration/registration.component';

import { AuthGuardGuard, AuthGuardGuardForLoggedInUser } from './auth-guard/auth-guard.guard';

import { ResolverGuardService } from './Services/resolver-guard.service';

import { ResolverGuardToDoListFieldCheckService } from './Services/resolver-gaurd-todolist-field-check.service';
import { AccessDeniedComponent } from './shared-module/access-denied/access-denied.component';
import { PageNotFoundComponentComponent } from './shared-module/page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './user-registration/login/login.component';
import { LogoutComponent } from './user-registration/logout/logout.component';
import { TodolistComponent } from './todoapp-module/todolist/todolist.component';
import { TodolistViewComponent } from './todoapp-module/todolist/todolist-view/todolist-view.component';
import { TodolistCreateComponent } from './todoapp-module/todolist/todolist-create/todolist-create.component';
import { TodolistUpdateComponent } from './todoapp-module/todolist/todolist-update/todolist-update.component';
import { TolistUpdateSelectItemComponent } from './todoapp-module/todolist/todolist-update/tolist-update-select-item/tolist-update-select-item.component';
import { TodolistDeleteComponent } from './todoapp-module/todolist/todolist-delete/todolist-delete.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { UserProfileViewComponent } from './profile/user-profile/user-profile-view/user-profile-view.component';
import { UserProfileUpdateComponent } from './profile/user-profile/user-profile-update/user-profile-update.component';
import { RegistrationComponent } from './user-registration/registration/registration.component';


export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};

const routes: Routes = [
  {
    path:'',
    redirectTo:'/register-user',
    pathMatch:'full',
    canActivate:[AuthGuardGuardForLoggedInUser]
  },
  {
    path:'register-user',
    component:RegistrationComponent,
    canActivate:[AuthGuardGuardForLoggedInUser]
  },
  {
    path:'login-user',
    component:LoginComponent,
    canActivate:[AuthGuardGuardForLoggedInUser]
  },
  {
    path:'logout-user',
    component:LogoutComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path:'user-profile',
    component:UserProfileComponent,
    canActivate: [AuthGuardGuard],
    children:[
      {
        path:'',
        component:UserProfileViewComponent,
        pathMatch:'full'
      },
      {
        path:'user-profile-update/:field',
        component:UserProfileUpdateComponent,
      }
    ]
  },
  {
    path:'todolist',
    component:TodolistComponent,
    canActivate: [AuthGuardGuard],
    children:[
      {
        path:'',
        component:TodolistViewComponent,
        pathMatch:'full'
      },
      {
        path:'create-todolist',
        component:TodolistCreateComponent,
      },
      {
        path:'update-todolist/:name',
        component:TodolistUpdateComponent,
        resolve: { name: ResolverGuardService },
        children:[
          {
            path:"update-item/:field",
            component:TolistUpdateSelectItemComponent,
            resolve:{ field: ResolverGuardToDoListFieldCheckService}
          }
        ]
      },
      {
        path:'delete-todolist/:name',
        component:TodolistDeleteComponent,
        resolve: { name: ResolverGuardService }
      }
    ]
  },
  {
    path:'no-access',
    component:AccessDeniedComponent
  },
  {
    path:'**',
    component:PageNotFoundComponentComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,routingConfiguration)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
