import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { FilteredEmployeeListComponent } from './filtered-employee-list.component';
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [CommonModule, MatChipsModule, MatListModule, FlexModule, MatCardModule],
  declarations: [FilteredEmployeeListComponent],
  providers: [],
  exports: [FilteredEmployeeListComponent]
})
export class FilteredEmployeeListComponentModule {
}
