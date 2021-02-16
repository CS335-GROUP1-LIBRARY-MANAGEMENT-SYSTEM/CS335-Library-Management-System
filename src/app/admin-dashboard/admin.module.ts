import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminDashboardComponent} from './admin-dashboard.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {AdminBooksComponent} from './admin-books/admin-books.component';
import {AdminPaymentsComponent} from './admin-payments/admin-payments.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {RouterModule, Routes} from '@angular/router';
import {UserInfoComponent} from '../user-dashboard/user-info/user-info.component';
import {UserBooksComponent} from '../user-dashboard/user-books/user-books.component';
import {UserPaymentsComponent} from '../user-dashboard/user-payments/user-payments.component';
import { SearchInputComponent } from './search-input/search-input.component';

const routes: Routes = [
  {path: '', redirectTo: 'librarian', pathMatch: 'full'},
  {path: 'librarian', component: AdminDashboardComponent,
    children: [
      {path: '', component: SearchInputComponent},
      {path: 'profile', component: UserInfoComponent},
      {path: 'books', component: UserBooksComponent},
      {path: 'payments', component: UserPaymentsComponent},
      {path: '**', component: SearchInputComponent}
    ]}
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminBooksComponent,
    AdminPaymentsComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTreeModule,
    MatDialogModule,
    MatFormFieldModule,
    NgbModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class AdminModule { }
