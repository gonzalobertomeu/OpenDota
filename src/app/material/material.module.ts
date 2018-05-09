import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatChipsModule, MatExpansionModule, MatDividerModule, MatListModule, MatGridListModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule
  ],
  declarations: []
})
export class MaterialModule { }
