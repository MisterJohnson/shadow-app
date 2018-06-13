import { Component, OnInit } from '@angular/core';
import { Step } from '../../models/step-model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  steps: Step[];

  constructor() { }

  ngOnInit() {

  }

  onSelected(isSelected: Step) {
    console.log(isSelected);
    for (let i = 0; i < this.steps.length; i++) {
      this.steps[i].current = (this.steps[i].actual_step === isSelected.actual_step);
    }
    console.log(this.steps);
  }

}
