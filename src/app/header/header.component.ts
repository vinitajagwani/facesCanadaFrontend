import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { TokenStorageService } from "../service/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User[];
  
  constructor(public userService: UserService , private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
   
  }
logout(){
    this.tokenStorageService.signOut();
  }
}
