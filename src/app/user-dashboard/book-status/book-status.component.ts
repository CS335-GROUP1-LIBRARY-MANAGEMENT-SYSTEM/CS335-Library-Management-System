import { Component, OnInit } from '@angular/core';
import {BookService} from '../../book/book.service';
import {BookingModel} from '../../book/booking.model';

@Component({
  selector: 'app-book-status',
  templateUrl: './book-status.component.html',
  styleUrls: ['./book-status.component.css']
})
export class BookStatusComponent implements OnInit {
  status:boolean;
  bookingDetails:BookingModel;
  dateTaken:Date;
  dateToReturn:Date;
  constructor(private bookService:BookService) { }

  ngOnInit(): void {

    this.bookService.getBookingStatus().subscribe((data)=>{
      this.status=data;
      if(this.status){
        this.bookService.getUserBookStatusDetails().subscribe((data)=>{
          this.bookingDetails={
            username:data.username,
            timeToReturn:data.timeToReturn,
            timeToTake:data.timeToTake,
            id:data.id,
            bookId:data.bookId
          }

          this.dateTaken=new Date(this.dateTaken)
        })
      }
    })
  }
}
