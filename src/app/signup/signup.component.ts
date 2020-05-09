import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user : User;

  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService) { 
      this.user = new User();
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
    this.gotoUserList();
    alert("Registration Successful");
  }

  gotoUserList() {
    this.router.navigate(['/login']);
  }
}

 