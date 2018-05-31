import {BaseFormComponent} from '../base-form.component';
import {Character} from '../../../models/character-model';
import {FormControl, Validators} from '@angular/forms';

export abstract class CharacterFormComponent extends BaseFormComponent {
  character: Character;

  protected constructor() {
    super();
    this.character = new Character();
    this.form.addControl('name', new FormControl(
      this.character.name, [
        Validators.required,
        Validators.minLength(8)
      ]
    ));
    this.form.addControl('alias', new FormControl(
      this.character.alias, [
        Validators.required
      ]
    ));
    this.form.addControl('current_karma', new FormControl(
      this.character.current_karma, [
        Validators.required
      ]
    ));
    this.form.addControl('spent_karma', new FormControl(
      this.character.spent_karma, [
        Validators.required
      ]
    ));
    this.form.addControl('physical_description', new FormControl(
      this.character.physical_description
    ));
    this.form.addControl('background', new FormControl(
      this.character.background
    ));
    this.form.addControl('picture', new FormControl(
      this.character.picture, [
        Validators.pattern('^(jpg|png|gif)')
      ]
    ));
    this.form.addControl('current_essence', new FormControl(
      this.character.current_essence, [
        Validators.required
      ]
    ));
  }

}
