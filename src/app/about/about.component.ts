import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/models/product-representation';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  param: any;
  queryParams: any;

  constructor(private activatedRoute : ActivatedRoute,){
    
  }
  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.params['username'];
    this.queryParams= this.activatedRoute.snapshot.queryParams['course'];
  }
}
