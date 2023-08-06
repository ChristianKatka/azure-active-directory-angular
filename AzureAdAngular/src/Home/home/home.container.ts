import { Component } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import { StateService } from 'src/Store/state.service';

@Component({
  selector: 'app-home-container',
  templateUrl: 'home.container.html',
  styleUrls: ['home.container.scss'],
})
export class HomeContainerComponent {
  constructor(private authService: AuthService, public state: StateService) {}

  logout() {
    this.authService.logout();
  }
}
