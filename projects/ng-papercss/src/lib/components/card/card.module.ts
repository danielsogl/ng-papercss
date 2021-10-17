import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardSubtitleComponent } from './card-subtitle/card-subtitle.component';
import { CardTextComponent } from './card-text/card-text.component';
import { CardLinkComponent } from './card-link/card-link.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardFooterComponent } from './card-footer/card-footer.component';

@NgModule({
  declarations: [
    CardContainerComponent,
    CardBodyComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    CardTextComponent,
    CardLinkComponent,
    CardHeaderComponent,
    CardFooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardContainerComponent,
    CardBodyComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    CardTextComponent,
    CardLinkComponent,
    CardHeaderComponent,
    CardFooterComponent,
  ],
})
export class CardModule {}
