import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  @Input() product: Product | null = null;
  @Output() formClosed = new EventEmitter<boolean>();

  form: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.form = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      description: [''],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: [''],
    });
  }

  ngOnInit() {
    if (this.product) {
      this.form.patchValue(this.product);
    } else {
      this.form.patchValue({ id: Date.now() });
    }
  }

  submit() {
    const productData = this.form.value as Product;
    if (this.product) {
      this.productService.updateProduct(productData);
    } else {
      this.productService.addProduct(productData);
    }
    this.formClosed.emit(true);
  }

  closeModal() {
    this.formClosed.emit(false);
  }

  close(triggeredByUser: boolean) {
    this.formClosed.emit(triggeredByUser);
  }

}
