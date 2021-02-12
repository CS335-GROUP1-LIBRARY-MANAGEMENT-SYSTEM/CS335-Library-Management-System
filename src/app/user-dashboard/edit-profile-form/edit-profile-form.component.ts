import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit {

  @Input() form: FormGroup;
  

  constructor() { }

  ngOnInit(): void {
  }

}
