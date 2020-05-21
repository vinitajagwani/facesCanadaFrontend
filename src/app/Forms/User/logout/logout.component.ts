import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.userService.logout();
	alert("Logged Out Successfully!!!")
	this.router.navigate(['/login']);
	
	 }
	reloadPage() {
    window.location.reload();
  }
    
  }


