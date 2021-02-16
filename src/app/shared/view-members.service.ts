import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewMembersModel } from '../view-members/view-members-model';

@Injectable({
  providedIn: 'root'
})
export class ViewMembersService {

  constructor(private httpClient: HttpClient) { }

  getMembers(): Observable<Array<ViewMembersModel>>{
    return this.httpClient.get<Array<ViewMembersModel>>('https://online-library-booking.herokuapp.com/api/auth/getAllUsers')
  }
}
