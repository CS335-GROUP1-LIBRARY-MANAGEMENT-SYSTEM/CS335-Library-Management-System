import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl="https://online-library-booking.herokuapp.com/api";


  constructor(private http:HttpClient) { }

  getAllBooks():Observable<Array<BookModel>>{
    return this.http.get<Array<BookModel>>(this.apiUrl+"/booking/getAllBooks");
  }

}
