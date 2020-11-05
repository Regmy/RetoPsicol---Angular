import { Routes } from '@angular/router';
import { CreateBranchOfficeComponent } from '../create-branch-office/create-branch-office.component';
import { ListBranchOfficeComponent } from '../list-branch-office/list-branch-office.component';

export const MAINBRANCHOFFICE_ROUTES: Routes = [
  { path: 'listas', component: ListBranchOfficeComponent },
  { path: 'crear', component: CreateBranchOfficeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'listas'},
  { path: '**', pathMatch: 'full', redirectTo: 'listas'},
];
