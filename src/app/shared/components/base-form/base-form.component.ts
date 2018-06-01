import {BaseFormAbstractComponent} from './base-form-abstract.component';
import {FormGroup} from '@angular/forms';

export abstract class BaseFormComponent extends BaseFormAbstractComponent {

  protected constructor() {
    super();
    this.form = new FormGroup({}, { updateOn: 'blur' });
  }
}
