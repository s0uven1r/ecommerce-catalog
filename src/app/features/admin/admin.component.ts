import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { ProductFormComponent } from './product-form/product-form.component'; // custom component

@Component({
  selector: 'app-admin',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ProductFormComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent {
  products: Product[] = [];
  columns = ['id', 'name', 'price', 'actions'];
  showForm = false;
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {
    this.refresh();
  }

  refresh() {
    this.products = this.productService.getProducts();
  }

  openAddForm() {
    this.selectedProduct = null;
    this.showForm = true;
  }

  openEditForm(product: Product) {
    this.selectedProduct = { ...product }; // clone to avoid mutation
    this.showForm = true;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.refresh();
  }

  handleFormClose(updated: boolean) {
    this.showForm = false;
    debugger;
    if (updated) this.refresh();
  }
}
