import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public userEmail: string;
  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.getUserSession();
  }

  logout() {
   this.authService.logout();
   this.router.navigate(['/login']);
  }

 async getUserSession(){
    const user = await this.authService.getCurrentUser();
    this.userEmail = user.email;
  }

}
