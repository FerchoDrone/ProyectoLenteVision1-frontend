import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PqrsRoutingModule } from './pqrs-routing.module';
import { PqrsComponent } from './pqrs.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    PqrsComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    CommonModule,
    PqrsRoutingModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class PqrsModule { }
