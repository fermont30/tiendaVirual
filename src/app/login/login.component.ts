import { Component } from '@angular/core';
import { User } from 'src/assets/data/userInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  users: User[] = [];
  // Propiedades para el inicio de sesión
  public loginUsername: string = '';
  public loginPassword: string = '';

  // Propiedades para el registro de usuarios
  public registerUsername: string = '';
  public registerPassword: string = '';

  loginSuccess: boolean = false;
  invalidCredentials: boolean = false;
  userAlreadyRegistered: boolean = false;
  registrationSuccess: boolean = false;

  login() {
    // Busca si existe un usuario con las credenciales ingresadas
    const user = this.users.find(u => u.username === this.loginUsername && u.password === this.loginPassword);
    if (user) {
      this.loginSuccess = true;
    } else {
      this.invalidCredentials = true;
    }
  }

  register() {
    // Verifica si el usuario ya está registrado
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

  closeAlerts() {
    this.loginSuccess = false;
    this.invalidCredentials = false;
    this.userAlreadyRegistered = false;
    this.registrationSuccess = false;
  }

}
