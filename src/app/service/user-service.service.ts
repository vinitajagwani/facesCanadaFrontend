import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
 
@Injectable()
export class UserService {
 
      private signupUrl: string;
 
    constructor(private http: HttpClient) {
      this.signupUrl = 'http://localhost:8080/signup';
    }
  
    public save(user: User) {
      return this.http.post<User>(this.signupUrl, user);
    }
  }
  