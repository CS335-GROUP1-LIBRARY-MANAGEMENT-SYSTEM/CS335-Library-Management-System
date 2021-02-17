import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog/';
import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';
import { PersonModel } from './person-model';
import { UserDetailsService } from './service/user-details.service';
import { EditProfileFormComponent } from '../edit-profile-form/edit-profile-form.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  isLoading: boolean;
  personModel: PersonModel;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

   constructor( public dialog: MatDialog, private userDetails: UserDetailsService) {}

  // tslint:disable-next-line:typedef
   openDialog(user:PersonModel) {
    const dialogRef = this.dialog.open(EditProfileFormComponent,{
       height: '500px',
       data:{
        userData:user
       },
       width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
    this.isLoading = true;
    this.userDetails.getUserDetails().subscribe(data => {
      this.personModel = data;
      this.isLoading = false;
    });
  }



}
