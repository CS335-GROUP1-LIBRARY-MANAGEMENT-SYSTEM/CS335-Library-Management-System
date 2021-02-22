import { Component, OnInit } from '@angular/core';
import { ViewMembersService } from '../shared/view-members.service';
import { ViewMembersModel } from './view-members-model';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {ToastrService} from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog/';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.css']
})
export class ViewMembersComponent implements OnInit {

  members: Array<ViewMembersModel> = [];
  isLoading: boolean;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  term;
  SearchInputForm = new FormGroup({
    searchInput: new FormControl('')
  });
  constructor(private viewMember: ViewMembersService
              ,private authService:AuthService,
              private toastr:ToastrService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.viewMember.getMembers().subscribe(member => {
      this.isLoading = false;
      this.members = member;
    });

  }
  onSubmit(): void {
    console.log(this.SearchInputForm.value);
    this.SearchInputForm.reset();
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialogComponent);
  }
}
@Component({
  selector: 'app-dialog-elements-example-dialog',
  templateUrl: 'dialog-element.html',
})
export class DialogElementsExampleDialogComponent implements OnInit{
  members: Array<ViewMembersModel> = [];
  isLoading: boolean;
  constructor(private authService: AuthService, private viewMember: ViewMembersService,
              private toastr: ToastrService, ) {
  }
  ngOnInit() {
    this.viewMember.getMembers().subscribe(member => {
      this.isLoading = false;
      this.members = member;
      console.log(member);
    });
  }
  deleteUser(id:number) {
    this.isLoading=true;
    this.authService.deleteUser(id).subscribe(() => {
      this.isLoading=false;
      this.ngOnInit();
    },()=>{
      this.isLoading=false;
      this.toastr.error("error deleting the user")
    });
  }
}
