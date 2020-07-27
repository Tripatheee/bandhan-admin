import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];
  username: any;
  userId: any;
  paginationData: any = {itemPerPage: 10, total: 0, currentPage: 1};
  constructor(private dataService: DataService, private tostr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers(1);
  }

  getUsers(currentPage) {
    this.tostr.info("Loading...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
    this.dataService.getUsers(currentPage).subscribe(res => {
      this.users = res.data.data;
      this.username = res.data.data
      console.log('res ==>>', res);
      this.paginationData = {
        itemPerPage: res.data.meta.per_page,
        total: res.data.meta.total,
        currentPage: res.data.meta.current_page
      };
      console.log("this is the users -=-=-=-=", this.username)
    })
  }
  deleteUser(Id) {
    console.log("this is the delete row id-=-=--=", Id);
    this.dataService.deleteUsers(Id).subscribe((res) => {
      if (res) {
        console.log("your id is deleted-=-=-=", res);
        $("#myModal").modal("hide");
        this.getUsers(this.paginationData.currentPage);
      }
    })
  }

  gotoDetails(id) {
    console.log("this is the details page -=-=-=", id)
    this.router.navigate(['/userdetails', id]);
    console.log("this is the details page2 -=-=-=", id)
  }

  showModal(id) {
    console.log("this is the open modal", id)
    this.userId = id;
    $("#myModal").modal("show");
    // this.userId = id;
    // this.largeModal.show();
  }

  selectPage(event) {
    this.paginationData['currentPage'] = event;
    this.getUsers(this.paginationData['currentPage']);
  }

}
