import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'th-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: string | undefined;
  password: string | undefined;

  loginService = inject(LoginService);
  router = inject(Router);

  async login(user: string | undefined, password: string | undefined) {
    if (!user || !password) return;
    this.loginService.login(user, password);
    localStorage.setItem('user', user);
    await this.router.navigate(['timesheet']);
  }
}
