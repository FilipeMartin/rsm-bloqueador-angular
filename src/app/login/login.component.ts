import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@app/services/auth.service';
import {LoginRequest} from '@app/models/interfaces/auth';
import {AppService} from '@app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string;

  login: LoginRequest = {
    email: '',
    password: ''
  };

  check = true;

  constructor(protected app: AppService, private router: Router, private authService: AuthService) {
  }

  async doLogin($event) {
    await this.router.navigateByUrl('/dashboard');
    $event.preventDefault();
    try {
      await this.authService.login(this.login);
      sessionStorage.setItem("isLogin", "true");
      await this.router.navigateByUrl('/dashboard');
    } catch (e) {
      await this.router.navigateByUrl('/login');
      await this.app.alert("Login ou senha incorretos.");
    }
  }

  ngOnInit() {
  }

}
