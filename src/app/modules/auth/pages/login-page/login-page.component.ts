import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(
    private _authService: AuthService,
    private cookie: CookieService,
    private router: Router
  ) {}

  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;

    this._authService.sendCredential(email.toLowerCase(), password).subscribe(
      ({ data, tokenSession }) => {
        this.cookie.set('_user_token', tokenSession, 1, '/');
        this.router.navigate(['/', 'tracks']);
      },
      (err) => {
        this.errorSession = true;
        console.log('Oops ocurrio un error');
      }
    );
  }
}
