import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cv' },
  {
    path: 'cv',
    title: 'My CV — FlexCV',
    loadComponent: () =>
      import('./features/resume/pages/resume-workspace.page').then(
        (m) => m.ResumeWorkspacePage,
      ),
  },
  {
    path: 'ai',
    title: 'AI Chat — FlexCV',
    loadComponent: () =>
      import('./features/chat/pages/chat.page').then((m) => m.ChatPage),
  },
  {
    path: 'settings',
    title: 'Settings — FlexCV',
    loadComponent: () =>
      import('./features/settings/pages/settings.page').then((m) => m.SettingsPage),
  },
  { path: '**', redirectTo: 'cv' },
];
