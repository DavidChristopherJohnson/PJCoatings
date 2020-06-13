import { Input, Component } from '@angular/core';

@Component({
    selector: 'before-after',
    templateUrl: './before-after.component.html',
    styleUrls: ['./before-after.component.less']
})
export class BeforeAfterComponent {
    @Input() beforeFilename
    @Input() afterFilename
}