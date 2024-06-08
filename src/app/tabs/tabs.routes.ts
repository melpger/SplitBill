import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabulation',
        loadComponent: () =>
          import('../tabulation/tabulation.page').then((m) => m.TabulationPage),
      },
      {
        path: 'split-bill',
        loadComponent: () =>
          import('../split-bill/split-bill.page').then( m => m.SplitBillPage)
      },
      {
        path: 'add-member',
        loadComponent: () =>
          import('../add-member/add-member.page').then((m) => m.AddMemberPage),
      },
      {
        path: '',
        redirectTo: '/tabs/split-bill',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/split-bill',
    pathMatch: 'full',
  },
];
