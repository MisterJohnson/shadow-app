import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  loginData = { username: '', password: '' };
  message = '';
  data: any;

  token = {
    refresh_token: 'refreshtokencode',
    exp: new Date((new Date().getDate() + 1)),
    access_token: {
      username: 'user',
      roles: ['Admin', 'RegisteredUser', 'Super User']
    }
  };

  tokenKey: 'a5smm_utoken';

  constructor(private router: Router, private http: HttpClient) { }

  login(username, password) {
    this.loginData.username = username;
    this.loginData.password = password;

    this.http.post('/api/signin', this.loginData).subscribe(resp => {
      this.data = resp;
      localStorage.setItem('jwtToken', this.data.token);
      this.router.navigate(['admin']);
    }, err => {
      this.setMessage(err.error.msg);
    });
  }

  logout() {
    this.removeToken();
    this.router.navigate(['login']);
  }

  getToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey));
  }

  setToken(token) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  getMessage() {
    return this.message;
  }

  setMessage(message: string) {
    this.message = message;
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey))['access_token'];
  }

  isAuthenticated() {
    return localStorage.getItem(this.tokenKey);
  }

  refreshToken() {
    this.token.exp = new Date((new Date().getDate() + 1));
    this.setToken(this.token);
  }

  removeToken() {
    localStorage.removeItem('jwtToken');
  }

}
