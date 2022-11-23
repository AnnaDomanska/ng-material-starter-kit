import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import { ProductModel } from "../../models/product.model";
import { switchMap } from "rxjs";

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  readonly productDetails$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap( data => this._productService.getOne(data['id']))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductsService) {
  }
}
