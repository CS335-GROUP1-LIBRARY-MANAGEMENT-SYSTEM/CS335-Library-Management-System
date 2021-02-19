import { Component, OnInit } from '@angular/core';
import {BookModel} from '../../book/book';
import {BookService} from '../../book/book.service';
import {LocalStorageService} from 'ngx-webstorage';
import {ToastrService} from 'ngx-toastr';
import {BookingModel} from '../../book/booking.model';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

  books:Array<BookModel>=[];
  isLoading:boolean;
  isBook:boolean;
  bookingModel:BookingModel
  username:string

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(private bookService:BookService,
              private localStorage:LocalStorageService,
              private toastr:ToastrService) {

  }

  ngOnInit(): void {
    this.isLoading=true;
    this.bookService.getAllBooks().subscribe((data)=>{
      this.books=data;
      console.log(this.books);
      this.isLoading=false
    })
  }

  booking(book: BookModel) {
    this.isLoading=true;
    this.bookService.getBookingStatus().subscribe((data)=>{
      this.isBook=data
      if(this.isBook){
        this.isLoading=false
        this.toastr.error("kindly your not allowed");
        console.log("please return the book to get another one")
      }else {
        this.username=this.localStorage.retrieve("username");
        // @ts-ignore
        this.bookingModel={
          bookId:book.id,
          username:this.username
        }
        this.bookService.setBooking(this.bookingModel).subscribe(()=>{
          this.isLoading=false
          book.available=false;
        })
      }
    })

  }

  viewBookDetails(id: number) {
    this.isLoading=true;
    this.bookService.getBookDetails(id).subscribe((data)=>{
      this.isLoading=false;
      this.toastr.success("success to view user details")
    },()=>{
      this.toastr.error("fail to retrieve book details")
    })
  }
}
