import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AccordionComponent } from 'angularx-accordion';
import { AccordionToggleComponent } from 'angularx-accordion';
import { Accordion } from 'angularx-accordion/accordion';
import { CharactersService } from '../../../services/characters/characters.service';
import { Character } from '../../models/character-model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  characters: Character[];

  constructor(private characterService: CharactersService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

}

