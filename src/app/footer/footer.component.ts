import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent {
  copyText = () => {
    let year: string = new Date(Date.now()).getFullYear().toString();

    return `© ${year} P. J. Coatings Ltd`;
  };
}
