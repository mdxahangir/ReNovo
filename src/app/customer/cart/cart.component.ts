// app.component.ts
import { Component } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  model: string;
  image: string;
  supplier: string;
  verified: boolean;
  price: number;
  quantity: number;
  moq: number;
  rating: number;
  reviews: number;
  selected: boolean;
}

interface PaymentMethod {
  name: string;
  image: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface AppLink {
  name: string;
  url: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      model: 'WH-2023',
      image: 'https://via.placeholder.com/200x200?text=Product+1',
      supplier: 'Tech Gadgets Supplier',
      verified: true,
      price: 29.99,
      quantity: 10,
      moq: 10,
      rating: 4.5,
      reviews: 128,
      selected: true
    },
    {
      id: 2,
      name: 'Smart Watch Fitness Tracker',
      model: 'SW-2023',
      image: 'https://via.placeholder.com/200x200?text=Product+2',
      supplier: 'Tech Gadgets Supplier',
      verified: true,
      price: 49.99,
      quantity: 5,
      moq: 5,
      rating: 4,
      reviews: 89,
      selected: true
    },
    {
      id: 3,
      name: 'Stainless Steel Water Bottle',
      model: 'SSB-2023',
      image: 'https://via.placeholder.com/200x200?text=Product+3',
      supplier: 'Home Essentials Co.',
      verified: false,
      price: 12.99,
      quantity: 20,
      moq: 20,
      rating: 5,
      reviews: 215,
      selected: true
    }
  ];

  shippingFee: number = 25.00;
  discount: number = 20.00;
  taxRate: number = 0.06;
  currentYear: number = new Date().getFullYear();

  paymentMethods: PaymentMethod[] = [
    { name: 'Visa', image: 'https://via.placeholder.com/50x30?text=Visa' },
    { name: 'Mastercard', image: 'https://via.placeholder.com/50x30?text=MC' },
    { name: 'PayPal', image: 'https://via.placeholder.com/50x30?text=PP' },
    { name: 'Amex', image: 'https://via.placeholder.com/50x30?text=AE' },
    { name: 'Alipay', image: 'https://via.placeholder.com/50x30?text=AliPay' }
  ];

  socialLinks: SocialLink[] = [
    { name: 'Facebook', url: '#', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
    { name: 'Instagram', url: '#', icon: 'fab fa-instagram' }
  ];

  appLinks: AppLink[] = [
    { name: 'App Store', url: '#', image: 'https://via.placeholder.com/100x35?text=App+Store' },
    { name: 'Google Play', url: '#', image: 'https://via.placeholder.com/100x35?text=Google+Play' }
  ];

  getSuppliers(): string[] {
    return [...new Set(this.cartItems.map(item => item.supplier))];
  }

  getItemsBySupplier(supplier: string): CartItem[] {
    return this.cartItems.filter(item => item.supplier === supplier);
  }

  isVerifiedSupplier(supplier: string): boolean {
    const item = this.cartItems.find(i => i.supplier === supplier);
    return item ? item.verified : false;
  }

  getStars(rating: number): {filled: boolean}[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      stars.push({ filled: i <= fullStars || (i === fullStars + 1 && hasHalfStar) });
    }
    
    return stars;
  }

  toggleItemSelection(item: CartItem): void {
    item.selected = !item.selected;
  }

  toggleSupplierSelection(supplier: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.cartItems
      .filter(item => item.supplier === supplier)
      .forEach(item => item.selected = checked);
  }

  toggleSelectAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.cartItems.forEach(item => item.selected = checked);
  }

  allItemsSelected(): boolean {
    return this.cartItems.every(item => item.selected);
  }

  allSupplierItemsSelected(supplier: string): boolean {
    const supplierItems = this.cartItems.filter(item => item.supplier === supplier);
    return supplierItems.length > 0 && supplierItems.every(item => item.selected);
  }

  selectedItemsCount(): number {
    return this.cartItems.filter(item => item.selected).length;
  }

  increaseQuantity(item: CartItem): void {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem): void {
    if (item.quantity > item.moq) {
      item.quantity--;
    }
  }

  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }

  removeSelected(): void {
    this.cartItems = this.cartItems.filter(item => !item.selected);
  }

  moveToWishlist(): void {
    // In a real app, you would move selected items to wishlist
    alert(`${this.selectedItemsCount()} items moved to wishlist`);
    this.removeSelected();
  }

  calculateSubtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  calculateTax(): number {
    return this.calculateSubtotal() * this.taxRate;
  }

  calculateTotal(): number {
    return this.calculateSubtotal() + this.shippingFee + this.calculateTax() - this.discount;
  }

  checkout(): void {
    // In a real app, you would navigate to checkout page
    alert(`Proceeding to checkout with ${this.cartItems.length} items`);
  }
}