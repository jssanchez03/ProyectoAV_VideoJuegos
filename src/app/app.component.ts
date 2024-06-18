import { VoucherComponent } from './components/voucher/voucher.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tabla1Component } from './views/tabla1/tabla1.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Tabla1Component,

    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ProyectoAV_VideoJuegos';
}
