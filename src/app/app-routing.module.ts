import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LentesvisionLayoutComponent } from './layouts/lentesvision-layout/lentesvision-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FormulationComponent } from './formulation/formulation.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { AdministradorComponent } from './administrador/administrador.component';

const routes: Routes = [{
  path: '',
  component: LentesvisionLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () =>
        import('./home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'profile',
      loadChildren: () =>
        import('./profile/profile.module').then((m) => m.ProfileModule),
    },

  ]
},
{
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () =>
        import('./auth/auth.module').then((m) => m.AuthModule),
    },

  ]
},
{
  path: '',
  component: FormulationComponent,
  children: [
    {
      path: 'formulation',
      loadChildren: () =>
        import('./formulation/formulation.module').then((m) => m.FormulationModule),
    },

  ]
},

{
  path: '',
  component: ContactenosComponent,
  children: [
    {
      path: 'contactenos',
      loadChildren: () =>
        import('./contactenos/contactenos.module').then((m) => m.ContactenosModule),
    },

  ]
},

{
  path: '',
  component: AdministradorComponent,
  children: [
    {
      path: 'administrador',
      loadChildren: () =>
        import('./administrador/administrador.module').then((m) => m.AdministradorModule),
    },

  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
