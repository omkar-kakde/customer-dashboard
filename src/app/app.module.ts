import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CustomerAddComponent } from './shared/component/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './shared/component/customer-update/customer-update.component';
import { CustomerViewComponent } from './shared/component/customer-view/customer-view.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { LoginFormComponent } from './shared/component/login-form/login-form.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';






@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    CustomerViewComponent,
    DashboardComponent,
    LoginFormComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
