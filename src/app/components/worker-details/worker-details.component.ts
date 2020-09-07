import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';

declare var $: any;
@Component({
  selector: 'worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.css']
})
export class WorkerDetailsComponent {
  @Input() workerDetail: any;
  @Input() stores: any;
  @Output() loadUserDetail = new EventEmitter()
  collapseID: any;
  display: string;
  alt: any;
  src: any;
  storeId: any;
  clubId: any;
  modalForm: any;
  disapproveForm: any;
  rewardPoint: any;
  amount: any;

  constructor(
    private dataService: DataService,
    private tostr: ToastrService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
        //*form start here */
        this.modalForm = new FormGroup({
          'club': new FormControl('', Validators.required),
          'store': new FormControl('', Validators.required)
        })
    
        this.disapproveForm = new FormGroup({
          reason: new FormControl('', Validators.required)
        })
  }

  collapseAccordion(collapseID) {
    $(`#${collapseID}`).collapse('toggle');
    let classname = document.getElementById(`${collapseID}Icon`).className;
    if (classname == 'fa fa-angle-down') {
      document.getElementById(`${collapseID}Icon`).removeAttribute('class');
      document.getElementById(`${collapseID}Icon`).setAttribute('class', 'fa fa-angle-up')
    } else if (classname == 'fa fa-angle-up') {
      document.getElementById(`${collapseID}Icon`).removeAttribute('class');
      document.getElementById(`${collapseID}Icon`).setAttribute('class', 'fa fa-angle-down')
    }
  }

  openImagerViewer(event) {
    this.alt = event.srcElement.alt;
    this.src = event.srcElement.currentSrc;
    this.display = 'block';
    console.log(event);
  }

  onDisplayNone() {
    this.display = 'none';
    this.alt = '';
    this.src = '';
  }

  // getStores() {
  //   // this.tostr.info("Loading...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
  //   this.dataService.getStores().subscribe(res => {
  //     if(res && res.data && res.data.data) {
  //       this.stores = res.data.data;
  //     } else {
  //       alert("No stores found. Request you to go first add store and then you will be able to approve the worker.\nThanks.");
  //     }
  //     console.log("this is the stores id -=-=-=-=-=-=", this.stores);
  //   })
  // }

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

  userDetails(user_id) {
    console.log("this is the userdetail function =-=-=-=-=", user_id);
    this.dataService.userDetails(this.workerDetail.data.id).subscribe((response) => {
      console.log("this is the response of the=-=-=-= ", response);
      if (response) {
        this.workerDetail = response;
      }
    })
  }

  confirmStatus() {
    console.log("this is the next page on clicking -=-=-=-=");
    this.dataService.approvalStatus(this.storeId, this.clubId, this.workerDetail.data.id).subscribe((data) => {
      console.log("this is the consirmstatus data-=-=-=", data);
      if (data) {
        this.tostr.info("Store Assigned", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
        $("#myModal").modal("hide");
        this.userDetails(this.workerDetail.data.id)
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
    console.log('this.userInfo ===>>>', this.workerDetail)
    this.dataService.disapproveUser(this.workerDetail, 0, this.disapproveForm.value.reason).subscribe(success => {
      console.log('success ==>>', success);
      this.tostr.info(success.message, "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
      if (success.success === 1) {
        this.userDetails(this.workerDetail.data.id);
        $('#myDisModal').modal('hide');
      }
    }, error => {
      this.tostr.info(error.error.error.message, "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
      console.log('error ==>>', error);
    })

  }


  giveRewardToWorker() {
    if(!this.rewardPoint) {
      this.tostr.error('Please enter rewarding point.');
      return;
    } else if (!this.amount) {
      this.tostr.error('Please enter amount.');
      return;
    } else if (!this.workerDetail.store_id) {
      // this.tostr.error('Store not found!');
      // return;
    }
    let payload = {
      user_id: this.workerDetail.data.id,
      reward_point: this.rewardPoint,
      store_id: '24',
      amount: this.amount,
    };
    this.dataService.giveRewardToWorker(payload).then(
      (res) => {
        if(res) {
          $('#rewardWorker').modal('hide');
          this.loadUserDetail.emit();
        }
      }
    )
  }
}
