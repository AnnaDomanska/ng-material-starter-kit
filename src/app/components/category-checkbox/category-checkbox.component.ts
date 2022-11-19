import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-category-checkbox',
  styleUrls: ['./category-checkbox.component.scss'],
  templateUrl: './category-checkbox.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryCheckboxComponent {

  readonly list$: Observable<ProductModel[]> = this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {
  }
}
