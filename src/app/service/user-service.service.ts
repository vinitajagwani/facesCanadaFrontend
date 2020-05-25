import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

const AUTH_URL = 'http://localhost:8088/api/auth/';
const USER_URL = 'http://localhost:8088/api/user/';
const API_URL = 'http://localhost:8088/api/test/';

const headers = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  roles: String[];
  adminLoggedIn = false;
  public username;
  constructor(private http: HttpClient,
    private router: Router,private tokenService: TokenStorageService) {
     
      
  }

  public findAllUser(): Observable<User[]> {
    return this.http.get<User[]>(USER_URL + 'list',headers);
  }



  public userDetailById(id: any) {
    // const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('auth-token')}` });
    return this.http.get<User>(`http://localhost:8088/api/user/single/${id}`);
  }

  getUserId() {
    let username = localStorage.getItem('Username');
    return this.http.get(`http://localhost:8088/api/user/${username}`);
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('Username');
    return !(user === null);
  }

  isAdminLoggedIn() {
    let admin = this.tokenService.getUser();
    this.roles = admin.roles;
    if (this.adminLoggedIn = this.roles.includes('ROLE_ADMIN')) {
      return true;
    } else {
      return
    }
  }
  logout() {
    localStorage.removeItem('Username');
    console.log("user removed");
      }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_URL + 'signin', {
      username: credentials.username,
      password: credentials.password
    },headers);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    },headers);
  }
 
  public getActiveUser(): Observable<User[]>{
    return this.http.get<User[]>(USER_URL + 'active');
  }

  getInactiveUser(): Observable<User[]> {
    return this.http.get<User[]>(USER_URL + 'inactive');
  }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  changeStatus(id,status){
    return this.http.get(`http://localhost:8088/api/user/updatestatus/${id}/${status}`)
  }
   updateProfile(id, data) {
    return this.http.put(`http://localhost:8088/api/editProfile/${id}`, data);
  }

  changePassword(id, data) {
    return this.http.put(`http://localhost:8088/api/changePassword/${id}`, data);
  }
}

