import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/shared/common.service';
import { StoreService } from 'src/app/shared/store.service';
import { ProductService } from 'src/app/shared/product.service';
import { SchemeService } from 'src/app/shared/scheme.service';

@Component({
  selector: 'app-create-schemes',
  templateUrl: './create-schemes.component.html',
  styleUrls: ['./create-schemes.component.css']
})
export class CreateSchemesComponent implements OnInit {
  schemeForm: FormGroup;
  formData: FormData = new FormData();
  categoryList: any;

  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    private toastr: ToastrService,
    private commonService: CommonService,
    private storeService: StoreService,
    private productService: ProductService,
    private schemeService: SchemeService
  ) { }

  ngOnInit(): void {

    this.schemeForm = this.fb.group({
      'name': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required]),
      'default_points': new FormControl('', [Validators.required]),
      'bonus_points': new FormControl('', [Validators.required]),
      'bonus_start_date': new FormControl(''),
      'bonus_end_date': new FormControl(''),
      "scheme_end_date": new FormControl("", [Validators.required]),
      'product_volume': new FormControl('', [Validators.required]),
      'category': new FormControl('', [Validators.required]),
      'scheme_image': new FormControl('', [Validators.required])
    });
    this.getCategories();

  }

  getCategories() {
    this.commonService.getCategoriesList().then(
      (res) => {
        if(res) {
          this.categoryList = res.data.data;
        }
      }
    )
  }

  get f() {
    return this.schemeForm.controls;
  }

  // getProducts() {
  //   this.productService.getAllProducts().then()
  // }

  createScheme() {
    Object.keys(this.schemeForm.value).forEach(
      (key) => {
        switch (key) {
          case "bonus_start_date":
            this.formData.set(key, (new Date(this.schemeForm.value[key]).getTime() / 1000).toString());
            break;

            case "bonus_end_date":
              this.formData.set(key, (new Date(this.schemeForm.value[key]).getTime() / 1000).toString());
            break;

            case "scheme_end_date":
              this.formData.set(key, (new Date(this.schemeForm.value[key]).getTime() / 1000).toString());
            break;
        
          default:
            if(key !== "scheme_image") {
              this.formData.set(key, this.schemeForm.value[key]);
            }
            break;
        }
        
      }
    );

    this.schemeService.createScheme(this.formData).then(
      (res) => {
        if(res) {
          this.toastr.success("Scheme created");
        }
      }
    );

  }

  selectImage(files: FileList) {
    this.schemeForm.patchValue({
      scheme_image: files[0].name
    });
    this.formData.set('scheme_image', files[0]);
  }

}
