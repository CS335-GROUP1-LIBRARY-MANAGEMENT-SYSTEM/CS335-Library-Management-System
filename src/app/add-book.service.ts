import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SaveBookModel} from './book/save.book.model';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {
  url="https://online-library-booking.herokuapp.com/api";

  constructor(private http:HttpClient) { }

  createBook(book: SaveBookModel): Observable<any> {
    return this.http.post(this.url+"/booking/save", book);
  }
}
