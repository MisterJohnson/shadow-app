import { Component, OnInit } from '@angular/core';
import { Step } from '../../models/step-model';

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

}
