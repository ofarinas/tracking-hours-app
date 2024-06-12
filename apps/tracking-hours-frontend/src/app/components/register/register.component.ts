import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: string | undefined;
  password: string | undefined;

  constructor(public registerService: RegisterService, public router: Router) {
  }

  async register(user: string | undefined, password: string | undefined) {
    if (!user || !password) return;
    this.registerService.register(user, password);
    localStorage.setItem('user', user);
    await this.router.navigate(['timesheet']);
  }
}
