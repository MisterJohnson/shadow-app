import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private titleService: Title ) {}

  ngOnInit() {
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
