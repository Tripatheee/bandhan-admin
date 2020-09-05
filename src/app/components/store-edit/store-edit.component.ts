import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/shared/store.service';
import { CommonService } from 'src/app/shared/common.service';
import { eventNames } from 'process';

declare var $: any;
@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.css']
})
export class StoreEditComponent implements OnInit {

  updatestoreForm: FormGroup;
  storeID: any;
  store: any;
  categoryList: any;
  storeManagers: any;
  storeEdit: boolean;

  constructor(
    public fb: FormBuilder,
    private tostr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService,
    private commonService: CommonService,
    private router: Router
  ) {

    this.updatestoreForm = this.fb.group({
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

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.storeID = params['store'];
        console.log('store id ======>>>', this.storeID);
      }
    );
  }

  ngOnInit() {
    this.storeEdit = false;
    this.getCategories();
    document.getElementById('input-storeimage').addEventListener('change', (event: any) => {
      console.log('event', event.target.files)
      this.updateStore(event.target.files, 'image');
    });
  }

  ngOnDestroy() {
  }

  get f() {
    return this.updatestoreForm.controls;
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
          this.getStore();
        }
      }
    );
  }

  getStore() {
    this.storeService.getStore(this.storeID).then(
      (res) => {
        if (res) {
          this.store = res.data;
          let category = this.categoryList.find(category => { return category.id == this.store.category_id });
          let manager = this.storeManagers.find(manager => { return manager.id == this.store.user_id })
          if (category) {
            this.store.categoryName = category.name;
          }

          if (manager) {
            this.store.storeManagerName = manager.name;
          }

          console.log('store details =====>>>>', res);
        }
      }
    )
  }

  editStore(boolValue: boolean) {
    this.storeEdit = boolValue;
    if(boolValue) {
      this.patchValueToForm();
    } else {
      this.updatestoreForm.reset();
    }
  }

  editImage(id) {
    document.getElementById(id).click();
  }

  patchValueToForm() {
    let formControls = this.updatestoreForm.value;

    Object.keys(formControls).forEach(
      (key) => {
        switch (key) {
          case 'active':
            formControls[key] = this.store['status'];
            break;

          case 'store_manager_id':
            formControls[key] = this.store['user_id'];
            break;

          case 'details':
            formControls[key] = this.store['detail'];
            break;

          default:
            formControls[key] = this.store[key];
            break;
        }

      }
    );

    this.updatestoreForm.patchValue(formControls);
  }

  async updateStore(files: any, type: string) {
    const formData = new FormData();
    if (type == 'image' && files.length) {
      await this.patchValueToForm();
      Object.keys(this.updatestoreForm.value).forEach(
        (key) => {
          if (key == 'images') {
            formData.set('images', files[0]);
          } else {
            formData.set(key, this.updatestoreForm.value[key]);
          }
        }
      )

    } else {
      Object.keys(this.updatestoreForm.value).forEach(
        (key) => {
          if (key != 'images') {
            formData.set(key, this.updatestoreForm.value[key]);
          }
        }
      )
    }
    this.storeService.updateStore(formData, this.storeID).then(
      (res) => {
        if (res) {
          this.storeEdit = false;
          this.getCategories();
        }
      }
    );
  }

  openDeleteStoreModal() {
    $('#storeDelete').modal("show");
  }

  deleteStore() {
    $('#storeDelete').modal("hide");
    this.storeService.deleteStore(this.storeID, this.store.name).then(
      (res) => {
        if (res) {
          this.router.navigate(['list-stores']);
        }
      }
    )
  }

  closeModal() {
    $('#storeDelete').modal("hide");
  }
}
