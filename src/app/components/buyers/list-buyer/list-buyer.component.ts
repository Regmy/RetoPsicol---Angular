import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { NgForm, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

import { BuyerService } from '../../../services/buyers.service';
import { BranchOfficeService } from '../../../services/branchOffice.service';

export interface Buyer{
  id: number;
  name: string;
  document: string;
  email: string;
  branch_office_id: string;
  branch_office_name: string;
  ticket_buyed: string;
}


@Component({
  selector: 'app-list-buyer',
  styleUrls: ['./list-buyer.component.css'],
  templateUrl: './list-buyer.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListBuyerComponent implements OnInit {
  buyers: Buyer [];
  message: string[];
  branchOfficesSelects: any[];
  disableSelect = new FormControl(false);
  columnsToDisplay = ['id', 'name', 'document', 'email', 'branch_office_name', 'ticket_buyed'];
  expandedElement: Buyer | null;

  constructor(private buyer: BuyerService,
              private branchOffice: BranchOfficeService) {
              }

  ngOnInit(): void {

   this.buyer.index()
   .subscribe(
     (resp): any =>  {
       this.message = resp[0];
       this.buyers = resp[1];
     },
     (err): any => {
      Swal.fire({
        icon: 'error',
        title: 'Error al listar los compradores',
        text: err.message,
     });
    });

   this.branchOffice.index()
    .subscribe(
      (resp): any => {
        this.branchOfficesSelects = resp[1];
      }
    );
  }

onSubmit( form: NgForm , id: any ): void{
  this.buyer.assignament( form.value.branch_office_id,
    form.value.quantity_tickets, id  )
    .subscribe(
      (resp): any => {
        this.message = resp[0];
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: `${resp.buyer}${ resp.message }`,
        });
        this.ngOnInit();
      });
}

onSubmitDelete( id: any): void{
  this.buyer.delete( id)
  .subscribe(
    (resp): any => {
      this.message = resp[0];
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Comprador Eliminado',
      });
      this.ngOnInit();
    });
  }
}
