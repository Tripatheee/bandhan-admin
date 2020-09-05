import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { CommonService } from 'src/app/shared/common.service';
import { StoreService } from 'src/app/shared/store.service';
import { ToastrService } from 'ngx-toastr';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent implements OnInit {
  storeForm: FormGroup;
  categories: any = [];
  formData: FormData = new FormData();
  storeManagers: any;

  constructor(
    public fb: FormBuilder,
    private commonService: CommonService,
    private storeService: StoreService,
    private toastr: ToastrService,
    private router: Router
  ) {

    this.storeForm = this.fb.group({
      images: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      store_manager_id: new FormControl('', [Validators.required]),
      category_id: new FormControl('', [Validators.required]),
      details: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      active: new FormControl('', [Validators.required])
    });

  }

  ngOnInit() {
    this.getCategories();
  }
  ngOnDestroy() {
  }

  get f() {
    return this.storeForm.controls;
  }
  getCategories() {
    this.commonService.getCategoriesList().then(
      (res) => {
        if (res.success) {
          this.categories = res.data.data;
          this.getStoreManagerList()
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
        }
      }
    );
  }

  selectImage(files: FileList) {
    this.storeForm.patchValue({
      images: files[0].name
    });
    this.formData.set('images', files[0]);
  }



  addStore() {
    Object.keys(this.storeForm.value).forEach(
      (data) => {
        if (data !== 'images') {
          this.formData.set(data, this.storeForm.value[data]);
        }
      }
    )
    this.storeService.addStore(this.formData).then(
      (res: any) => {
        if (res.success) {
          this.toastr.success('Store has been successfully created');
          this.viewStore(res.data.id);
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
