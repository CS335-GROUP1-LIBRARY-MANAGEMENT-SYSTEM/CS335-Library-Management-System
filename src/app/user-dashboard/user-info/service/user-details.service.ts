import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { PersonModel } from '../person-model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  username:string;

  constructor(private http: HttpClient,private localStorage:LocalStorageService) { }
  getUserDetails(): Observable<PersonModel>{
    
    this.username=this.localStorage.retrieve("username");
    return this.http.get<PersonModel>('https://online-library-booking.herokuapp.com/api/auth/user/details/'+this.username);
  }

  
}
