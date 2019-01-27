import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-papercss-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  @Input() color: 'secondary' | 'success' | 'warning' | 'danger' | 'muted';
  @Input() progress = 0;
  @Input() striped = false;
}
