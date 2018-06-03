import { Component, OnInit } from '@angular/core';
import { Step } from '../../models/step-model';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  steps: Step[];

  constructor() {
    this.steps = [
      new Step('1', 'Priority Selection'),
      new Step('2', 'Character Creation'),
      new Step('3', 'Character Validation'),
      new Step('4', 'Finalisation')
    ];
  }

  ngOnInit() {
  }

}
