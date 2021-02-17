import { Component, OnInit } from '@angular/core';
import {BookModel} from '../../book/book';
import {BookService} from '../../book/book.service';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

  books:Array<BookModel>=[];

  constructor(private bookService:BookService) { }

  ngOnInit(): void {

    this.bookService.getAllBooks().subscribe((data)=>{
      this.books=data;
    })
  }

}
