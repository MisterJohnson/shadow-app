import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from '../modules/home/home.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import { MenuComponent } from '../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [LoginComponent, HeaderComponent, NotFoundComponent, HomeComponent, ArticlesComponent, MenuComponent],
  exports: [
    RouterModule,
    HeaderComponent
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ]
})
export class CoreModule { }
