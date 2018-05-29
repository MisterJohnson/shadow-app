import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CharacterComponent } from './sections/character/character.component';
import { HomeComponent } from './sections/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { MenuComponent } from './components/menu/menu.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { SharedBootstrapModule } from './shared/shared-bootstrap.module';
import { CharacterCreateComponent } from './sections/character-create/character-create.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharacterComponent },
  { path: 'character-create', component: CharacterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    HomeComponent,
    ArticlesComponent,
    MenuComponent,
    CharacterCardComponent,
    CharacterCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedBootstrapModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
