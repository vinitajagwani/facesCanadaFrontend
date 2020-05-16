import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  id: number = null;
  username: String;
  email:string;
  phonenumber:number;

  user: User;
  constructor(private userService: UserService, private router: Router) {
    this.username = userService.username;
    console.log(this.username);
  }

  ngOnInit(): void {

    this.getUserId();
    
  }

  getUserId() {
    this.userService.getUserId().subscribe(
      data => {
        console.log(data);
        this.refreshUser(data);
      }
    )
  }

  updateUser(id) {
    this.router.navigate(['editprofile', id])
    // this.userHttpservice.updateUser(id,new User).subscribe();
  }
  refreshUser(id) {
    this.userService.userDetailById(id).subscribe(
      response => {
        this.user = response;
        this.username = response.username;
        this.id = response.id;
        this.email = response.email;
        console.log(this.user);
      }
    )
  }
}
