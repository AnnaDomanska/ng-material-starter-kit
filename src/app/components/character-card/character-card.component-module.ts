import { NgModule } from '@angular/core';
import { CharacterCardComponent } from './character-card.component';
import {MatCardModule} from "@angular/material/card";
import {AsyncPipe, NgIf} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    AsyncPipe,
    NgIf
  ],
  declarations: [CharacterCardComponent],
  providers: [],
  exports: [CharacterCardComponent]
})
export class CharacterCardComponentModule {
}
