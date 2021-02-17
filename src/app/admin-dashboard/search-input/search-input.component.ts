import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {SearchService} from './search.service';
import {BookModel} from '../../book/book';



@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
Books: BookModel[] = [];
term;
SearchInputForm = new FormGroup({
  searchInput: new FormControl('')
});
  constructor(public Ss: SearchService) { }

  ngOnInit(): void {
this.Ss.getBooks().subscribe((response) => {
  this.Books = response;
});
  }
onSubmit(): void {
    console.log(this.SearchInputForm.value);
    this.SearchInputForm.reset();
}
}
