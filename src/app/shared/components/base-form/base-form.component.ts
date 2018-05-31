import { Component, OnInit } from '@angular/core';
import {BaseFormAbstractComponent} from './base-form-abstract.component';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent extends BaseFormAbstractComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
