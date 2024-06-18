import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeTab: string = '';

  constructor(private router: Router) {}

  goToTabla1() {
    this.router.navigate(['/tabla1']);
    this.activeTab = 'tabla1';
  }

  goToTablafinal() {
    this.router.navigate(['/tablafinal']);
    this.activeTab = 'tabla2';
  }
}
