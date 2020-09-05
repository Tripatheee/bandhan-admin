import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationExtras } from '@angular/router';
import { SchemeService } from 'src/app/shared/scheme.service';

declare var  $: any;
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
  schemeName: any;
  schemeID: any;

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
        this.schemes.forEach(
          (scheme) => {
            scheme.status = new Date(scheme.scheme_end_date) < new Date() ? 'expired' : 'valid'
          }
        );
        this.page = res.data.meta.current_page;
        this.itemPerPage = res.data.meta.per_page;
        this.totalSchemes = res.data.meta.total;
      }
    });
  }
  editSchemesFunction(id) {
    let extras: NavigationExtras = {

      queryParams: {
        scheme: id
      }
    }
    this.router.navigate(['edit-schemes'], extras)
  }

  selectPage(event) {
    this.page = event;
    this.getSchemes();
    console.log(event);
  }

  openDeleteSchemeModal(schemeName, schemeID) {
    this.schemeName = schemeName;
    this.schemeID = schemeID;
    $('#schemeDelete').modal("show");
  }

  deleteScheme() {
    $('#schemeDelete').modal("hide");
    if(this.page > 1 && this.schemes.length == 1) {
      this.page -= 1;
    }
    this.schemeService.deleteProduct(this.schemeID, this.schemeName).then(
      (res) => {
        if (res) {
          this.schemeName = '';
          this.schemeID = '';
          $('#schemeDelete').modal("hide");
          this.getSchemes()
        }
      }
    )
  }

  closeModal() {
    this.schemeName = '';
          this.schemeID = '';
    $('#productDelete').modal("hide");
  }
}
