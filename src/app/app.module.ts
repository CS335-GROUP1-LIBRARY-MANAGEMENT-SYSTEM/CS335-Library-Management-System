import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './auth/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxWebstorageModule } from 'ngx-webstorage';
import {MatDialogModule} from '@angular/material/dialog';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  DialogElementsExampleDialogComponent,
  ViewMembersComponent
} from './view-members/view-members.component';
import {Auth2Guard} from './shared/auth2.guard';
import {AuthGuard} from './shared/auth.guard';
import { BookFormComponent } from './admin-dashboard/book-form/book-form.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {WelcomeNoteComponent} from './welcome-note/welcome-note.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MaterialFileInputModule} from 'ngx-material-file-input';
import {FileUploadModule} from 'ng2-file-upload';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';


import {PaymentsComponent} from './user-dashboard/user-payments/payments/payments.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [

  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', loadChildren: () => import('./user-dashboard/user.module').then(mod => mod.UserModule), canActivate: [AuthGuard]},
  {path: 'admin', loadChildren: () => import('./admin-dashboard/admin.module').then(mod => mod.AdminModule), canActivate:[Auth2Guard]},
  {path: '**', component: LandingPageComponent},

];


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LandingPageComponent,
    ViewMembersComponent,
    BookFormComponent,
    WelcomeNoteComponent,
    PaymentsComponent,
    DialogElementsExampleDialogComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDividerModule,
    MatStepperModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    MatDialogModule,
    NgbModule,
    MatProgressSpinnerModule,
    Ng2SearchPipeModule,
    MaterialFileInputModule,
    FileUploadModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatChipsModule,
    MatGridListModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
