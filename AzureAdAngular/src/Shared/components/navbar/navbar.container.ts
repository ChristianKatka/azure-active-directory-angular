import { Component } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import { StateService } from 'src/Store/state.service';

@Component({
  selector: 'app-navbar-bar',
  templateUrl: 'navbar.container.html',
  styleUrls: ['navbar.container.scss'],
})
export class NavbarContainerComponent {
  constructor(public state: StateService, private authService: AuthService) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
