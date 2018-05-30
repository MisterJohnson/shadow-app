import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AccordionComponent } from 'angularx-accordion';
import {AccordionToggleComponent } from 'angularx-accordion';
import { Accordion } from 'angularx-accordion/accordion';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  characters: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/character').subscribe(data => {
      this.characters = data;
    });
  }

}

