import { Routes } from '@angular/router';
import { CreateBuyerComponent } from '../create-buyer/create-buyer.component';
import { ListBuyerComponent } from '../list-buyer/list-buyer.component';

export const MAINBUYERS_ROUTES: Routes = [
  { path: 'listas', component: ListBuyerComponent },
  { path: 'crear', component: CreateBuyerComponent },
  { path: '', pathMatch: 'full', redirectTo: 'listas'},
  { path: '**', pathMatch: 'full', redirectTo: 'listas'},
];
