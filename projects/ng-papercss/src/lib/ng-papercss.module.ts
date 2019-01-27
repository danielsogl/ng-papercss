import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertComponent } from './components/alert/alert.component';
import { ArticleComponent } from './components/article/article.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { PopoverComponent } from './components/popover/popover.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [
    AlertComponent,
    ArticleComponent,
    BadgeComponent,
    ButtonComponent,
    CardComponent,
    PopoverComponent,
    ProgressComponent
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    ArticleComponent,
    BadgeComponent,
    ButtonComponent,
    CardComponent,
    ProgressComponent
  ]
})
export class NgPapercssModule {}
