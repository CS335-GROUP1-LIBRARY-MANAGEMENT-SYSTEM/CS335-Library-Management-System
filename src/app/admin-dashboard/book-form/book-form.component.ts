import { Route } from '@angular/compiler/src/core';
import {Component, EventEmitter, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AddBookService } from 'src/app/add-book.service';
import {SaveBookModel} from '../../book/save.book.model';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ToastrService} from 'ngx-toastr';

import {FileValidator} from 'ngx-material-file-input';
import {FileUploader} from 'ng2-file-upload';
const URL = 'http://localhost:3000/books';
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

  readonly maxSize = 104857;
  file: File;
  fileSize: number;
  uploader: FileUploader;

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

    });
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
  public onFileSelected(event) {
    this.file = event.target.files[0];
    this.fileSize = this.file.size;
    console.log(this.file);
  }
  checkSizeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null =>
      control.value.size <= this.maxSize ? null : {overSize: control.value.size };
  }

}
