import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulation',
  templateUrl: './formulation.component.html',
  styleUrls: ['./formulation.component.scss']
})
export class FormulationComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
  ) { }

  form = this.fb.group({
    esfRight: ['', Validators.required],
    esfLeft: ['', Validators.required],
    cylRight: ['', Validators.required],
    cylLeft: ['', Validators.required],
    axisRight: ['', Validators.required],
    axisLeft: ['', Validators.required],
    dnpRight: ['', Validators.required],
    dnpLeft: ['', Validators.required],
  });


  lentes = [
    {
      material: 'cr39', tipo: 'terminado'
    },
    {
      material: 'cr39 ar', tipo: 'terminado'
    },
    {
      material: 'cr39', tipo: 'tallado'
    },
    {
      material: 'poly', tipo: 'terminado'
    },
    {
      material: 'poly ar', tipo: 'terminado'
    },
    {
      material: 'poly', tipo: 'tallado'
    },
    {
      material: '1.56', tipo: 'terminado'
    },
    {
      material: '1.56 ar', tipo: 'terminado'
    },
    {
      material: '1.56', tipo: 'tallado'
    },
    {
      material: '1.60', tipo: 'terminado'
    },
    {
      material: '1.60 ar', tipo: 'terminado'
    },
    {
      material: '1.60', tipo: 'tallado'
    },
    {
      material: '1.67', tipo: 'terminado'
    },
    {
      material: '1.67 ar', tipo: 'terminado'
    },
    {
      material: '1.67', tipo: 'tallado'
    }
  ]


  ngOnInit(): void {

  }
  onSubmit(): void {
    console.log(this.form.value)
  }
}
