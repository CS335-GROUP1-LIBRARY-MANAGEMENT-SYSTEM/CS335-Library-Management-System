import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewMembersModel } from '../view-members/view-members-model';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class ViewMembersService {
  role:String;
  constructor(private httpClient: HttpClient,private localStorage:LocalStorageService) { }

  getMembers(): Observable<Array<ViewMembersModel>>{
    this.role=this.localStorage.retrieve("role");
    return this.httpClient.get<Array<ViewMembersModel>>('https://online-library-booking.herokuapp.com/api/auth/getAllUsers/'+this.role)
  }
}
