import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';
import { BranchOfficeCreateModule } from 'src/app/models/BranchOffice/branchOffice-create.module';
import { BranchOfficeService } from 'src/app/services/branchOffice.service';

@Component({
  selector: 'app-create-branch-office',
  templateUrl: './create-branch-office.component.html',
  styleUrls: ['./create-branch-office.component.css']
})
export class CreateBranchOfficeComponent implements OnInit {

  createBranchOffice: BranchOfficeCreateModule;
  loadingSpiner = false;

  constructor( private branchOffice: BranchOfficeService) { }

  ngOnInit(): void {
    this.createBranchOffice = new BranchOfficeCreateModule();
  }

  onSubmit( form: NgForm ): any {
    this.loadingSpiner = true;

    if ( form.invalid){
      this.loadingSpiner = false;
      return;
    }

    // Waiting Alert.
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor..',
    });
    Swal.showLoading();

    this.branchOffice.create( this.createBranchOffice )
    .subscribe(
      (resp): any => {
        Swal.close();
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Sede Creada',
        });
      },
      (err): any => {
        console.log(err);
        this.loadingSpiner = false;
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar la sede',
          text: err.message,
        });
      });
  }
}
