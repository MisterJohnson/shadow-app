import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['../../app.component.scss', './character.component.scss']
})
export class CharacterComponent implements OnInit {

  title: string;
  characters: any;

  constructor(private http: HttpClient) {
    this.title = 'Shadowrunners be warned';
  }

  ngOnInit() {
    this.http.get('/character').subscribe(data => {
      this.characters = data;
    });
  }

}
