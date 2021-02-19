import { Component, OnInit } from '@angular/core';
import {BookService} from '../../book/book.service';
import {BookStatusModel} from '../../book/book.status.model';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ToastrService} from 'ngx-toastr';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit {

  reservedBooks: Array<BookStatusModel>;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  isLoading: boolean;
  term: any;
  SearchInputForm = new FormGroup({
    searchInput: new FormControl('')
  });

  constructor(private bookService:BookService,private  toastr:ToastrService) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.bookService.getAllReservedBook().subscribe((data) => {
      this.isLoading=false;
      this.reservedBooks=data;
      console.log(this.reservedBooks);
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
      this.ngOnInit();
    },()=>{
      this.isLoading=false;
      this.toastr.error("error while loading content")
    })
  }
  onSubmit(): void {
    console.log(this.SearchInputForm.value);
    this.SearchInputForm.reset();
  }
}
