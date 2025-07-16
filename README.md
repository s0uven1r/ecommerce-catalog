# EcommerceCatalog

<img width="563" height="254" alt="image" src="https://github.com/user-attachments/assets/3d6e3943-3bc0-4118-a1e0-39f7c6860747" />

✅ 1️⃣ Milestone 1: Project Setup
ng new ecommerce-catalog --standalone

Add Angular Material: ng add @angular/material

Pick theme, typography, animations

Create shared/ UI folder: src/app/shared/

✅ 2️⃣ Milestone 2: Routing & Layout
Create Standalone Components:

HeaderComponent → includes cart icon with badge

FooterComponent

Define routes:

/products → product list

/product/:id → product details

/cart → shopping cart

/admin → lazy loaded module for admin CRUD

✅ 3️⃣ Milestone 3: Product Catalog
Create ProductListComponent → display grid list with Material Cards

Create ProductDetailComponent → show single product info, add to cart button

✅ 4️⃣ Milestone 4: Cart State
Use NgRx:

Actions: addToCart, removeFromCart, clearCart

Reducer: manage items[]

Selectors: total count, total price

Display cart item count in HeaderComponent → Signal wraps selector for reactive badge

✅ 5️⃣ Milestone 5: Admin Module (Lazy Loaded)
Use Angular Material Table, Form, Dialog

Implement CRUD for products