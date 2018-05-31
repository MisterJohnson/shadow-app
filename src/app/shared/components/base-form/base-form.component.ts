import {BaseFormAbstractComponent} from './base-form-abstract.component';
import {FormGroup} from '@angular/forms';

export class BaseFormComponent extends BaseFormAbstractComponent {

  constructor() {
    super();
    this.form = new FormGroup({}, { updateOn: 'blur' });
  }
}
