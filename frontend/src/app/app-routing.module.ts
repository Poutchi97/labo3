import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AnimeDescriptionComponent } from './anime-description/anime-description.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginGuard } from './shared/guards/user-login.guard';


const routes: Routes = [
  { path: '', component: AccueilComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, canActivate: [UserLoginGuard] },
  { path: 'login', component: LoginComponent, canActivate: [UserLoginGuard] },
  { path: 'anime/:id', component: AnimeDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
