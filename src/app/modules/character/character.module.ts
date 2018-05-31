import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterCreateComponent } from '../../shared/components/character-create/character-create.component';
import { CharacterCardComponent } from '../../shared/components/character-card/character-card.component';
import { CharacterComponent } from './character.component';
import { SharedBootstrapModule } from '../../shared/shared-bootstrap.module';
import {CreateCharacterFormComponent} from '../../shared/components/base-form/character-form/create/create.character.form';

@NgModule({
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedBootstrapModule
  ],
  declarations: [CharacterComponent, CharacterCreateComponent, CharacterCardComponent, CreateCharacterFormComponent]
})
export class CharacterModule { }
