import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {SearchService} from './search.service';
import {BookModel} from '../../book/book';
import {BookService} from '../../book/book.service';



@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
Books: BookModel[] = [];
isLoading: boolean;
term;
SearchInputForm = new FormGroup({
  searchInput: new FormControl('')
});
  constructor(public Ss: SearchService,private bookService:BookService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.Ss.getBooks().subscribe((response) => {
  this.Books = response;
  this.isLoading = false;
});
  }
onSubmit(): void {
    console.log(this.SearchInputForm.value);
    this.SearchInputForm.reset();
}
}
