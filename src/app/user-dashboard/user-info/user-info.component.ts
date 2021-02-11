import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog/';
import { DialogProfileComponent } from '../dialog-profile/dialog-profile.component';
import { PersonModel } from './person-model';
import { UserDetailsService } from './service/user-details.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  isLoading:boolean
  personModel:PersonModel;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

   constructor( public dialog: MatDialog, private userDetails:UserDetailsService) {}

  // openDialog(){
  //   this.dialog.open(DialogProfileComponent);
  // }

  ngOnInit(): void {
    this.isLoading=true;
    this.userDetails.getUserDetails().subscribe(data=>{
      this.personModel=data;
      this.isLoading=false
    })
  }

  

}
