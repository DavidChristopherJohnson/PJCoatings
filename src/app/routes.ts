import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
