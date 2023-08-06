import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateService {
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
}
