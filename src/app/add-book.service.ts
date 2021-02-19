import { Injectable } from '@angular/core';
import { Book } from './book.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {
  url = 'https://online-library-booking.herokuapp.com/api/booking/save';

  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book, {
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
