import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface FoodNode {
  _route?: string;
  icon?: string;
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    icon: 'account_circle',
    name: 'Profile',
  _route: '/user/profile'
  },
  {
    icon: 'menu_book',
    name: 'My Books',
    children: [
      {name: 'Rented',
      _route: '/user/books'},
      {name: 'Booked'}
    ]
  },
  {
    icon: 'payment',
    name: 'Payments',
    _route: '/user/payments',
    children: [
      {name: 'Membership',
      },
      {name: 'Fine'}
    ]
  }
];
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  opened: boolean;
  constructor() {
    this.dataSource.data = TREE_DATA;
  }
hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  ngOnInit(): void {
  }

}
