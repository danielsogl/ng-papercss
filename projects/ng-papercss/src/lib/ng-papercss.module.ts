import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertComponent } from './components/alert/alert.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [AlertComponent, ArticleComponent],
  imports: [
    CommonModule
  ],
  exports: [AlertComponent, ArticleComponent]
})
export class NgPapercssModule { }
