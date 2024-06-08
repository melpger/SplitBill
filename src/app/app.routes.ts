import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tabulation',
    loadComponent: () => import('./tabulation/tabulation.page').then( m => m.TabulationPage)
  },
  {
    path: 'add-member',
    loadComponent: () => import('./add-member/add-member.page').then( m => m.AddMemberPage)
  },
];
