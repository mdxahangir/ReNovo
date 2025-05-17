import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddProductService } from './add-product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

   productForm: FormGroup;
  imagePreviews: string[] = [];
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private addproductService: AddProductService
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      minOrderQuantity: [1, [Validators.required, Validators.min(1)]],
      stockQuantity: ['', [Validators.required, Validators.min(0)]],
      weight: ['', [Validators.required, Validators.min(0)]],
      packageSize: this.fb.group({
        length: ['', [Validators.required, Validators.min(0)]],
        width: ['', [Validators.required, Validators.min(0)]],
        height: ['', [Validators.required, Validators.min(0)]]
      }),
      shippingFrom: ['', Validators.required],
      images: [[]],
      specifications: this.fb.array([
        this.createSpecification()
      ])
    });
  }

  ngOnInit(): void {}

  get specifications(): FormArray {
    return this.productForm.get('specifications') as FormArray;
  }

  createSpecification(): FormGroup {
    return this.fb.group({
      name: [''],
      value: ['']
    });
  }

  addSpecification(): void {
    this.specifications.push(this.createSpecification());
  }

  removeSpecification(index: number): void {
    if (this.specifications.length > 1) {
      this.specifications.removeAt(index);
    }
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files).slice(0, 10); // Limit to 10 files
      this.productForm.patchValue({ images: files });
      
      // Create previews
      this.imagePreviews = [];
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removeImage(index: number): void {
    const currentImages = [...this.productForm.value.images];
    currentImages.splice(index, 1);
    this.productForm.patchValue({ images: currentImages });
    this.imagePreviews.splice(index, 1);
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const productData = this.productForm.value;
    
    this.addproductService.createProduct(productData).subscribe({
      next: (Product) => {
        console.log('Product created:', Product);
        this.isSubmitting = false;
        // Reset form or navigate away
      },
      error: (err) => {
        console.error('Error creating product:', err);
        this.isSubmitting = false;
      }
    });
  }

  onSaveDraft(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const productData = this.productForm.value;
    
    this.addproductService.saveAsDraft(productData).subscribe({
      next: (product) => {
        console.log('Draft saved:', product);
        this.isSubmitting = false;
        // Reset form or navigate away
      },
      error: (err) => {
        console.error('Error saving draft:', err);
        this.isSubmitting = false;
      }
    });
  }

}
