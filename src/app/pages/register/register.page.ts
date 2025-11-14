import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  registerUser() {
    if (this.password === this.confirmPassword) {
      console.log('Usuário registrado com sucesso!');
      this.router.navigate(['/login']); // Redireciona para a tela de login
    } else {
      console.log('As senhas não coincidem!');
    }
  }
}
