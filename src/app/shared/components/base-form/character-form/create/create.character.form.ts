import { Component, OnInit } from '@angular/core';
import { CharacterFormComponent } from '../character-form.component';
import {Character} from '../../../../models/character-model';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

 @Component({
  selector: 'app-create-character-form',
  templateUrl: './create.character.form.html',
  styleUrls: ['./create.character.form.scss']
})
export class CreateCharacterFormComponent extends CharacterFormComponent implements OnInit {
  group: FormGroup;
  constructor() {
    super();
    this.group = this.form;
  }

  ngOnInit() {
    console.log('starting the character creation process');
  }

}
