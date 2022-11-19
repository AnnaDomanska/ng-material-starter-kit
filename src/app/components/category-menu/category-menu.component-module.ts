import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CategoryMenuComponent } from './category-menu.component';

@NgModule({
  imports: [MatButtonToggleModule, MatButtonModule, MatMenuModule, CommonModule],
  declarations: [CategoryMenuComponent],
  providers: [],
  exports: [CategoryMenuComponent]
})
export class CategoryMenuComponentModule {
}
