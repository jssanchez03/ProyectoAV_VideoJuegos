import { RouterModule, Routes } from '@angular/router';
import { Tabla1Component } from './tabla1/tabla1.component';
import { NgModule } from '@angular/core';
import { FinalDatatableComponent } from './final-datatable/final-datatable.component';
import { VoucherComponent } from './components/voucher/voucher.component';

export const routes: Routes = [
  {
    path: 'tabla1',
    component: Tabla1Component,
  },
  {
    path: 'final-datatable',
    component: FinalDatatableComponent,
  },
  {
    path: 'voucher',
    component: VoucherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
