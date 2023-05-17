import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeComponent } from './cafe.component';
import { CafeListComponent } from './cafe-list/cafe-list.component';


@NgModule({
  imports: [
    CommonModule,
    CafeListComponent
  ],
  declarations: [CafeComponent],
  exports: [CafeComponent,
    //CafeListComponent
  ]
})
export class CafeModule { }
