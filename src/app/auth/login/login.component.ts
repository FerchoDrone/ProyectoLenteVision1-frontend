import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private authService: AuthService) { }

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log("On Submit Works");
    if (this.form.valid){
      this.authService.login(this.form.value).subscribe({
        next: (data) => {
          console.log(data);
          //Redireccion a login Con Alerta
          //this.router.navigate(['../login'])
        },
        error: (err) => {
          console.log(err);
        },
      });
    }else{
      console.log("Formulario no valido")
    }
  }

}
