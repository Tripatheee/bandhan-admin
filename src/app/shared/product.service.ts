import { Injectable } from '@angular/core';
import { HttpWrapperService, HttpInputData } from './http/http-wrapper.service';
import { apiResources } from '../app.constants';
import { CommonService } from './common.service';
import { HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpWrapper: HttpWrapperService,
    private commonService: CommonService,
    private toastr: ToastrService
  ) { }

  addProduct(payload: any, productName) {
    this.commonService.showSpinner();
    return this.httpWrapper.post(apiResources.createProduct, payload).map(
      (res: any) => {
        this.commonService.hideSpinner();
        if (res.success) {
          this.toastr.success(`Product ${productName} deleted`);
          return res;
        } else {
          this.toastr.error(res.message);
        }
      }
    ).toPromise()
      .catch(
        (err) => {
          this.toastr.error('Error in add products')
          this.commonService.hideSpinner();
          console.log('error in create product api =====>>>', err);
        }
      );
  }

  getAllProducts(page: any) {
    this.commonService.showSpinner();
    let httpInput = new HttpInputData();
    let httpParam = new HttpParams();
    httpParam = httpParam.append('page', page)
    httpInput.params = httpParam;
    return this.httpWrapper.get(apiResources.productList, httpInput).map(
      (res: any) => {
        this.commonService.hideSpinner();
        if (res.success) {
          return res;
        } else {
          this.toastr.error(res.message);
        }
      }
    ).toPromise()
      .catch(
        (err) => {
          this.toastr.error('Cannot get products list')
          this.commonService.hideSpinner();
          console.log('error in product list api ====>>>', err);
        }
      )
  }

  deleteProduct(productID, productName) {
    this.commonService.showSpinner();
    return this.httpWrapper.delete(apiResources.deleteProduct.replace('productID', productID)).map(
      (res: any) => {
        this.commonService.hideSpinner();
        if (res.success) {
          this.toastr.success(`Product ${productName} deleted`);
          return res;
        } else {
          this.toastr.error(res.message);
        }
      }
    ).toPromise()
      .catch(
        (err) => {
          this.toastr.error(`Cannot delete product ${productName}`)
          console.log('error in delete product api ====>>>>', err);
          this.commonService.hideSpinner();
        }
      )
  }

  getProductDetails(productID) {
    this.commonService.showSpinner();
    return this.httpWrapper.get(apiResources.getProduct.replace('productID', productID)).map(
      (res: any) => {
        this.commonService.hideSpinner();
        if (res.success) {
          return res;
        } else {
          this.toastr.error(res.message);
        }
      }
    ).toPromise()
      .catch(
        (err) => {
          console.log('error in fetch product api ====>>>>', err);
          this.commonService.hideSpinner();
        }
      );
  }

  updateProduct(payload, productID, options?: HttpInputData) {
    this.commonService.showSpinner();
    return this.httpWrapper.post(apiResources.updateProduct.replace('productID', productID), payload, options).map(
      (res: any) => {
        this.commonService.hideSpinner();
        if (res.success) {
          return res;
        } else {
          this.toastr.error(res.message);
        }
      }
    ).toPromise()
      .catch(
        (err) => {
          this.toastr.error(`Unable to update product`)
          console.log('error in delete product api ====>>>>', err);
          this.commonService.hideSpinner();
        }
      )
  }

}
