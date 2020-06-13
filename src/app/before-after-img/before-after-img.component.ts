import { Component, Input } from '@angular/core';

@Component({
    selector: 'before-after-img',
    templateUrl: './before-after-img.component.html',
    styleUrls: ['./before-after-img.component.less']
})
export class BeforeAfterImg{
    @Input() title: string;
    @Input() source: string;
}