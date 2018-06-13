import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterCreateComponent } from '../../shared/components/character-create/character-create.component';
import { CharacterCardComponent } from '../../shared/components/character-card/character-card.component';
import { CharacterComponent } from './character.component';
import { SharedBootstrapModule } from '../../shared/shared-bootstrap.module';
import { CreateCharacterFormComponent } from '../../shared/components/base-form/character-form/create/create.character.form';
import { ReactiveFormsModule } from '@angular/forms';
import { StepsComponent } from '../../shared/components/steps/steps.component';
import { StepComponent } from '../../shared/components/step/step.component';
import { ModalComponent } from '../../shared/components/modals/component-modal/modal.component';
import { ModalContentComponent } from '../../shared/components/modals/content-modal/modal.content.component';

@NgModule({
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedBootstrapModule,
    ReactiveFormsModule
  ],
  declarations: [
    CharacterComponent,
    CharacterCreateComponent,
    CharacterCardComponent,
    CreateCharacterFormComponent,
    StepsComponent,
    StepComponent,
    ModalComponent,
    ModalContentComponent
  ],
  entryComponents: [
    ModalContentComponent,
    StepsComponent,
    StepComponent
  ]
})
export class CharacterModule { }
