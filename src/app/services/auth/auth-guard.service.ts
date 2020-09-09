import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( private authService: AuthService, private router: Router) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      const isAuthenticated = await this.authService.getCurrentUser();
      if (isAuthenticated) {
        return true;
      } else {
          this.router.navigate(['/login']);
          return false;
      }
    }
}
