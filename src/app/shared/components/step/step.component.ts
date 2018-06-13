import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Step } from '../../models/step-model';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input() data: Step;
  @Output() selected = new EventEmitter<Step>();

  toggle() {
    this.selected.emit(this.data);
  }
}
