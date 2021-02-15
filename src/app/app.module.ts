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
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './auth/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxWebstorageModule } from 'ngx-webstorage'; 
import  {MatDialogModule} from '@angular/material/dialog';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-dashboard/admin-users/admin-users.component';
import { AdminBooksComponent } from './admin-dashboard/admin-books/admin-books.component';
import { AdminPaymentsComponent } from './admin-dashboard/admin-payments/admin-payments.component';

const routes: Routes = [
 {path: '', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
    {path: '', component: LandingPageComponent},
  {path: 'user', loadChildren: () => import('./user-dashboard/user.module').then(mod => mod.UserModule)},
  {path: '**', component: LandingPageComponent},
 
];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LandingPageComponent,
    AdminDashboardComponent,
    AdminUsersComponent,
    AdminBooksComponent,
    AdminPaymentsComponent,
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
    MatDividerModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    MatDialogModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
