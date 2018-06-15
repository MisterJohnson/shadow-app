import { Component, OnInit } from '@angular/core';
import { Step } from '../../models/step-model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  public steps: Step[];

  constructor() {
  }

  setSteps(s: Step[]) {
    this.steps = s;
  }

  ngOnInit() {
    this.setSteps([
      new Step('1', 'Priority Selection'),
      new Step('2', 'Character Creation'),
      new Step('3', 'Character Validation'),
      new Step('4', 'Finalisation')
    ]);
  }

  onSelected(isSelected: Step) {
    console.log(isSelected);
    for (let i = 0; i < this.steps.length; i++) {
      this.steps[i].current = (this.steps[i].actual_step === isSelected.actual_step);
    }
    console.log(this.steps);
  }

}
