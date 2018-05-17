import {Component, EventEmitter, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css', './home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;

  constructor(private http: HttpClient) {
    this.title = 'Future is over-rated!';
  }

  ngOnInit() {}

}
