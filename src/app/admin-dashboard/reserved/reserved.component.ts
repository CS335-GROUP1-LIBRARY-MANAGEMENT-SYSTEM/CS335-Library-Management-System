import { Component, OnInit } from '@angular/core';
import {BookService} from '../../book/book.service';
import {BookStatusModel} from '../../book/book.status.model';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit {

  reservedBooks:Array<BookStatusModel>
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  isLoading:boolean;

  constructor(private bookService:BookService,private  toastr:ToastrService) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.bookService.getAllReservedBook().subscribe((data)=>{
      this.isLoading=false;
      this.reservedBooks=data;
    },()=>{
      this.isLoading=false;
      this.toastr.error("error while loading content")
    })
  }

  assign(book: BookStatusModel) {
    this.isLoading=true;
    this.bookService.assignBookToTaken(book.bookingId).subscribe(()=>{
      this.isLoading=false;
      this.toastr.success("success assign book to "+book.username);
      this.reservedBooks.filter(r=>r.bookingId!==book.bookingId)
    },()=>{
      this.isLoading=false;
      this.toastr.error("error while loading content")
    })
  }
}
