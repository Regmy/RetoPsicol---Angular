import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CreateBuyerComponent } from './components/buyers/create-buyer/create-buyer.component';
import { MainBuyerComponent } from './components/buyers/main-buyer/main-buyer.component';
import { ListBuyerComponent } from './components/buyers/list-buyer/list-buyer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainBranchOfficeComponent } from './components/branchOffices/main-branch-office/main-branch-office.component';
import { ListBranchOfficeComponent } from './components/branchOffices/list-branch-office/list-branch-office.component';
import { CreateBranchOfficeComponent } from './components/branchOffices/create-branch-office/create-branch-office.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    FooterComponent,
    CreateBuyerComponent,
    MainBuyerComponent,
    ListBuyerComponent,
    WelcomeComponent,
    CreateBranchOfficeComponent,
    MainBranchOfficeComponent,
    ListBranchOfficeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
