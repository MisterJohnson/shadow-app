import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';

const appRoutes: Routes = [
  {
    path: 'characters',
    component: CharacterComponent,
    data: { title: 'Character List' }
  },
  { path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
