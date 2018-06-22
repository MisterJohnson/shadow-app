import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../../../models/tags/image';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Input() data: Image;
  constructor() { }

  ngOnInit() {
  }

}
