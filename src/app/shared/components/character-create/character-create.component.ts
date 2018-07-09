import {AfterViewInit, Component, OnInit} from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NgxSmartModalComponent } from 'ngx-smart-modal';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.scss']
})
export class CharacterCreateComponent implements AfterViewInit {
  title: string;

  constructor(public ngxSmartModalService: NgxSmartModalService) {
    this.title = 'Shadowrunners gotta run';
  }

  ngAfterViewInit() {
    // this.ngxSmartModalService.getModal('myModal').open();
  }

}
