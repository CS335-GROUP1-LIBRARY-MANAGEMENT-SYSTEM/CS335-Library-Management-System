import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';
import { UserInfoComponent } from './user-dashboard/user-info/user-info.component';
import { UserBooksComponent } from './user-dashboard/user-books/user-books.component';
import { UserPaymentsComponent } from './user-dashboard/user-payments/user-payments.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./user-dashboard/user.module').then(mod => mod.UserModule)}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
