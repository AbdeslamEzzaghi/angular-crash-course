import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  productsList : ProductRepresentation[] = []

  constructor(private serviceHttp:ProductService){

    
  }
  ngOnInit(): void {
 
    
     this.serviceHttp.getAllProductsWithLimit()
      .subscribe({
        next : (data) => {
          this.productsList = data;
          
        }
      })
     /* const product : ProductRepresentation = {
        title : "My product",
        category: "electromenager",
        description: "electric",
        image: 'unaImagen.jpg',
        price: 120  
      }
      this.serviceHttp.createProduct(product)
      .subscribe({
        next : (data) => {
          console.log(data);
          
        },
          error : (error : HttpErrorResponse) => {
            console.log(error);
          }          
        
      })*/
  }
}
