import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import { User } from './user.model'
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url = "http://localhost:3000/register"

  constructor(private http : HttpClient) { }


  /** POST: add a new hero to the database */
createUser(user: User): Observable<User> {
  return this.http.post<User>(this.url, user, {
    headers:{
      'content-type': 'application/json'
    }
  });
}
}
