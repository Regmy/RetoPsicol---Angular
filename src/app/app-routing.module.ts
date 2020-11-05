import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { MAINHOME_ROUTES } from './components/home/home.routes';


export const MAIN_ROUTES: Routes = [
  { path: 'home',
    component: HomeComponent,
    children: MAINHOME_ROUTES,
  },
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
