import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterCreateComponent} from '../../shared/components/character-create/character-create.component';
import {CharacterComponent} from './character.component';
import {CharacterCardComponent} from '../../shared/components/character-card/character-card.component';

const routes: Routes = [
  {
    path: '', component: CharacterComponent, children: [
      { path: '', component: CharacterCardComponent },
      { path: 'create', component: CharacterCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
