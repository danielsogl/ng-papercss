import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-papercss-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() color: 'secondary' | 'success' | 'warning' | 'danger';
}
