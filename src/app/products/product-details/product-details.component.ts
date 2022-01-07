import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Detail';
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.onProductRetrieved(id);
  }

  onProductRetrieved(id: number): void {
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data;

      if (this.product) {
        this.pageTitle = `Product Detail: ${this.product.productName}`;
      } else {
        this.pageTitle = 'No product found';
      }
    });
  }
}
