import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {BookModel} from '../../book/book';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiUrl = 'https://online-library-booking.herokuapp.com/api/booking/getAllBooks';
  constructor(
    private http: HttpClient
  ) { }
getBooks() {
    return this.http.get<BookModel[]>(this.apiUrl);
}
}
