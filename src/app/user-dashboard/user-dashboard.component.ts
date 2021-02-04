import { Component, OnInit } from '@angular/core';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';

interface FoodNode {
  icon?: string;
  url?: string;
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    icon: 'account_circle',
    name: 'Profile',
    url: '/user/profile'
  },
  {
    icon: 'menu_book',
    name: 'My Books',
    children: [
      {name: 'Rented', url: '/user/books'},
      {name: 'Booked', url: '/user/books'}
    ]
  },
  {
    icon: 'payment',
    name: 'Payments',
    children: [
      {name: 'Fine', url: '/user/payments'}
    ]
  }
];

interface CheckFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  opened: boolean;
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0, name: node.name,
      icon: node.icon, level, url: node.url
    };
  }
  // treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  treeControl = new FlatTreeControl<CheckFlatNode>(
    node => node.level, node => node.expandable
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level,
      node => node.expandable,
      node => node.children
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: CheckFlatNode) => node.expandable;
  ngOnInit(): void {
  }

}
