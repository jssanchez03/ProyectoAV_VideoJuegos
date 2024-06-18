import { RouterModule, Routes } from '@angular/router';
import { Tabla1Component } from './views/tabla1/tabla1.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'tabla1',
    component: Tabla1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
