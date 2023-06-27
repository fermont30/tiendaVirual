import { Component, OnDestroy } from '@angular/core';
import { User } from 'src/assets/data/userInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements  OnDestroy {

  users: User[] = [];
  loginUsername = '';
  loginPassword = '';
  registerUsername = '';
  registerPassword = '';

  loginSuccess = false;
  invalidCredentials = false;
  userAlreadyRegistered = false;
  registrationSuccess = false;

  ngOnDestroy(): void {
    this.displayMessage('Estas Seguro de no iniciar Sesion');
  }

  displayMessage(message: string): void {
    alert(message);
  }

  login(): void {
    const user = this.users.find(u => u.username === this.loginUsername && u.password === this.loginPassword);
    if (user) {
      this.loginSuccess = true;
    } else {
      this.invalidCredentials = true;
    }
  }

  register(): void {
    const existingUser = this.users.find(u => u.username === this.registerUsername);
    if (existingUser) {
      this.userAlreadyRegistered = true;
    } else {
      const newUser = { username: this.registerUsername, password: this.registerPassword };
      this.users.push(newUser);
      this.registrationSuccess = true;
      console.log(this.users);
    }
  }

  closeAlerts(): void {
    this.loginSuccess = false;
    this.invalidCredentials = false;
    this.userAlreadyRegistered = false;
    this.registrationSuccess = false;
  }
}
