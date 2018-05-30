import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../modules/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'characters', loadChildren: '../modules/character/character.module#CharacterModule' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', canActivate: [AuthGuardService], loadChildren: '../modules/admin/admin.module#AdminModule' },
  { path: 'form', loadChildren: '../form/form.module#FormModule' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
