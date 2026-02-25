import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  @Input() products: Product[] = [];

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  sortByPriceAsc() {
    this.products = [...this.products].sort((a, b) => a.price - b.price);
  }

  sortByPriceDesc() {
    this.products = [...this.products].sort((a, b) => b.price - a.price);
  }

}