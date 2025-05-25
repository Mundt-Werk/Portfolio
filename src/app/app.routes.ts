import { Routes } from '@angular/router';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', redirectTo: '/home' }
];