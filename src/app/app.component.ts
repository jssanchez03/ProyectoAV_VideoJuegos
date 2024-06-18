import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Tabla1Component } from './tabla1/tabla1.component';
import { FinalDatatableComponent } from './final-datatable/final-datatable.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Tabla1Component, FinalDatatableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ProyectoAV_VideoJuegos';

  constructor(private router: Router) {
  }

  goToTabla1() {
    this.router.navigate(['/', 'Tabla1Component']);
  }
  goToTablafinal() {
    this.router.navigate(['/', 'FinalDatatableComponent']);
  }
}
