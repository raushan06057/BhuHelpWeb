import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class PersistanceService {
  private accessToken = new BehaviorSubject<string>('N/A');
  currentToken$ = this.accessToken.asObservable();
  updateToken(newToken: any) {
    this.accessToken.next(newToken);
  }
}
