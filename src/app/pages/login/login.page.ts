import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  loginUser() {
    if (this.email && this.password) {
      console.log('Login realizado com sucesso!');
      this.router.navigate(['/chat']); // Redireciona para o chat
    } else {
      console.log('Preencha todos os campos!');
    }
  }
}
