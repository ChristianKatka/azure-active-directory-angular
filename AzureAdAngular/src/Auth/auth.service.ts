import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { StateService } from 'src/Store/state.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private msalService: MsalService,
    private state: StateService,
    private router: Router
  ) {}

  login() {
    this.msalService.loginPopup().subscribe({
      next: (result) => {
        console.log('loginPopup result');
        console.log(result);

        this.state.isLoggedIn$.next(true);
        this.router.navigate(['/home']);
      },
      error: (error) => console.log(error),
    });
  }

  logout() {
    this.msalService.logoutPopup().subscribe({
      next: (result) => {
        console.log('logoutPopup result');
        console.log(result);

        this.state.isLoggedIn$.next(false);
        this.router.navigate(['/login']);
      },
      error: (error) => console.log(error),
    });
  }
}
