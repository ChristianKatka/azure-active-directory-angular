import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StateService } from 'src/Store/state.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthenticatedGuard implements CanActivate {
  constructor(private router: Router, private state: StateService) {}

  canActivate(): Observable<boolean> {
    return this.state.isLoggedIn$.pipe(
      map((isLoggedIn) => this.checkIfUserIsUnauthenticated(isLoggedIn)),
      tap((isUnAuthenticated) => {
        console.log('isUnauthenticatedGuard isUnAuthenticated');
        console.log(isUnAuthenticated);

        const userIsLoggedInSoRedirectToHome = !isUnAuthenticated;

        if (userIsLoggedInSoRedirectToHome) {
          this.router.navigate(['/home']);
        }
      })
    );
  }

  checkIfUserIsUnauthenticated(isLoggedIn: boolean): boolean {
    // if user is logged in we dont want him to acces login page
    if (isLoggedIn) {
      return false;
    } else {
      return true;
    }
  }
}
