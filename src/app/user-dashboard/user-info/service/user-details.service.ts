import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from '../person-model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }
  // getUserDetails():Observable<PersonModel>{
  //   return this.http.get<PersonModel>("https://online-library-booking.herokuapp.com/api/auth/user/details/robert");
  //}
}
