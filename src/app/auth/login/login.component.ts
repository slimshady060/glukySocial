import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ AuthService ]
})

export class LoginComponent implements OnInit {
  public authError = false;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try {
        const { email,  password} = this.loginForm.value;
        const user = await this.authService.login(email, password);
        if (user) {
          this.router.navigate(['/main']);
          this.authError = false;
        } else {
           this.authError = true;
        }
    } catch (error) {
        this.authError = true;
        console.log(error);
    }
  }

}
