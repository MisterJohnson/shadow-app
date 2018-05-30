import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ArticlesComponent } from '../../shared/components/articles/articles.component';
import {HomeComponent} from './home.component';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, ArticlesComponent]
})
export class HomeModule { }
