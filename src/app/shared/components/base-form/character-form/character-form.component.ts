import {BaseFormComponent} from '../base-form.component';
import {Character} from '../../../models/character-model';
import {FormControl} from '@angular/forms';

export abstract class CharacterFormComponent extends BaseFormComponent {
  character: Character;

  protected constructor() {
    super();
    this.form.addControl('name', new FormControl());
  }

}
