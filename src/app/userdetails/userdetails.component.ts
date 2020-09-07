import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/dataservice.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare var $;
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user_id: any;
  userInfo: any = {};
  stores: any;
  modalForm: any;
  storeId: any;
  clubId: any;
  approveId: any;
  disapproveForm: any;
  userRole: any
  constructor(public route: ActivatedRoute, private tostr: ToastrService, private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.route.params.subscribe(params => {
      this.user_id = params.id
      console.log("this is the user id -=-=-=-=-", this.user_id)
    });
    if(this.router.getCurrentNavigation().extras.state)
    this.userRole = this.router.getCurrentNavigation().extras.state;
    else
    router.navigate(['/list-users'])
    console.log(this.userRole);
  }

  ngOnInit(): void {
    this.userDetails(this.user_id);

    //*form start here */
    this.modalForm = this.fb.group({
      'club': new FormControl('', Validators.required),
      'store': new FormControl('', Validators.required)
    })

    this.disapproveForm = this.fb.group({
      reason: new FormControl('', Validators.required)
    })

  }

  userDetails(user_id) {
    console.log("this is the userdetail function =-=-=-=-=", user_id);
    this.dataService.userDetails(this.user_id).subscribe((response) => {
      console.log("this is the response of the=-=-=-= ", response);
      if (response) {
        this.userInfo = response;
        this.getStores();
      }
    })
  }

  getStores() {
    // this.tostr.info("Loading...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    this.dataService.getStores().subscribe(res => {
      if(res && res.data && res.data.data) {
        this.stores = res.data.data;
      } else {
        alert("No stores found. Request you to go first add store and then you will be able to approve the worker.\nThanks.");
      }
      console.log("this is the stores id -=-=-=-=-=-=", this.stores);
    })
  }

  //* this is the function for the store click  */
  storeEvent($event) {
    console.log("this is the store id click by admin-=-=-=-=-", $event);
    this.storeId = $event;
  }

  //* this is the function for the club click  */
  clubEvent($event) {
    console.log("this is the store id click by admin-=-=-=-=-", $event);
    this.clubId = $event;
  }

  confirmStatus() {
    console.log("this is the next page on clicking -=-=-=-=");
    this.dataService.approvalStatus(this.storeId, this.clubId, this.user_id).subscribe((data) => {
      console.log("this is the consirmstatus data-=-=-=", data);
      if (data) {
        this.tostr.info("Store Assigned", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
        $("#myModal").modal("hide");
        this.userDetails(this.user_id)
      }
    }, (err) => {
      console.log(err);
      $("#myModal").modal("hide");
    })
  }

  disapproveConfirm() {
    if (this.disapproveForm.invalid) {
      this.tostr.info("Please enter reason...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
      return;
    }
    console.log('this.userInfo ===>>>', this.userInfo)
    this.dataService.disapproveUser(this.userInfo, 0, this.disapproveForm.value.reason).subscribe(success => {
      console.log('success ==>>', success);
      this.tostr.info(success.message, "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
      if (success.success === 1) {
        this.userDetails(this.user_id);
        $('#myDisModal').modal('hide');
      }
    }, error => {
      this.tostr.info(error.error.error.message, "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
      console.log('error ==>>', error);
    })

  }

}
