import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';

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
  {
    path: 'testimonials',
    component: TestimonialsComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
];
