import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../model/user';
import { UserService } from 'src/app/service/user-service.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { AuthInterceptor } from '../../../helper/auth.interceptor';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private userService: UserService, private tokenStorage: TokenStorageService,
  private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.userService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.tokenStorage.saveRole(data.roles);
        localStorage.setItem('Username', this.form.username);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
		if(this.roles.includes('ROLE_ADMIN')){
			this.router.navigate(['/adminhome']);
		}
		else{
		this.router.navigate(['/userhome']);
		}
        alert("Logged In!!!");
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
		alert("Login Failed!!");
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
