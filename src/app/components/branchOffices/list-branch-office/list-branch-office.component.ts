import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { BranchOfficeService } from '../../../services/branchOffice.service';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

export interface Buyer{
  id: number;
  name: string;
  tickets_quantity: string;
  tickets_sold: string;
}

@Component({
  selector: 'app-list-branch-office',
  templateUrl: './list-branch-office.component.html',
  styleUrls: ['./list-branch-office.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListBranchOfficeComponent implements OnInit {
  branchOffices: Buyer [];
  message: string[];
  branchOfficesSelects: any[];
  disableSelect = new FormControl(false);
  columnsToDisplay = ['id', 'name', 'tickets_quantity', 'tickets_sold'];
  expandedElement: Buyer | null;

  constructor(private branchOffice: BranchOfficeService) { }

  ngOnInit(): void {
   this.branchOffice.index()
    .subscribe(
      (resp): any => {
        this.branchOffices = resp[1];
      }
    );
  }

onSubmitDelete( id: any): void{
  this.branchOffice.delete( id )
  .subscribe(
    (resp): any => {
      this.message = resp[0];
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Sede Eliminada',
      });
      this.ngOnInit();
    });
  }
}
