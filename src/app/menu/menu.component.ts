import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent {
  @Input() show: boolean;
  @Output() hideMenu: any = new EventEmitter();

  onMenuItemClick() {
    this.hideMenu.emit();
  }
}
