import { createAction, props } from '@ngrx/store';
import { Product } from '../../../core/models/product.model';

export const addToCart = createAction(
  '[Cart] Add Item',
  props<{ product: Product }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove Item',
  props<{ productId: number }>()
);

export const clearCart = createAction('[Cart] Clear Cart');

export const checkout = createAction(
  '[Cart] Checkout',
  props<{ products: Product[] }>()
);

export const checkoutSuccess = createAction('[Cart] Checkout Success');

export const checkoutFailure = createAction(
  '[Cart] Checkout Failure',
  props<{ error: any }>()
);