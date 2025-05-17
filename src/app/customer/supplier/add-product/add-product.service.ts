import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './add-product.maodel';





@Injectable({
  providedIn: 'root'
})
export class AddProductService {
 private apiUrl = 'api/products'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  createProduct(productData: FormData): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, productData);
  }

  saveAsDraft(productData: FormData): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/drafts`, productData);
  }

  // Helper method to convert product data to FormData for file uploads
  prepareProductFormData(product: Product): FormData {
    const formData = new FormData();

    // Append simple fields
    formData.append('name', product.name);
    formData.append('category', product.category);
    formData.append('description', product.description);
    formData.append('price', product.price.toString());
    formData.append('minOrderQuantity', product.minOrderQuantity.toString());
    formData.append('stockQuantity', product.stockQuantity.toString());
    formData.append('weight', product.weight.toString());
    formData.append('shippingFrom', product.shippingFrom);

    // Append package size
    formData.append('packageSize[length]', product.packageSize.length.toString());
    formData.append('packageSize[width]', product.packageSize.width.toString());
    formData.append('packageSize[height]', product.packageSize.height.toString());

    // Append specifications
    product.specifications.forEach((spec, index) => {
      formData.append(`specifications[${index}][name]`, spec.name);
      formData.append(`specifications[${index}][value]`, spec.value);
    });

    // Append images
    if (product.images && product.images.length > 0) {
      for (let i = 0; i < product.images.length; i++) {
        // Check if it's a File object (new upload) or string (existing URL)
        if (product.images[i] instanceof File) {
          formData.append('images', product.images[i] as File);
        }
      }
    }

    return formData;
  }
}
