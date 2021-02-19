import {Injectable, Output,EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResponseModel} from '../auth/login/login-response-model';
import {LoginModel} from '../auth/login/login-model';
import {map} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() loggedIn:EventEmitter<boolean>=new EventEmitter();
  currentUrl:string;

  apiUrl="https://online-library-booking.herokuapp.com/api";

  constructor(private httpModule: HttpClient,private localStorageService:LocalStorageService) {
  }

  login(loginRequest:LoginModel): Observable<boolean>{
    return this.httpModule.post<LoginResponseModel>(this.apiUrl+"/auth/login",loginRequest)
      .pipe(map(data=>{
        this.localStorageService.store("authenticationToken",data.authenticationToken);
        this.localStorageService.store("username",data.username);
        this.localStorageService.store("role",data.role);
        this.localStorageService.store("expireAt",data.expireAt);

        this.loggedIn.emit(true);
        return true;
      }));
  }

  deleteUser(id:number):Observable<any>{
    return this.httpModule.delete(this.apiUrl+"/auth/delete/user/"+id)
  }

  getJwtToken() {
    return this.localStorageService.retrieve('authenticationToken');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken()!=null;
  }
}

