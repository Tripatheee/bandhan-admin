import { Injectable } from '@angular/core';
import { HttpWrapperService, HttpInputData } from './http/http-wrapper.service';
import { CommonService } from './common.service';
import { ToastrService } from 'ngx-toastr';
import { apiResources } from '../app.constants';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchemeService {

  constructor(
    private httpWrapper: HttpWrapperService,
    private commonService: CommonService,
    private toastr: ToastrService
  ) { }

  createScheme(payload, httpInput?: HttpInputData) {
    this.commonService.showSpinner();
    return this.httpWrapper.post(apiResources.createScheme, payload, httpInput).map(
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
        console.log("error in create scheme api =====>>>", err);
        this.commonService.hideSpinner();
        this.toastr.error("Couldn't create scheme");
      }
    )
  }

  getSchemeList(page) {
    this.commonService.showSpinner();
    let httpInput = new HttpInputData();
    let httpParam = new HttpParams();
    httpParam.set('page', page);
    httpInput.params = httpParam;
    return this.httpWrapper.get(apiResources.schemeList, httpInput).map(
      (res) => {
        this.commonService.hideSpinner();
        if(res.success) {
          return res;
        } else{
          this.toastr.error(res.message);
        }
      }
    ).toPromise()
    .catch(
      (err) => {
        console.log("error in scheme fetch api =====>>", err);
        this.toastr.error("Couldn't fetch schemes");
        this.commonService.hideSpinner();
      }
    );
  }
}
