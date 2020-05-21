import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { User } from '../../../model/user';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
		alert("You have succesfully registered!!!!")
		this.goToLogin();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
		alert("Registeration Failed!!!!")
      }
    );
  }
  goToLogin(){
	  this.router.navigate(['/login']);
  }

}
