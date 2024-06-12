import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public loginService: LoginService, public router: Router) {
  }

  register(user: string, password: string) {
    this.loginService.isLogged = true;
  }
}
