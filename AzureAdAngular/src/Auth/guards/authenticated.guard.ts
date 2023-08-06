import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { StateService } from 'src/Store/state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router, private state: StateService) {}

  canActivate(): Observable<boolean> {
    return this.state.isLoggedIn$.pipe(
      tap((loggedIn) => {
        console.log('AuthenticatedGuard is logged in');
        console.log(loggedIn);

        if (!loggedIn) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
