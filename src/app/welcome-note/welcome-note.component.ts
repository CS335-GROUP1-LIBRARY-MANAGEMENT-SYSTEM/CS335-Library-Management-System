import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-welcome-note',
  templateUrl: './welcome-note.component.html',
  styleUrls: ['./welcome-note.component.css']
})
export class WelcomeNoteComponent implements OnInit {
  name: string;


  constructor(private localStorage: LocalStorageService) {
    this.name = this.localStorage.retrieve('username');
  }

  ngOnInit(): void {
  }

}
