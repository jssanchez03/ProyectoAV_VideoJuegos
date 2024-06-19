import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  username: string = 'admin';
  password: string = 'admin';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.username && this.password) {
      console.log(`Usuario: ${this.username}, Contraseña: ${this.password}`);
      this.router.navigate(['/', 'tabla1']);
    } else {
      console.error('Formulario no válido');
    }
  }
}
