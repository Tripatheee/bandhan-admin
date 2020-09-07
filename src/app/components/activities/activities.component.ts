import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { ActivitiesService } from 'src/app/shared/activities.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activity: any = [];
  openmodal: any;
  activity_Id: any;
  pages: any = 1;
  limit: any;
  page: number;
  itemPerPage: number;
  totalActivities: number;


  constructor(
    private activitiesService: ActivitiesService,
    private tostr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.page = 1;
    this.getActivity();
  }


  pageChange(page) {
    this.page = page;
    this.getActivity();
  }

  getActivity() {
    this.activitiesService.getActivities(this.page).then(res => {
      if (res) {
        this.activity = res.data.data;
        if (res.data.meta) {
          this.limit = res.data.meta.count;
          this.page = res.data.meta.current_page;
          this.itemPerPage = res.data.meta.per_page;
          this.totalActivities = res.data.meta.total;
        }        
        console.log("this is the-=-=", this.activity)
      }
    })
  }

  viewActivity(activityID) {
    this.router.navigate(['/activity', activityID]);
  }

}
