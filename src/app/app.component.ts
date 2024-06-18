import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tabla1Component } from './views/tabla1/tabla1.component';
import { VoucherComponent } from './components/voucher/voucher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Tabla1Component, VoucherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoAV_VideoJuegos';
}
