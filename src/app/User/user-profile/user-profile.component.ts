import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser : any ;

  constructor(private tokenStorageService : TokenStorageService,
                private router : Router ,
                private route : ActivatedRoute){ }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
  }

  onEdit(){
    this.router.navigate(['editProfile'],{relativeTo : this.route});
  }

  onChangePassword(){
    this.router.navigate(['changePassword'],{relativeTo : this.route});
  }

}
