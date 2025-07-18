import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ProductService } from '../../../core/services/product.service';
import { Product } from '../../../core/models/product.model';

import { FallbackImageDirective } from '../../../shared/directives/fallback-image.directive';

import { Store } from '@ngrx/store';
import { addToCart } from '../../../features/cart/store/cart.actions';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FallbackImageDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
  }

  addToCart() {
    if (this.product) {
      this.store.dispatch(addToCart({ product: this.product }));
    }
  }
}
