import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const currentPath = state.url;

    return this.authService.userRoles$.pipe(
      take(1),
      map(userRoles => {
        const allowed = this.authService.hasAccess(currentPath, userRoles);
        if (!allowed) {
          this.router.navigate(['/access-denied']);
        }
        return allowed;
      })
    );
  }
}
