import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.scss']
})
export class CharacterCreateComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'Shadowrunners gotta run';
  }

  ngOnInit() {

  }

}
