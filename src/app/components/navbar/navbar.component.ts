import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {
  }

  goToTabla1() {
    this.router.navigate(['/', 'tabla1']);
  }
  goToTablafinal() {
    this.router.navigate(['/', 'final-datatable']);
  }
}
