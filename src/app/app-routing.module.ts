import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TareasComponent } from './pages/tareas/tareas.component';


const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },

  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'tareas', component: TareasComponent
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then( m => m.CardsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
