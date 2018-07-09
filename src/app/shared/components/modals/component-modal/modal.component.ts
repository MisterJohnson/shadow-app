import { Component, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Step } from '../../../models/step-model';
import { StepsComponent } from '../../steps/steps.component';
import { DynamicContentComponent } from '../../dynamic-content/dynamic-content.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    const initialState = {};

    this.bsModalRef = this.modalService.show(DynamicContentComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
