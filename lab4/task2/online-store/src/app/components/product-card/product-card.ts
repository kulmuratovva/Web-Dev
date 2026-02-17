import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {

  @Input() product!: Product;

  currentImageIndex: number = 0;

  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  nextImage() {
    if (this.currentImageIndex < this.product.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.product.images.length - 1;
    }
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
}