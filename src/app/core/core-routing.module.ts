import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', loadChildren: '../modules/home/home.module#HomeModule' },
  { path: 'characters', loadChildren: '../modules/character/character.module#CharacterModule' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', canActivate: [AuthGuardService], loadChildren: '../modules/admin/admin.module#AdminModule' },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
