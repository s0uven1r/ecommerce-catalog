import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CheckoutService } from '../../../core/services/checkout.service';
import * as CartActions from './cart.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CartEffects {
    private actions$ = inject(Actions);
    checkout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.checkout),
            mergeMap(({ products }) =>
                this.checkoutService.processCheckout(products).pipe(
                    map(() => CartActions.checkoutSuccess()),
                    catchError(error => of(CartActions.checkoutFailure({ error })))
                )
            )
        )
    );

    constructor(
        private checkoutService: CheckoutService
    ) {
        console.log('CartEffects created, actions$:', this.actions$);
    }
}
