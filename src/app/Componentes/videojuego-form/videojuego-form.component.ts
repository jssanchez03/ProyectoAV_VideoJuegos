import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaComponent, RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-videojuego-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RecaptchaModule, RecaptchaFormsModule],
  providers: [FormBuilder],
  templateUrl: './videojuego-form.component.html',
  styleUrl: './videojuego-form.component.css'
})
export class VideojuegoFormComponent implements OnInit{


  form: FormGroup;
  precios: { [key: string]: number } = {
    'Resident Evil 4': 50,
    'The Last of Us': 60,
    'Minecraft': 70,
    'Soulmask': 80,
    'Mario Kart 8 ': 90,
    'Resident Evil 2': 50,
    'The Last of Us 1': 60,
    'Minecraft t': 70,
    'Soulmask 4': 80,
    'Mario Kart 8 2 ': 90
  };
  captchaValid: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(50)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      videojuego: ['', Validators.required],
      precio: [{ value: '', disabled: true }, Validators.required],
      codigo: [''],
      subtotal: [{ value: '', disabled: true }, Validators.required],
      total: [{ value: '', disabled: true }, Validators.required],
      captcha: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.form.get('videojuego')?.valueChanges.subscribe(value => {
      if (value) {
        const precio = this.precios[value];
        this.form.get('precio')?.setValue(precio);
        this.actualizarTotal();
      }
    });

    this.form.get('codigo')?.valueChanges.subscribe(value => {
      this.actualizarTotal();
    });
  }

  resolved(captchaResponse: string | null) {
    this.captchaValid = captchaResponse !== null && captchaResponse.length > 0;
    if (this.captchaValid) {
      this.form.get('captcha')?.setValue(captchaResponse);
    } else {
      this.form.get('captcha')?.setValue(null);
    }
  }

  actualizarTotal(): void {
    const precio = this.form.get('precio')?.value;
    let subtotal = precio;
    if (this.form.get('codigo')?.value === 'Avanzada') {
      subtotal *= 0.9; // 10% de descuento
    }
    this.form.get('subtotal')?.setValue(subtotal);
    this.form.get('total')?.setValue(subtotal);
  }

  onSubmit(): void {
    if (this.form.valid && this.captchaValid) {
      alert('Formulario enviado con éxito');
      this.form.reset();
      // Mantener los campos deshabilitados después del reset
      this.form.get('precio')?.disable();
      this.form.get('subtotal')?.disable();
      this.form.get('total')?.disable();

  

    } else {
      this.form.markAllAsTouched();
    }
}
}