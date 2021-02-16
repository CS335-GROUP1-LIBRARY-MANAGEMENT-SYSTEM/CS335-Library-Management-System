import { Component, OnInit } from '@angular/core';
import { ViewMembersService } from '../shared/view-members.service';
import { ViewMembersModel } from './view-members-model';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.css']
})
export class ViewMembersComponent implements OnInit {

  members:Array<ViewMembersModel>=[];

  constructor(private viewMember:ViewMembersService) { }

  ngOnInit(): void {

    this.viewMember.getMembers().subscribe(member=>{
      this.members=member;
    })

  }

}
