import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { RequestCallbackComponent } from './request-callback/request-callback.component';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact.component';
import { SocialMediaButtonComponent } from './social-media-button/social-media-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaBarComponent,
    FooterComponent,
    HeaderComponent,
    AddressComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    GalleryComponent,
    TestimonialsComponent,
    RequestCallbackComponent,
    HomeComponent,
    SocialMediaButtonComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
