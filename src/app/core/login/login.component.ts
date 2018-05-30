import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;
  message: string;

  constructor(private http: HttpClient, private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    this.authentication.login(username, password);
    this.message = this.authentication.getMessage();
  }

}
