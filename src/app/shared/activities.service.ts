import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpWrapperService, HttpInputData } from './http/http-wrapper.service';
import { ToastrService } from 'ngx-toastr';
import { apiResources } from '../app.constants';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(
    private commonService: CommonService,
    private httpWrapper: HttpWrapperService,
    private toastr: ToastrService
  ) { }

  getActivities(page) {
    this.commonService.showSpinner();
    let httpInput = new HttpInputData();
    let httpParam = new HttpParams();
    httpParam = httpParam.append('page', page)
    httpInput.params = httpParam;
    return this.httpWrapper.get(apiResources.activitiesList, httpInput).map(
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
          console.log('error in activities list api ====>>>', err);
          this.commonService.hideSpinner();
          this.toastr.error("Couldn't fetch activities list");
        }
      );
  }
}
