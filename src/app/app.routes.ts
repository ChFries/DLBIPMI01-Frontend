import { Routes } from '@angular/router';
import {HistoryPageComponent} from './history-page/history-page.component';
import {WarningPageComponent} from './warning-page/warning-page.component';

export const routes: Routes = [
  {path: 'history', title: 'Firmenhistorie', component: HistoryPageComponent},
  {path: '**', component: WarningPageComponent}
];
