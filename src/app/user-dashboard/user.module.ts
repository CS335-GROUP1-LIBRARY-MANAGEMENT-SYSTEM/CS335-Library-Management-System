import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserDashboardComponent} from './user-dashboard.component';
import {UserBooksComponent} from './user-books/user-books.component';
import {UserPaymentsComponent} from './user-payments/user-payments.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: UserDashboardComponent,
    children: [
      {path: 'profile', component: UserInfoComponent},
      {path: 'books', component: UserBooksComponent},
      {path: 'payments', component: UserPaymentsComponent}
    ]}
];

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserInfoComponent,
    UserBooksComponent,
    UserPaymentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatTreeModule,
  ]
})
export class UserModule { }
