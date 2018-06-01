import {FormGroup} from '@angular/forms';

export abstract class BaseFormAbstractComponent {
  form: FormGroup;
  submitted = false; // a flag to be used in template to indicate whether the user tried to submit the form

  resetForm() {
    this.form.reset();
  }

  onSubmit() {
    this.submitted = true;
    if (!this.form.valid) {
      return;
    }
    console.log(this.form.get('name').value);
  }

  protected constructor() { }
}
