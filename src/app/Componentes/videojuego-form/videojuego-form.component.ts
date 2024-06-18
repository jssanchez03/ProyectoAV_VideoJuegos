import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-videojuego-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  providers: [FormBuilder],
  templateUrl: './videojuego-form.component.html',
  styleUrl: './videojuego-form.component.css'
})
export class VideojuegoFormComponent implements OnInit{
  form: FormGroup;
  precios: { [key: string]: number } = {
    'Juego 1': 50,
    'Juego 2': 60,
    'Juego 3': 70,
    'Juego 4': 80,
    'Juego 5': 90
  };
  total: number = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      videojuego: ['', Validators.required],
      precio: [{ value: '', disabled: true }, Validators.required],
      codigo: [''],
      subtotal: [{ value: '', disabled: true }, Validators.required],
      total: [{ value: '', disabled: true }, Validators.required]
    });
  }

  ngOnInit() {
    this.form.get('videojuego')?.valueChanges.subscribe(value => {
      const precio = this.precios[value] || 0;
      this.form.get('precio')?.setValue(precio);
      this.calcularTotal();
    });

    this.form.get('codigo')?.valueChanges.subscribe(() => {
      this.calcularTotal();
    });
  }

  calcularTotal() {
    const precio = this.form.get('precio')?.value || 0;
    let subtotal = precio;
    const codigo = this.form.get('codigo')?.value;

    if (codigo === '17062024') {
      subtotal *= 0.9; // Descuento del 10%
    }

    this.total = subtotal;
    this.form.get('subtotal')?.setValue(subtotal);
    this.form.get('total')?.setValue(this.total);
  }

  onSubmit() {
    if (this.form.valid) {
      alert('Formulario enviado con éxito');
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}