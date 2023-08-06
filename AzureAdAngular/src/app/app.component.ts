import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { StateService } from 'src/Store/state.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private msalService: MsalService, public state: StateService) {}

  ngOnInit(): void {
    this.checkAuthenticationStatus();
  }

  checkAuthenticationStatus() {
    const isUserLoggedIn =
      this.msalService.instance.getAllAccounts().length > 0;

    if (isUserLoggedIn) {
      this.state.isLoggedIn$.next(true);
    } else {
      this.state.isLoggedIn$.next(false);
    }
  }
}
