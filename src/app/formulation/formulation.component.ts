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
    esfRight: [0, Validators.required],
    esfLeft: [0, Validators.required],
    cylRight: [0, Validators.required],
    cylLeft: [0, Validators.required],
    axisRight: [0, Validators.required],
    axisLeft: [0, Validators.required],
    dnpRight: [0, Validators.required],
    dnpLeft: [0, Validators.required],
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
  filterLentes: any

  ngOnInit(): void {

  }
  onSubmit(): void {
    let estado = ''
    const data: any = this.form.value
    if (this.form.valid) {
      console.log(this.form.value)
      if (data.esfRight < -2 || data.esfRight > 2 || data.cylRight < -2 || data.esfLeft < -2 || data.esfLeft > 2 || data.cylLeft < -2) {
        estado = 'tallado'
      }
      else if (data.esfRight > -2 || data.esfRight < 2 || data.cylRight > -2 || data.esfLeft > -2 || data.esfLeft < 2 || data.cylLeft > -2) {
        estado = 'terminado'
      }
      console.log(estado)
    }

    this.filterLentes = this.lentes.filter(data => {
      return data.tipo == estado
    })

  }

}


