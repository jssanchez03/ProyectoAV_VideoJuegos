import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import Swal from 'sweetalert2';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-final-datatable',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent,
    TableModule,
    InputTextModule,
    DialogModule, // Asegúrate de agregar DialogModule aquí
    ButtonModule
  ],
  templateUrl: './final-datatable.component.html',
  styleUrl: './final-datatable.component.css'
})
export class FinalDatatableComponent {

  // Ingreso de datos de la tabla
  @Input() datos: any[] = [
    { Cliente: 'Juan Perez', correo: 'perez@gmail.com', videojuego: 'GTA V0', precio: 30, foto: '/comprobante.jpg', total: 30 },
    { Cliente: 'Ana Lopez', correo: 'analopez@gmail.com', videojuego: 'FIFA 21', precio: 50, foto: '/comprobante.jpg', total: 50 },
    { Cliente: 'Pedro Garcia', correo: 'pedrogarcia@gmail.com', videojuego: 'PES 21', precio: 40, foto: '/comprobante.jpg', total: 40 },
    { Cliente: 'Maria Martinez', correo: 'mariamartinez@gmail.com', videojuego: 'Call Of Duty', precio: 30, foto: '/comprobante.jpg', total: 30 },
    { Cliente: 'Juan Perez', correo: 'perez@gmail.com', videojuego: 'GTA V0', precio: 30, foto: '/comprobante.jpg', total: 30 },
    { Cliente: 'Ana Lopez', correo: 'analopez@gmail.com', videojuego: 'FIFA 21', precio: 50, foto: '/comprobante.jpg', total: 50 },
    { Cliente: 'Pedro Garcia', correo: 'pedrogarcia@gmail.com', videojuego: 'PES 21', precio: 40, foto: '/comprobante.jpg', total: 40 },
    { Cliente: 'Maria Martinez', correo: 'mariamartinez@gmail.com', videojuego: 'Call Of Duty', precio: 30, foto: '/comprobante.jpg', total: 30 },
    { Cliente: 'Juan Perez', correo: 'perez@gmail.com', videojuego: 'GTA V0', precio: 30, foto: '/comprobante.jpg', total: 30 },
    { Cliente: 'Ana Lopez', correo: 'analopez@gmail.com', videojuego: 'FIFA 21', precio: 50, foto: '/comprobante.jpg', total: 50 },
    { Cliente: 'Pedro Garcia', correo: 'pedrogarcia@gmail.com', videojuego: 'PES 21', precio: 40, foto: '/comprobante.jpg', total: 40 },
    { Cliente: 'Maria Martinez', correo: 'mariamartinez@gmail.com', videojuego: 'Call Of Duty', precio: 30, foto: '/comprobante.jpg', total: 30 }
  ];

  displayModal: boolean = false;
  selectedImage: string = '';

  showModal(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.displayModal = true;
  }

  calcularTotal(precio: number) {
    return precio - (precio * 0.10);
  }

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
