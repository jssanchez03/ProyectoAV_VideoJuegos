import { RouterModule, Routes } from '@angular/router';
import { Tabla1Component } from './views/tabla1/tabla1.component';
import { NgModule } from '@angular/core';
import { FinalDatatableComponent } from './views/final-datatable/final-datatable.component';

export const routes: Routes = [
  {
    path: 'tabla1',
    component: Tabla1Component
  },
  {
    path: 'tabla-final',
    component: FinalDatatableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
