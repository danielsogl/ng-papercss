import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertComponent } from './components/alert/alert.component';
import { ArticleComponent } from './components/article/article.component';
import { BadgeComponent } from './components/badge/badge.component';

@NgModule({
  declarations: [AlertComponent, ArticleComponent, BadgeComponent],
  imports: [
    CommonModule
  ],
  exports: [AlertComponent, ArticleComponent, BadgeComponent]
})
export class NgPapercssModule { }
