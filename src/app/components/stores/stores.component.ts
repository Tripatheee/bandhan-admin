import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { StoreService } from 'src/app/shared/store.service';
import { ProductService } from 'src/app/shared/product.service';

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

  constructor(
    private tostr: ToastrService,
    private storeService: StoreService,
    private product: ProductService
  ) { }

  ngOnInit(): void {
    this.page = 1;
    this.getStores();
  }

  getStores() {
    this.storeService.getStoreList(this.page).then(res => {
      if (res) {
        this.stores = res.data.data;
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

}
