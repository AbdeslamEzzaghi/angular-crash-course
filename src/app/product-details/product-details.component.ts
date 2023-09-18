import { Component, Input, OnInit } from '@angular/core';
import { ProductRepresentation } from '../services/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  @Input()
  product : ProductRepresentation = {};

 
}
