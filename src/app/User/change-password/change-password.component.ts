import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
form : any = { };
  isSuccessful = false;
  isLoggedIn =false;
  isFailed = false;
  currentUser : any ;
  id : any;
  password : any;
  constructor(private userService : UserService,
    private tokenStorageService : TokenStorageService) { }

  ngOnInit(): void {
    this.id = this.tokenStorageService.getUser().id;
    this.password = this.tokenStorageService.getUser().password;
  }

  onChangePassword(){
      this.userService.changePassword(this.id,this.form).subscribe(
        response => {
        console.log(response);
        this.isSuccessful=true;
        this.isFailed=false;
        },
        error => {
          console.log(error);
          this.isFailed=true;
        }
      );
  }

}
