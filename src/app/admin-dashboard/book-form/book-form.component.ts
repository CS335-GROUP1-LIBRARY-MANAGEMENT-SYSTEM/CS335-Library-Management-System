import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddBookService } from 'src/app/add-book.service';
import {SaveBookModel} from '../../book/save.book.model';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm:FormGroup | any;
  submitted = true;
  book:SaveBookModel;
  isLoading:boolean;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;


  constructor(private formBuilder:FormBuilder, private addBook:AddBookService,
    private route:Router,private toastr:ToastrService) {
    this.book={
      description:"",
      bookTitle:"",
      author:""
    }
  }

  ngOnInit(){
    this.bookForm = this.formBuilder.group({
      bookTitle:['', Validators.required],
      bookAuthor:['',Validators.required],
      bookDescription:['',Validators.required]

    })
  }
  onSubmit() {
    this.isLoading=true;
    this.book.author=this.bookForm.get("bookAuthor").value
    this.book.description=this.bookForm.get("bookDescription").value
    this.book.bookTitle=this.bookForm.get("bookTitle").value

    this.addBook.createBook(this.book).subscribe(()=>{
      this.isLoading=false;
      this.route.navigateByUrl("/admin")
    },(err)=>{
      this.isLoading=false;
      this.toastr.error("fail to assign new book !!! try again")
      console.log(err)
    })
  }

}
