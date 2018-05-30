import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterCreateComponent } from '../character-create/character-create.component';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { CharacterComponent } from './character.component';
import { SharedBootstrapModule } from '../../shared/shared-bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedBootstrapModule
  ],
  declarations: [CharacterComponent, CharacterCreateComponent, CharacterCardComponent]
})
export class CharacterModule { }
