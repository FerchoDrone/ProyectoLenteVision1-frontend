import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulationComponent } from './formulation.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    FormulationComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,

  ]
})
export class FormulationModule { }
