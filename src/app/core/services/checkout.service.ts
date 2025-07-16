import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CheckoutService {
    constructor( private http: HttpClient) { }
    processCheckout(products: Product[]): Observable<any> {
        // Replace with your real API endpoint
        // return this.http.post('/api/checkout', { items: products });

        console.log('Checkout called with products:', products);
        return of({ success: true }).pipe(
            delay(1000), // simulate network latency (optional)
            tap(() => console.log('Checkout success simulated'))
        );
    }
}
