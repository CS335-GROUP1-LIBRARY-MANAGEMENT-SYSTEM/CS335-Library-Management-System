import { Component, OnInit } from '@angular/core';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

interface FoodNode {
  icon?: string;
  url?: string;
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    icon: 'home',
    name: 'Welcome',
    url: '/admin/librarian/welcome'
  },
  {
    icon: 'account_circle',
    name: 'Profile',
    url: '/admin/librarian/profile'
  },
  {
    icon: 'menu_book',
    name: 'Books',
    children: [
      {name: 'View', url: '/admin/librarian/search'},
      {name: 'Add', url: '/admin/librarian/books'},
      {name:'reserved', url:'/admin/librarian/reserved'},
      {name:'taken', url:'/admin/librarian/taken'}

    ]
  },
  {
    icon: 'payment',
    name: 'Fine',
    url:'/admin/librarian/fines'
  },
  {
    icon: 'groups',
    name: 'Members',
    children: [
      {name: 'View', url: '/admin/librarian/view'},
      {name: 'Add', url: '/admin/librarian/addMember'},

    ]
  }
];

interface CheckFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  username:string;
  opened: boolean;
  role: string;
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
  constructor(private localStorage:LocalStorageService, private router:Router) {
    this.dataSource.data = TREE_DATA;
    this.username = this.localStorage.retrieve('username');
    this.role = this.localStorage.retrieve('role');
  }
  hasChild = (_: number, node: CheckFlatNode) => node.expandable;
  ngOnInit(): void {
  }

  onLogout(){
    this.localStorage.clear("authenticationtoken");
    this.localStorage.clear("expireat");
    this.localStorage.clear("role");
    this.localStorage.clear("username");

    this.router.navigateByUrl('/');
  }

}
