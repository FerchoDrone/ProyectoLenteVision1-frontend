import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulationComponent } from './formulation.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FormulationComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule

  ]
})
export class FormulationModule { }
