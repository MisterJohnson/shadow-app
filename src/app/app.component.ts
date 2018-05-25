import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  constructor( private titleService: Title ) {
    if (this.getTitle() === 'Home') {
      this.title = 'Future is over-rated!';
    } else if (this.getTitle() === 'Characters') {
      this.title = 'Shadowrunners be warned!';
    } else {
      this.title = 'They\'re no future!';
    }
  }

   public getTitle() {
    return this.titleService.getTitle() ;
  }
}
