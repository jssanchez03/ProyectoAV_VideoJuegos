import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tabla1Component } from './views/tabla1/tabla1.component';
import { FinalDatatableComponent } from './views/final-datatable/final-datatable.component';
import { LoginComponent } from './components/login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    LoginComponent,
    Tabla1Component,
    FinalDatatableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ProyectoAV_VideoJuegos';
}
