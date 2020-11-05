// Modulo Encargado de Importar y Exportar todos los modulos de la libreria de Material para Angular
// https://material.angular.io/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importaciones de Material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRippleModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [],
  imports:
  [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatRippleModule,
    MatAutocompleteModule,
  ],
  exports:
  [
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatRippleModule,
    MatAutocompleteModule,
  ]
})
export class MaterialModule {

  private constructor(){

  }

 }
