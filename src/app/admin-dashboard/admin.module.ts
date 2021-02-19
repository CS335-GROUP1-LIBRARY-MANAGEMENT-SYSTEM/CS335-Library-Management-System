import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookFormComponent} from './book-form/book-form.component';
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
import { WelcomeNoteComponent } from '../welcome-note/welcome-note.component';
import {RegistrationComponent} from '../registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {ViewMembersComponent} from '../view-members/view-members.component';
import { BorrowComponent } from '../borrow/borrow.component';
import {MatStepperModule} from '@angular/material/stepper'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReservedComponent } from './reserved/reserved.component';
import { TakenComponent } from './taken/taken.component';

const routes: Routes = [
  {path: '', redirectTo: 'librarian', pathMatch: 'full'},
  {path: 'librarian', component: AdminDashboardComponent,
    children: [
      {path: '', component: WelcomeNoteComponent},
      {path: 'welcome', component: WelcomeNoteComponent},
      {path: 'search', component: SearchInputComponent},
      {path: 'view', component: ViewMembersComponent},
      {path: 'profile', component: UserInfoComponent},
      {path: 'books', component: BookFormComponent},
      {path: 'payments', component: UserPaymentsComponent},
      // {path: '**', component: SearchInputComponent},
      {path: 'addMember', component: RegistrationComponent},
      {path:'taken', component: TakenComponent},
      {path:'reserved', component: ReservedComponent}

    ]}
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminBooksComponent,
    AdminPaymentsComponent,
    SearchInputComponent,
    BorrowComponent,
    ReservedComponent,
    TakenComponent
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
    MatStepperModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatDatepickerModule
  ]
})
export class AdminModule { }
