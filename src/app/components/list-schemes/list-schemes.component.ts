import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SchemeService } from 'src/app/shared/scheme.service';
@Component({
  selector: 'app-list-schemes',
  templateUrl: './list-schemes.component.html',
  styleUrls: ['./list-schemes.component.css']
})
export class ListSchemesComponent implements OnInit {
  schemes: any = [];
  page: number;
  itemPerPage: any = 0;
  totalSchemes: any = 0;

  constructor(
    private tostr: ToastrService,
    public router: Router,
    private schemeService: SchemeService
    ) { }

  ngOnInit(): void {
    this.page = 1;
    this.getSchemes();
  }



  getSchemes() {
    this.schemeService.getSchemeList(this.page).then(res => {
      if (res) {
        this.schemes = res.data.data;
          this.page = res.data.current_page;
          this.itemPerPage = res.data.per_page;
          this.totalSchemes = res.data.total;
      }
    });
  }
  editSchemesFunction(id) {
    this.router.navigate(['edit-schemes/' + id])
  }

  selectPage(event) {
    this.page = event;
    this.getSchemes();
    console.log(event);
  }
}
