import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-voucher',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css'],
})
export class VoucherComponent {
  imagenUrl = 'assets/logo.png';
  open = false;
  file: File | null = null;
  message: any;

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onButtonClick() {
    if (!this.file) {
      alert('Por favor, sube un archivo antes de enviar.');
      return;
    }

    console.log(this.file);
    this.open = false;
  }
}
