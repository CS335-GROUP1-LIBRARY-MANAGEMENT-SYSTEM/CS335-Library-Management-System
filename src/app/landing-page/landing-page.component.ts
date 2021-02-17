import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import { BookModel } from '../book/book';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers:[BookService]
})
export class LandingPageComponent implements OnInit {
    // BookModal: {""};

  constructor(private localStorage:LocalStorageService) { }

  ngOnInit(): void {
    this.localStorage.clear("returnUrl");
  }

}
