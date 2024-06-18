import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor() {}

  onSubmit(): void {
    if (this.username && this.password) {
      console.log(`Usuario: ${this.username}, Contraseña: ${this.password}`);
    } else {
      console.error('Formulario no válido');
    }
  }
}
