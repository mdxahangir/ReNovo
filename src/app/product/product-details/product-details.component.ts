import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ngOnInit(): void {
  
  }

 mainImage = 'https://via.placeholder.com/600x400?text=Premium+Widget';
  thumbnails = [
    { src: 'assets/images/icon-vegetables-broccoli.png', alt: 'Thumbnail 1' }
  ];
  
  activeTab = 0;
  
  product = {
    title: 'Premium Industrial Widget (2023 Model)',
    supplier: {
      name: 'Global Parts Co.',
      logo: 'https://src/assets/images/bg-leaves-pattern.png',
      verified: true
    },
    price: '$12.50 - $15.80',
    priceRange: 'Varies by order quantity',
    paymentTerms: 'T/T, L/C, Western Union',
    deliveryTime: '7-15 days after payment',
    moq: '100 pieces'
  };
  
  details = {
    description: 'The Premium Industrial Widget is designed for high-performance applications in manufacturing environments. With its durable construction and precision engineering, this widget offers superior reliability and longevity compared to standard models.',
    features: [
      'High-grade stainless steel construction',
      'Precision-machined components (±0.01mm tolerance)',
      'Corrosion-resistant coating',
      'Compatible with industry standard Widget Systems 2.0+',
      'Maintenance-free operation for up to 10,000 hours'
    ],
    packaging: 'Each widget is individually packaged in protective foam and shipped in durable cardboard boxes. Standard pallet shipping available for bulk orders.'
  };
  
  specs = [
    { name: 'Material', value: 'Grade 304 Stainless Steel' },
    { name: 'Dimensions', value: '50mm × 30mm × 20mm' },
    { name: 'Weight', value: '85g per unit' },
    { name: 'Operating Temperature', value: '-20°C to 150°C' },
    { name: 'Load Capacity', value: 'Up to 500kg' },
    { name: 'Certifications', value: 'ISO 9001, CE, RoHS' },
    { name: 'Warranty', value: '2 years limited warranty' }
  ];
  
  companyProfile = {
    about: 'Founded in 2005, Global Parts Co. is a leading manufacturer of industrial components with factories in China and distribution centers worldwide. We specialize in precision-engineered parts for the automotive, aerospace, and manufacturing industries.',
    businessInfo: [
      { label: 'Year Established', value: '2005' },
      { label: 'Annual Revenue', value: '$50 Million' },
      { label: 'Employees', value: '250+' },
      { label: 'Quality Certifications', value: 'ISO 9001:2015, IATF 16949' },
      { label: 'Export Markets', value: 'North America, Europe, Asia' }
    ]
  };
  
  reviews = {
    averageRating: '4.7/5',
    totalReviews: 24,
    sampleReview: {
      author: 'John D.',
      rating: 5,
      comment: '"Excellent product quality and the supplier was very responsive. Transaction was smooth with no hidden fees as promised."',
      date: 'Posted on March 15, 2023'
    }
  };
  
  tabs = ['Product Details', 'Specifications', 'Company Profile', 'Reviews (24)'];
  
  changeImage(newImage: string) {
    this.mainImage = newImage.replace('150', '600x400');
  }
  
  setActiveTab(index: number) {
    this.activeTab = index;
  }

}
