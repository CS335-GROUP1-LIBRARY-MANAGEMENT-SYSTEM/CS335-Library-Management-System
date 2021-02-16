import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import { User } from './user.model'
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = "https://online-library-booking.herokuapp.com/api"

  constructor(private http : HttpClient) { }


  /** POST: add a new hero to the database */
createUser(user: User): Observable<any> {
  return this.http.post(this.url+"/auth/signup", user,{responseType:'text'});
  }
}

