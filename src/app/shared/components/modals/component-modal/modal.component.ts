import { Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Step } from '../../../models/step-model';
import { StepsComponent } from '../../steps/steps.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    const initialState = {
      steps: [
        new Step('1', 'Priority Selection'),
        new Step('2', 'Character Creation'),
        new Step('3', 'Character Validation'),
        new Step('4', 'Finalisation')
      ]
    };

    this.bsModalRef = this.modalService.show(StepsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
