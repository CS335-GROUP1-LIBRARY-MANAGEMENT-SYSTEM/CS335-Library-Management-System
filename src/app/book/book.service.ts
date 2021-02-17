import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from './book';
import { BookingModel } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl="https://online-library-booking.herokuapp.com/api";


  constructor(private http:HttpClient) { }

  getAllBooks():Observable<Array<BookModel>>{
    return this.http.get<Array<BookModel>>(this.apiUrl+"/booking/getAllBooks");
  }

  getBookingStatus(username: string): Observable<boolean>{
    return this.http.get<boolean>(this.apiUrl+"/booking/user/isBorrow/" + username);
  }

  setBooking(bookingModel:BookingModel): Observable<any>{
    return this.http.post(this.apiUrl+'/booking/booking', bookingModel)
  }
}
