export interface ProductSpecification {
  name: string;
  value: string;
}

export interface Product {
  id?: number;
  name: string;
  category: string;
  description: string;
  price: number;
  minOrderQuantity: number;
  stockQuantity: number;
  weight: number;
  packageSize: {
    length: number;
    width: number;
    height: number;
  };
  shippingFrom: string;
  images: File[];
  specifications: ProductSpecification[];
  status?: 'Draft' | 'Published';
}