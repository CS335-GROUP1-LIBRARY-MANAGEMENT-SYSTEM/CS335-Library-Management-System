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
import {MatDialogModule} from '@angular/material/dialog';
import { DialogProfileComponent } from './dialog-profile/dialog-profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { WelcomeNoteComponent } from '../welcome-note/welcome-note.component';
import {ToastrModule} from 'ngx-toastr';
import { PaymentsComponent } from './user-payments/payments/payments.component';



const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  {path: 'user', component: UserDashboardComponent,
    children: [
      {path: '', component: WelcomeNoteComponent},
      {path: 'welcome', component: WelcomeNoteComponent},
      {path: 'profile', component: UserInfoComponent},
      {path: 'books', component: UserBooksComponent},
      {path: 'book-status', component: PaymentsComponent},
      {path: 'fine', component: UserPaymentsComponent}
    ]}
];

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserInfoComponent,
    UserBooksComponent,
    UserPaymentsComponent,
    DialogProfileComponent,
    EditProfileFormComponent,

  ],

  entryComponents: [DialogProfileComponent],
  imports: [
    ToastrModule.forRoot(),
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTreeModule,
    MatDialogModule,
    MatFormFieldModule,
    NgbModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ]
})
export class UserModule { }
