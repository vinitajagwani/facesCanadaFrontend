import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../service/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  id: number;
  user:User;
  
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.user = new User();
    this.userService.userDetailById(this.id).subscribe(
      data => this.user = data
    )

  }
  updateData() {
    this.userService.updateUser(this.id, this.user).subscribe(
      data => {
        console.log(data)
        // this.router.navigate(['dashboard'])
      }
    )
  }

  // updateData(updateForm){
  // }
}
