import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-videojuego-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './videojuego-form.component.html',
  styleUrl: './videojuego-form.component.css'
})
export class VideojuegoFormComponent {
  videojuegos = [
    { nombre: 'Mario Kart', precio: 50 },
    { nombre: 'The Legend of Zelda', precio: 60 },
    { nombre: 'Resident Evil 4', precio: 55 },
    { nombre: 'Pokemon Sword & Shield', precio: 65 },
    { nombre: 'Animal Crossing', precio: 45 }
  ];
  selectedVideojuego: string = ''; // Variable para almacenar el juego seleccionado
  precioSeleccionado: number = 0; // Variable para almacenar el precio del juego seleccionado
  codigoDescuento: string = ''; // Variable para almacenar el código de descuento
  subtotal: number = 0; // Variable para almacenar el subtotal calculado
  total: number = 0; // Variable para almacenar el total calculado

  // Función para manejar el cambio de juego seleccionado
  onChangeVideojuego() {
    // Buscar el precio del juego seleccionado
    const juego = this.videojuegos.find(juego => juego.nombre === this.selectedVideojuego);
    if (juego) {
      this.precioSeleccionado = juego.precio;
      this.calcularTotales();
    }
  }

  // Función para calcular subtotal y total con descuento
  calcularTotales() {
    // Validar si hay código de descuento
    let descuento = 0;
    if (this.codigoDescuento === '17062024') { // Ejemplo de código de descuento
      descuento = 0.15; // 15% de descuento
    }

    // Calcular subtotal y total
    this.subtotal = this.precioSeleccionado;
    this.total = this.subtotal - (this.subtotal * descuento);
  }

  onSubmit() {
    alert('Formulario enviado con éxito');
  }
}
