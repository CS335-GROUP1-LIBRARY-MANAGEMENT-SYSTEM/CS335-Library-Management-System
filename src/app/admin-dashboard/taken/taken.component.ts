import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {BookService} from '../../book/book.service';
import {ToastrService} from 'ngx-toastr';
import {BookStatusModel} from '../../book/book.status.model';

@Component({
  selector: 'app-taken',
  templateUrl: './taken.component.html',
  styleUrls: ['./taken.component.css']
})
export class TakenComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  isLoading:boolean;
  takenBooks: Array<BookStatusModel>;

  constructor(private bookService:BookService,private  toastr:ToastrService) { }

  ngOnInit(): void {

    this.isLoading=true;
    this.bookService.getAllTakenBook().subscribe((data)=>{
      this.isLoading=false;
      this.takenBooks=data;
    },()=>{
      this.isLoading=false;
      this.toastr.error("error while loading content")
    })

  }

  editBook(book: BookStatusModel) {
    this.isLoading=true;
    this.bookService.editBookStatus(book.bookId).subscribe(()=>{
      this.isLoading=false;
      this.toastr.success("success assign book to "+book.username);
      this.ngOnInit();
    },()=>{
      this.isLoading=false;
      this.toastr.error("error while loading content")
    })
  }
}
