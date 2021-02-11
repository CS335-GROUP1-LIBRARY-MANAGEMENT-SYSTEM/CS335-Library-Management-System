import { Component, OnInit } from '@angular/core';
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
  // personModel:PersonModel;

   constructor( public dialog: MatDialog) {}

  openDialog(){
    this.dialog.open(DialogProfileComponent);
  }

  // ngOnInit(): void {
  //   this.userDetails.getUserDetails().subscribe(data=>{
  //     this.personModel=data;
  //   })
  // }

  ngOnInit(){
    
  }

}
