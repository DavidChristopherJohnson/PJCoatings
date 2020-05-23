import { Component } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.less'],
})
export class SocialMediaBarComponent {
  faFacebookSquare = faFacebookSquare;
}
