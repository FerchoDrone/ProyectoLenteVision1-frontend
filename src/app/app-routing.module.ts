import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LentesvisionLayoutComponent } from './layouts/lentesvision-layout/lentesvision-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

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
},{
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: '/pqrs',
      loadChildren: () =>
        import('./pqrs/pqrs.component').then((m) => m.PqrsComponent),
    },

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
