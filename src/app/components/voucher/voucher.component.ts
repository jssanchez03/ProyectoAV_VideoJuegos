import { Component } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css'],
})
export class VoucherComponent {
  open = false;
  file: File | null = null;

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onButtonClick() {
    console.log(this.file);
    this.open = false;
  }
}
