import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BaseFormComponent } from './shared/components/base-form/base-form.component';
import { CharacterComponent } from './shared/components/base-form/character-form/character.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseFormComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
