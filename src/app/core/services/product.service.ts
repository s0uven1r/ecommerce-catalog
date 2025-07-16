import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [
        {
            id: 1,
            name: 'Product A',
            description: 'This is Product A',
            price: 100,
            imageUrl: ''
        },
        {
            id: 2,
            name: 'Product B',
            description: 'This is Product B',
            price: 150,
            imageUrl: ''
        },
        {
            id: 3,
            name: 'Product C',
            description: 'This is Product C',
            price: 200,
            imageUrl: ''
        },
        {
            id: 4,
            name: 'Product D',
            description: 'This is Product D',
            price: 200,
            imageUrl: ''
        },
        {
            id: 5,
            name: 'Product E',
            description: 'This is Product E',
            price: 200,
            imageUrl: ''
        }
    ]

    getProducts() {
        return this.products;
    }

    getProductById(id: number) {
        return this.products.find(p => p.id === id);
    }
}