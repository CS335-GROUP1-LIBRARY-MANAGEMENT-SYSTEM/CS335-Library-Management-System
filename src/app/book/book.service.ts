import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from './book';
import { BookingModel } from './booking.model';
import {LocalStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl = 'https://online-library-booking.herokuapp.com/api';
  username: String

  constructor(private http:HttpClient,private localStorageService:LocalStorageService) { }

  getAllBooks():Observable<Array<BookModel>>{
    return this.http.get<Array<BookModel>>(this.apiUrl + '/booking/getAllBooks');
  }

  editBookStatus(id:number):Observable<any>{
    return this.http.post(this.apiUrl+"/booking/editBook/"+id,null)
  }

  getBookingStatus(): Observable<boolean>{
    this.username=this.localStorageService.retrieve("username");
    return this.http.get<boolean>(this.apiUrl+"/booking/user/isBorrow/" + this.username);
  }

  setBooking(bookingModel:BookingModel): Observable<any>{
    return this.http.post(this.apiUrl+'/booking/booking', bookingModel)
  }

  getUserBookStatusDetails():Observable<BookingModel>{
    this.username=this.localStorageService.retrieve("username");
    return this.http.get<BookingModel>(this.apiUrl+"/booking/user/bookStatus/"+this.username);
  }
}
