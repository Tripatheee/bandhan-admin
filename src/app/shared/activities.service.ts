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

  getActivityDetails(activityID: string) {
    this.commonService.showSpinner();
    return this.httpWrapper.get(apiResources.activityDetail.replace('activityID', activityID),).map(
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
          console.log('error in activities detail api ====>>>', err);
          this.commonService.hideSpinner();
          this.toastr.error("Couldn't fetch activities detail");
        }
      );
  }

  approveActivity(payload) {
    this.commonService.showSpinner();
    return this.httpWrapper.post(apiResources.approveActivity, payload,).map(
      (res: any) => {
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
          console.log('error in activities approve api ====>>>', err);
          this.commonService.hideSpinner();
          this.toastr.error("Couldn't fetch activities approve");
        }
      );
  } 
}
