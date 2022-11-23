import { NgModule } from '@angular/core';
import { AgePredictionComponent } from './age-prediction.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    AsyncPipe,
    MatCardModule,
    NgIf
  ],
  declarations: [AgePredictionComponent],
  providers: [],
  exports: [AgePredictionComponent]
})
export class AgePredictionComponentModule {
}
