import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterCreateComponent} from '../character-create/character-create.component';

const routes: Routes = [
  { path: 'character-create', component: CharacterCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
