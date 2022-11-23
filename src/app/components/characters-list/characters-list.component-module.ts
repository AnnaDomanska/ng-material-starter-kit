import { NgModule } from '@angular/core';
import { CharactersListComponent } from './characters-list.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
    imports: [
        MatCardModule,
        AsyncPipe,
        NgIf,
        MatListModule,
        NgForOf,
        RouterLinkWithHref
    ],
  declarations: [CharactersListComponent],
  providers: [],
  exports: [CharactersListComponent]
})
export class CharactersListComponentModule {
}
