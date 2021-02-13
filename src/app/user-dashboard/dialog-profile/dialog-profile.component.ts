import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialog-profile.component.html',
  styleUrls: ['./dialog-profile.component.css']
})
export class DialogProfileComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
