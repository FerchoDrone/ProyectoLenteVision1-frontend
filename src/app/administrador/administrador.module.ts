import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AdministradorComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class AdministradorModule { }
