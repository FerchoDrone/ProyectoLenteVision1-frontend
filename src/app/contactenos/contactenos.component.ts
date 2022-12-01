import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.scss']
})
export class ContactenosComponent implements OnInit{
  
  constructor() { }

  form = this

  ngOnInit(): void {
  }



}


