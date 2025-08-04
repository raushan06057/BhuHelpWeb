import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'any',
})
export class PersistanceService {
  private accessToken = new BehaviorSubject<string>('');
  currentToken$ = this.accessToken.asObservable();

  updateToken(newToken: any) {
    this.accessToken.next(newToken);
  }

  clearToken() {
    this.accessToken.next('');
  }

  getToken(): any {
    return this.accessToken.getValue();
  }
}
