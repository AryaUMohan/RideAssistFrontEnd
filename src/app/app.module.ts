import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component'
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { WorkCreateComponent } from './work-create/work-create.component';
import { WorkListComponent } from './work-list/work-list.component';
import { WorkSummaryComponent } from './work-summary/work-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    CustomerCreateComponent,
    CustomerDetailComponent,
    LoginComponent,
    NavComponent,
    WorkCreateComponent,
    WorkListComponent,
    WorkSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }