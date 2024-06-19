import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import Swal from 'sweetalert2';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tabla1',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TableModule, InputTextModule, ButtonModule],
  templateUrl: './tabla1.component.html',
  styleUrl: './tabla1.component.css'
})
export class Tabla1Component  {

  @Input() datos: any[] = [
    { Cliente: 'Juan Perez', correo: 'perez@gmail.com', videojuego: 'GTA V0', precio: 30, total: 30 },
    { Cliente: 'Ana Lopez', correo: 'analopez@gmail.com', videojuego: 'FIFA 21', precio: 50, total: 50 },
    { Cliente: 'Pedro Garcia', correo: 'pedrogarcia@gmail.com', videojuego: 'PES 21', precio: 40, total: 40 },
    { Cliente: 'Maria Martinez', correo: 'mariamartinez@gmail.com', videojuego: 'Call Of Duty', precio: 30, total: 30 },
  ];

  // Funcion para calcular el total con descuento del 10%
  calcularTotal(precio: number) {
    return precio - (precio * 0.10);
  }

  // Función para aceptar el registro
  aceptarRegistro() {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, aceptar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Registro aceptado",
          text: "El registro ha sido aceptado correctamente.",
          icon: "success"
        });
      }
    });
  }

  // Función para denegar el registro
  denegarRegistro() {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, denegar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Registro denegado",
          text: "El registro ha sido denegado correctamente.",
          icon: "error"
        });
      }
    });
  }

}
