import { Component, OnInit } from '@angular/core';
import { ViewMembersService } from '../shared/view-members.service';
import { ViewMembersModel } from './view-members-model';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.css']
})
export class ViewMembersComponent implements OnInit {

  members:Array<ViewMembersModel>=[];
  isLoading:boolean;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  constructor(private viewMember:ViewMembersService) { }

  ngOnInit(): void {
    this.isLoading=true
    this.viewMember.getMembers().subscribe(member=>{
      this.isLoading=false;
      this.members=member;
    })

  }

}
