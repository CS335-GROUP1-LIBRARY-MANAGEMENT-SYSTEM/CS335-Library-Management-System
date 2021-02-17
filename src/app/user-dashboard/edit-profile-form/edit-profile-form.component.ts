import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { PersonModel } from '../user-info/person-model';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent implements OnInit {

  @Input() form: FormGroup;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data:PersonModel) { }

  ngOnInit(): void {
    console.log(this.data.district);
  }

}
