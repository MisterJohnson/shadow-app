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
import { DynamicContentComponent } from '../../shared/components/dynamic-content/dynamic-content.component';
import { ImgComponent } from '../../shared/components/tags/img/img.component';
import { CharactersService } from '../../services/characters/characters.service';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedBootstrapModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot()
  ],
  declarations: [
    CharacterComponent,
    CharacterCreateComponent,
    CharacterCardComponent,
    CreateCharacterFormComponent,
    StepsComponent,
    StepComponent,
    ModalComponent,
    ModalContentComponent,
    DynamicContentComponent,
    ImgComponent
  ],
  entryComponents: [
    ModalContentComponent,
    StepsComponent,
    StepComponent,
    DynamicContentComponent
  ],
  providers: [
    CharactersService
  ]
})
export class CharacterModule { }
