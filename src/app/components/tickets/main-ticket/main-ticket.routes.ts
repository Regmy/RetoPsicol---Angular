import { Routes } from '@angular/router';
import { AssignamentTicketComponent } from '../assignament-ticket/assignament-ticket.component';
import { CheckTicketComponent } from '../check-ticket/check-ticket.component';

export const MAINTICKET_ROUTES: Routes = [
  { path: 'asignar', component: AssignamentTicketComponent },
  { path: 'consultar', component: CheckTicketComponent },
  { path: '', pathMatch: 'full', redirectTo: 'asignar'},
  { path: '**', pathMatch: 'full', redirectTo: 'asignar'},
];
