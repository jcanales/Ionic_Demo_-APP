import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { AnunciosComponent } from './components/anuncios/anuncios.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { LiturgiasComponent } from './components/liturgias/liturgias.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent  } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PagosComponent } from './components/pagos/pagos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pages/pagos/pagos.module').then( m => m.PagosPageModule)
  },

  { path: 'pagos', component: PagosComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'anuncios', component: AnunciosComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'liturgias', component: LiturgiasComponent},
  { path: 'trabajos', component: TrabajosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
