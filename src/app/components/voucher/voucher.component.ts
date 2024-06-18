import { Component } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css'],
})
export class VoucherComponent {
  file: File | null = null;

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onButtonClick() {
    // Aquí puedes procesar el archivo como desees.
    console.log(this.file);
  }
}
