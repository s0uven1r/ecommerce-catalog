import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';

import { selectCartItems, selectCartTotalPrice, selectCartTotalCount, } from './store/cart.selectors';
import * as CartActions from './store/cart.actions';


@Component({
  selector: 'app-cart',
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems$: Observable<Product[]>;
  totalCount$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.totalPrice$ = this.store.select(selectCartTotalPrice);
    this.totalCount$ = this.store.select(selectCartTotalCount);
  }

  removeItem(productId: number) {
    this.store.dispatch(CartActions.removeFromCart({ productId }));
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }

   checkout(items: Product[]) {
    this.store.dispatch(CartActions.checkout({ products: items }));
  }
}
