import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { StoreService } from 'src/app/shared/store.service';
import { ProductService } from 'src/app/shared/product.service';
import { CommonService } from 'src/app/shared/common.service';
import { NavigationExtras, Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  stores: any = [];
  page: number;
  itemPerPage: any = 0;
  totalStores: any = 0;
  moreStores: boolean;
  storeManagers: any;
  categoryList: any;
  storeName: string;
  storeID: string;

  constructor(
    private tostr: ToastrService,
    private storeService: StoreService,
    private product: ProductService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.page = 1;
    this.getCategories();
  }

  getCategories() {
    this.commonService.getCategoriesList().then(
      (res) => {
        if (res) {
          console.log('response from category list ====>>>>', res);
          this.categoryList = res.data.data;
          this.getStoreManagerList();
        }
      }
    );
  }

  getStoreManagerList() {
    this.storeService.getStoreManagerList().then(
      (res) => {
        if (res.success) {
          console.log(res);
          this.storeManagers = res.data.data;
          this.getStores();
        }
      }
    );
  }

  getStores() {
    this.storeService.getStoreList(this.page).then(res => {
      if (res) {
        this.stores = res.data.data;
        this.stores.forEach(
          (data) => {
            let category = this.categoryList.find(category => { return category.id == data.category_id });
            let manager = this.storeManagers.find(manager => { return manager.id == data.user_id })
            if (category) {
              data.categoryName = category.name;
            }

            if (manager) {
              data.storeManagerName = manager.name;
            }

          }
        )
        console.log('stores =======>>>', this.stores);
        if (res.data.meta) {
          this.page = res.data.meta.current_page;
          this.itemPerPage = res.data.meta.per_page;
          this.totalStores = res.data.meta.total;
          this.moreStores = res.data.meta.has_more_pages;
        }
      }
    });
  }

  selectPage(event) {
    this.page = event;
    this.getStores();
    console.log(event);
  }

  closeModal() {
    this.storeName = '';
    this.storeID = '';
    $('#storeDelete').modal("hide");
  }

  openDeleteStoreModal(storeName, storeID) {
    this.storeName = storeName;
    this.storeID = storeID;
    $('#storeDelete').modal("show");
  }

  deleteStore() {
    $('#storeDelete').modal("hide");
    if(this.page > 1 && this.stores.length == 1) {
      this.page -= 1;
    }
    this.storeService.deleteStore(this.storeID, this.storeName).then(
      (res) => {
        if (res) {
          this.storeName = '';
          this.storeID = '';
          this.getStores()
        }
      }
    )
  }

  viewStore(storeID) {
    let extras: NavigationExtras = {
      queryParams: {
        store: storeID
      }
    }
    this.router.navigate(['store'], extras);
  }

}
