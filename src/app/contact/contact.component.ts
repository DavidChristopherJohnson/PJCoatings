import { Component, ViewChild } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
})
export class ContactComponent {
  faFacebookSquare = faFacebookSquare;
  facebookIconColour = '#3b5998';
}
