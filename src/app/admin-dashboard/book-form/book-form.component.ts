import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddBookService } from 'src/app/add-book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  BookForm:FormGroup | any;
  submitted = true;

  constructor(private formBuilder:FormBuilder, private addBook:AddBookService,
    private route:Router) { }

  ngOnInit(){
    this.BookForm = this.formBuilder.group({
      booktitle:['', Validators.required],
      bookId:['',Validators.required],
      bookavailability:['',Validators.required],
      bookauthor:['',Validators.required],
      bookdescr:['',Validators.required]

    })
  }
  onSubmit(){
    console.log(this.BookForm.value)
    // this.addBook.createBook(this.BookForm.value).subscribe(
    //   data => console.log('success', data),
    //   error =>console.error('error', error)
    }

}
