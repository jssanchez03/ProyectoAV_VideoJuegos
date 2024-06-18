import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideojuegoFormComponent } from './Componentes/videojuego-form/videojuego-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideojuegoFormComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoAV_VideoJuegos';
  
}
