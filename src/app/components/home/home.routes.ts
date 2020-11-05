import { Routes } from '@angular/router';

import { WelcomeComponent } from '../welcome/welcome.component';
import { MAINBUYERS_ROUTES } from '../buyers/main-buyer/main-buyer.routes';
import { MainBuyerComponent } from '../buyers/main-buyer/main-buyer.component';
import { MainBranchOfficeComponent } from '../branchOffices/main-branch-office/main-branch-office.component';
import { MAINBRANCHOFFICE_ROUTES } from '../branchOffices/main-branch-office/main-branch-office.routes';

export const MAINHOME_ROUTES: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'compradores',
    component: MainBuyerComponent,
    children: MAINBUYERS_ROUTES,
  },
  { path: 'sedes',
    component: MainBranchOfficeComponent,
    children: MAINBRANCHOFFICE_ROUTES,
  },
  { path: '', pathMatch: 'full', redirectTo: 'welcome'},
  { path: '**', pathMatch: 'full', redirectTo: 'welcome'},
];

