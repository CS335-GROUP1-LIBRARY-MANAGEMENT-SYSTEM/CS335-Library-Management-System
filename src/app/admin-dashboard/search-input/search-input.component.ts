import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'KOG9Y9200F',
  '3b4958db142233481bb7426509531d09'
);

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  config = {
    indexName: 'dev_cs335',
    searchClient,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
