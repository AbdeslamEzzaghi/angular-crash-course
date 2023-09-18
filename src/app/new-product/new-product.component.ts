import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

  product : ProductRepresentation = {};

  constructor(private service : ProductService,private route : Router){

  }

  saveProduct() {
    this.service.createProduct(this.product)
    .subscribe({
      next : (result) => {
        this.route.navigate(['']);//products
      }
    });
  }


}
