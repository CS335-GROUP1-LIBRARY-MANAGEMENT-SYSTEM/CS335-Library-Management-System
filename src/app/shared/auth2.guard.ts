import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {


  constructor(private localStorage:LocalStorageService,private authService:AuthService,private  router:Router) {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const  isAuthenticated=this.authService.isLoggedIn();
    let url:string=state.url;
    const role=this.localStorage.retrieve("role");
    if(isAuthenticated&&(role==="ADMIN"||role==="LIBRARIAN")){
      return true;
    }
    else {
      this.localStorage.store('returnUrl',url);
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
