import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverGuardToDoListFieldCheckService implements Resolve<any> {
  constructor(private UserService:UserServiceService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.UserService.toDoListFieldParamResolver(route.params.field);
  }
}