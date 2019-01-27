import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-papercss-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';
  @Input() size: 'default' | 'small' | 'large' | 'block' = 'default';
  @Input() disabled = false;
}
