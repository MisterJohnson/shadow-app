import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal.content.component.html',
  styleUrls: ['./modal.content.component.scss']
})
export class ModalContentComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }

}
