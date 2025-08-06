import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PermissionInterface } from '../types/permission.interface';

@Injectable({ providedIn: 'any' })
export class AuthService {
  private permissions: PermissionInterface[] = [];
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private userRolesSubject = new BehaviorSubject<string[]>([]);

  // Observables
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  userRoles$ = this.userRolesSubject.asObservable();

  setPermissions(permissions: PermissionInterface[]): void {
    this.permissions = permissions;
  }

  setUserRoles(roles: string[]): void {
    this.userRolesSubject.next(roles);
  }

  login(userRoles: string[], permissions: PermissionInterface[]): void {
    this.setUserRoles(userRoles);
    this.setPermissions(permissions);
    this.isLoggedInSubject.next(true);
  }

  logout(): void {
    this.setUserRoles([]);
    this.setPermissions([]);
    this.isLoggedInSubject.next(false);
  }

  getUserRolesForPath(path: string): string[] {
    const match = this.permissions.find((p) => path.startsWith(p.path));
    return match ? match.roles : [];
  }

  hasAccess(path: string, userRoles: string[]): boolean {
    const allowedRoles = this.getUserRolesForPath(path);
    return userRoles.some((role) => allowedRoles.includes(role));
  }
}
