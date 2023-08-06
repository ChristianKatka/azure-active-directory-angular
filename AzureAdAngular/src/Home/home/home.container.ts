import { Component } from '@angular/core';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'app-home-container',
  templateUrl: 'home.container.html',
  styleUrls: ['home.container.scss'],
})
export class HomeContainerComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
