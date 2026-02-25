import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  currentImageIndex: number = 0;

  constructor(private productService: ProductService) {}

  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.product.images.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.product.images.length) %
      this.product.images.length;
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  toggleFavorite() {
    this.productService.toggleFavorite(this.product.id);
  }

  onDelete() {
    this.delete.emit(this.product.id);
  }
}