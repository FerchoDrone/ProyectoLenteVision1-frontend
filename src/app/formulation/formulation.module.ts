import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulationComponent } from './formulation.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    FormulationComponent
  ],
  imports: [
    CommonModule,
    MatInputModule
  ]
})
export class FormulationModule { }
