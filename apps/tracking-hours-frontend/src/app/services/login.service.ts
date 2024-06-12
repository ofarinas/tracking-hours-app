import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogged = false;

  constructor() {
  }

  login(user: string, password: string) {
    this.isLogged = true;

  }
}
