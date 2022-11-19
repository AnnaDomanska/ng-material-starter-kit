import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CategoryCheckboxComponent } from './category-checkbox.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CategoryCheckboxComponent],
  providers: [],
  exports: [CategoryCheckboxComponent]
})
export class CategoryCheckboxComponentModule {
}
