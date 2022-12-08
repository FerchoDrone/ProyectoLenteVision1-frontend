import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactenosComponent } from './contactenos.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ContactenosComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactenosModule { }
