
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Menu } from './components/menu/menu';
import { Informacion } from './components/informacion/informacion';
import { Formulario } from './components/formulario/formulario';
import { Reporte } from './components/reporte/reporte';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: Menu },
  { path: 'informacion', component: Informacion },
  { path: 'formulario', component: Formulario },
  { path: 'reporte', component: Reporte }
];
