import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterCreateComponent} from '../../shared/components/character-create/character-create.component';
import {CharacterComponent} from './character.component';

const routes: Routes = [
  { path: '', component: CharacterComponent },
  { path: 'create', component: CharacterCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
