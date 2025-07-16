import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { Product } from '../../../core/models/product.model';

export interface CartState {
  items: Product[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, (state, { product }) => ({
    ...state,
    items: [...state.items, product],
  })),
  on(CartActions.removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.id !== productId),
  })),
  on(CartActions.clearCart, state => ({
    ...state,
    items: [],
  })),
  on(CartActions.checkoutSuccess, state => ({
    ...state,
    items: [],  // clear cart after successful checkout
    error: undefined
  })),
  on(CartActions.checkoutFailure, (state, { error }) => ({
    ...state,
    error
  }))
);
