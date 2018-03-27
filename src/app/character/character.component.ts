import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/character').subscribe(data => {
      this.characters = data;
    });
  }

}