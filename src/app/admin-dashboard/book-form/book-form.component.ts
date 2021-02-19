import { Route } from '@angular/compiler/src/core';
import {Component, EventEmitter, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AddBookService } from 'src/app/add-book.service';
import {FileValidator} from 'ngx-material-file-input';
import {FileUploader} from 'ng2-file-upload';
const URL = 'http://localhost:3000/books';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  BookForm: FormGroup | any;
  submitted = true;
  readonly maxSize = 104857;
  file: File;
  fileSize: number;
  uploader: FileUploader;

  constructor(private formBuilder: FormBuilder, private addBook: AddBookService,
              private route: Router) {
  }

  ngOnInit(){
    this.BookForm = this.formBuilder.group({
      booktitle:['', Validators.required],
      bookauthor:['',Validators.required],
      bookdescr:['',Validators.required],
      coverImg: ['', Validators.required]

    });
  }
  onSubmit(){
    this.BookForm.get('coverImg').value = this.file;
    console.log(this.BookForm.get('coverImg').value);
    this.addBook.createBook(this.BookForm.value).subscribe(
      data => console.log('success', data),
      error => console.error('error', error));
    console.log('this is what was sent', this.BookForm);
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
