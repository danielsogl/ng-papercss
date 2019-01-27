import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ng-papercss-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  @Input() position: 'left' | 'top' | 'bottom' | 'right' = 'top';
  @Input() text: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.renderer.setAttribute(this.el.nativeElement, `popover-${this.position}`, this.text);
  }
}
