import { Component, Input } from '@angular/core';

@Component({
  selector: 'social-media-button',
  templateUrl: './social-media-button.component.html',
  styleUrls: ['./social-media-button.component.less'],
})
export class SocialMediaButtonComponent {
  @Input() iconColour: string;
  @Input() icon: any;
}
