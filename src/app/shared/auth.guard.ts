import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,
    private router:Router,
    private localStorageService:LocalStorageService) {
}

canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  let url:string=state.url;
  const  isAuthenticated:boolean=this.authService.isLoggedIn();

  if(isAuthenticated){
    return true;
  }else {
    this.localStorageService.store('returnUrl',url);
    this.router.navigate(["/login"]);
    return false;
  }
}

}
