import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  faBars = faBars;
  showMenu: boolean = false;

  navToggleMobClick() {
    this.showMenu = !this.showMenu;
  }

  hideMenu() {
    this.showMenu = false;
  }
}
