import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = { email: '', password: '' };

  signUpObject: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  constructor(private router: Router, private loginService: LoginService) {}

  signUpClick() {
    this.loginService.signUp(this.signUpObject).subscribe(
      (response) => {
        console.log('User created successfully', response);
      },
      (error) => {
        console.error('Error creating user', error);
      }
    );
  }
  loginClick() {
    debugger;
    this.loginService.login(this.loginObj).subscribe(
      (response) => {
        console.log('logged in successfully', response);
        this.router.navigate(['/products']);
      },
      (error) => {
        console.log('log in failed', error);
      }
    );
  }
}
