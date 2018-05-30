import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterRoutingModule} from './character-routing.module';
import {CharacterCreateComponent} from '../character-create/character-create.component';
import {CharacterCardComponent} from '../../components/character-card/character-card.component';
import { ArticlesComponent } from '../../components/articles/articles.component';

@NgModule({
  imports: [
    CommonModule,
    CharacterRoutingModule,
  ],
  declarations: [CharacterCreateComponent, CharacterCardComponent, ArticlesComponent]
})
export class CharacterModule { }
