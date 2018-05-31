import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BaseFormComponent } from './shared/components/base-form/base-form.component';
import { CharacterFormComponent } from './shared/components/base-form/character-form/character-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseFormComponent,
    CharacterFormComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
