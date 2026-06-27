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
    title: 'AI Assistant — FlexCV',
    loadComponent: () =>
      import('./features/ai/pages/ai-assistant.page').then((m) => m.AiAssistantPage),
  },
  {
    path: 'settings',
    title: 'Settings — FlexCV',
    loadComponent: () =>
      import('./features/settings/pages/settings.page').then((m) => m.SettingsPage),
  },
  { path: '**', redirectTo: 'cv' },
];
