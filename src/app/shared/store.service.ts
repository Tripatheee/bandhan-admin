import { Injectable } from '@angular/core';
import { HttpWrapperService, HttpInputData } from './http/http-wrapper.service';
import { CommonService } from './common.service';
import { apiResources } from '../app.constants';
import { ToastrService } from 'ngx-toastr';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private httpWrapper: HttpWrapperService,
    private commonService: CommonService,
    private toastr: ToastrService
  ) { }

  addStore(payload, options?: HttpInputData) {
    this.commonService.showSpinner();
    return this.httpWrapper.post(apiResources.addStore, payload, options).map(
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
          this.commonService.hideSpinner();
          console.log('error on create store api =====>>>>', err);
          this.toastr.error('Cannot create store for now');
        }
      );
  }

  getStoreManagerList() {
    this.commonService.showSpinner();
    return this.httpWrapper.get(apiResources.storeManagerList).map(
      (res) => {
        this.commonService.hideSpinner()
        if (res.success) {
          return res;
        } else {
          this.toastr.error(res.message);
        }
      }
    ).toPromise()
      .catch(
        (err) => {
          console.log('error in store manager list api ====>>>', err);
          this.commonService.hideSpinner();
          this.toastr.error("Couldn't fetch store manager list");
        }
      );
  }

  getStoreList(page: any) {
    this.commonService.showSpinner();
    let httpInput = new HttpInputData();
    let httpParam = new HttpParams();
    httpParam = httpParam.append('page', page)
    httpInput.params = httpParam;
    return this.httpWrapper.get(apiResources.storeList, httpInput).map(
      (res) => {
        this.commonService.hideSpinner()
        if (res.success) {
          return res;
        } else {
          this.toastr.error(res.message);
        }
      }
    ).toPromise()
      .catch(
        (err) => {
          console.log('error in store manager list api ====>>>', err);
          this.commonService.hideSpinner();
          this.toastr.error("Couldn't fetch store list");
        }
      );
  }
}
