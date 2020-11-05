import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { BuyerCreateModule } from '../../../models/buyer/buyer-create.module';
import { BuyerService } from '../../../services/buyers.service';

@Component({
  selector: 'app-create-buyer',
  templateUrl: './create-buyer.component.html',
  styleUrls: ['./create-buyer.component.css']
})
export class CreateBuyerComponent implements OnInit {

  createB: BuyerCreateModule;
  loadingSpiner = false;

  constructor( private buyer: BuyerService,
               private router: Router ) { }

  ngOnInit(): void {
    this.createB = new BuyerCreateModule();
  }

  onSubmit( form: NgForm ): any {
    this.loadingSpiner = true;

    if( form.invalid){
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

    this.buyer.create( this.createB )
    .subscribe(
      (resp): any => {
        Swal.close();
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: `${resp.buyer}${ resp.message }`,
        });
      },
      (err): any => {
        console.log(err);
        this.loadingSpiner = false;
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: err.message,
        });
      });
  }
}
