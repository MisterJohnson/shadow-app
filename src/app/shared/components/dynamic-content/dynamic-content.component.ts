import { Component, OnInit } from '@angular/core';
import {StepsComponent} from '../steps/steps.component';
import {BaseFormComponent} from '../base-form/base-form.component';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss']
})
export class DynamicContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
