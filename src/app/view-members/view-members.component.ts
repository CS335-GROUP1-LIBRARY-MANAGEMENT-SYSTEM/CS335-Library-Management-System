import { Component, OnInit } from '@angular/core';
import { ViewMembersService } from '../shared/view-members.service';
import { ViewMembersModel } from './view-members-model';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {ToastrService} from 'ngx-toastr';

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
              private toastr:ToastrService) { }

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

  deleteUser(id:number) {
    this.isLoading=true;
    this.authService.deleteUser(id).subscribe(()=>{
      this.isLoading=false;
      this.ngOnInit();
    },()=>{
      this.isLoading=false;
      this.toastr.error("error deleting the user")
    })
  }
}
