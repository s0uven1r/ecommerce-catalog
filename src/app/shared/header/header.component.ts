import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { Store } from '@ngrx/store';
import { selectCartTotalCount } from '../../features/cart/store/cart.selectors';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartItemCount = signal<number>(0);

  constructor(private store: Store) {
    this.store.select(selectCartTotalCount).subscribe(count => {
      this.cartItemCount.set(count);
    });
  }
}
