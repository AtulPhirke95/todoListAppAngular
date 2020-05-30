import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '../Services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private route:Router,private UserService:UserServiceService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.UserService.currentLoggedInUser() != null){
      return true;
    }else{
      this.route.navigate(['no-access'])

    }
  }

}

  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuardGuardForLoggedInUser implements CanActivate {
  
    constructor(private route:Router,private UserService:UserServiceService){}
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.UserService.currentLoggedInUser() == null){
        return true;
      }else{
        this.route.navigate(['/todolist'])
  
      }
    }
  
  }
