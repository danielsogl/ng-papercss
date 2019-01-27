import { Component, ElementRef, Input, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-papercss-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';
  @Input() dismissible = false;

  @Output() dismiss = new EventEmitter<void>();

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  dismissAlert() {
    console.log(this.el.nativeElement);
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    this.dismiss.emit();
  }
}
