import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from 'src/app/shared/activities.service';
import { CommonService } from 'src/app/shared/common.service';
import { SchemeService } from 'src/app/shared/scheme.service';
import { ToastrService } from 'ngx-toastr';

declare var $: any;
@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {
  activityDetail: any;
  schemes: any;
  selectedScheme: string;
  activityID: any;
  display: string;
  alt: string;
  src: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private activityService: ActivitiesService,
    private commonService: CommonService,
    private schemeService: SchemeService,
    private toastr: ToastrService
  ) { 
    this.activatedRoute.params.subscribe(
      (res) => {
        if(res && res.id) {
          this.activityID = res.id
          this.getActivity(res.id);
        }
      }
    )
  }

  ngOnInit(): void {
  }

  getActivity(activityID) {
    this.activityService.getActivityDetails(activityID).then(
      (res) => {
        if(res) {
          this.activityDetail = res.data;
          this.commonService.getInvoiceCategoryList().then(
            (invoice) => {
              if(invoice) {
                this.activityDetail.categoryName = (invoice.data.find((data) => {return data.id == this.activityDetail?.category})).name;
                this.getScheme();
              }
            }
          )
        }
      }
    );
  }

  getScheme() {
    this.schemeService.getSchemeList(1).then(
      (res) => {
        if(res) {
          if(res && res.data && res.data.data) {
            this.schemes = res.data.data;
          }
        }
      }
    )
  }

  approveActivity() {
    if(!this.selectedScheme) {
      this.toastr.error("Please select scheme.")
      return;
    }
    let payload = {
      "activity_id": this.activityDetail.id,
      "status_id": 1,
      "scheme_id": this.selectedScheme
    }
    this.activityService.approveActivity(payload).then(
      (res) => {
        if(res) {
          this.toastr.success('Activity Approved!');
          this.getActivity(this.activityID);
          $('#approveActivity').modal("hide")
        }
      }
    )
  }

  disApproveActivity() {
    let payload = {
      "activity_id": this.activityDetail.id,
      "status_id": 0,
      "scheme_id": ''
    }
    this.activityService.approveActivity(payload).then(
      (res) => {
        if(res) {
          this.toastr.success('Activity Disapproved!');
          this.getActivity(this.activityID);
          $('#disapproveActivity').modal("hide")
        }
      }
    )
  }

  onDisplayNone() {
    this.display = 'none';
    this.alt = '';
    this.src = '';
  }

  openImagerViewer(event) {
    this.alt = event.srcElement.alt;
    this.src = event.srcElement.currentSrc;
    this.display = 'block';
    console.log(event);
  }

}
