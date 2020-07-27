import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Router, NavigationExtras } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

declare var $: any
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  moreProducts: boolean;
  page: number;
  productName: any;
  productID: any;
  itemPerPage: any;
  totalProducts: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.page = 1;
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts(this.page).then(
      (res) => {
        if (res) {
          this.commonService.getCategoriesList().then(
            (category) => {
              category.data.data.forEach(
                (cat) => {
                  res.data.data.forEach(
                    (data)=> {
                      if(cat.id == data.categories_id) {
                        data.categoryName = cat.name;
                      }
                    }
                  );
                }
              );
              console.log('response from product all api ====>>>', res);
              this.products = res.data.data;
              this.page = res.data.meta.current_page;
              this.itemPerPage = res.data.meta.per_page;
              this.totalProducts = res.data.meta.total;
              this.moreProducts = res.data.meta.has_more_pages;
            }
          );          
        }
      }
    );
  }

  openDeleteProductModal(productName, productID) {
    this.productName = productName;
    this.productID = productID;
    $('#productDelete').modal("show");
  }

  deleteProduct() {
    $('#productDelete').modal("hide");
    if(this.page > 1 && this.products.length == 1) {
      this.page -= 1;
    }
    this.productService.deleteProduct(this.productID, this.productName).then(
      (res) => {
        if (res) {
          this.productName = '';
          this.productID = '';
          $('#productDelete').modal("hide");
          this.getProducts()
        }
      }
    )
  }

  closeModal() {
    this.productName = '';
    this.productID = '';
    $('#productDelete').modal("hide");
  }

  selectPage(event) {
    this.page = event;
    this.getProducts();
    console.log(event);
  }

  viewProduct(productID) {
    let extras: NavigationExtras = {

      queryParams: {
        product_id: productID
      }
    }
    this.router.navigate(['product'], extras);
  }

}

