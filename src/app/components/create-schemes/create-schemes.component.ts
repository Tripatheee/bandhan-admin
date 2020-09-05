import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/shared/common.service';
import { StoreService } from 'src/app/shared/store.service';
import { ProductService } from 'src/app/shared/product.service';
import { SchemeService } from 'src/app/shared/scheme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-schemes',
  templateUrl: './create-schemes.component.html',
  styleUrls: ['./create-schemes.component.css']
})
export class CreateSchemesComponent implements OnInit {
  schemeForm: FormGroup;
  formData: FormData = new FormData();
  categoryList: any;
  groupList = [
    { id: 1, name: 'Gold' },
    { id: 2, name: 'Silver' },
    { id: 3, name: 'Bronze' }
  ];
  schemeStartMinDate: Date;
  bonusMinDate: Date;
  bonusMaxDate: Date;
  schemeEndMinDate: Date;

  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    private toastr: ToastrService,
    private commonService: CommonService,
    private storeService: StoreService,
    private productService: ProductService,
    private schemeService: SchemeService,
    private router: Router
  ) {
    this.schemeForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      scheme_image: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required]),
      product_volume: new FormControl('', [Validators.required]),
      default_points: new FormControl('', [Validators.required]),
      durationType: new FormControl('1', [Validators.required]),
      bonus_points: new FormControl('', [Validators.required]),
      bonus_start_date: new FormControl('', [Validators.required]),
      bonus_end_date: new FormControl('', [Validators.required]),
      scheme_end_date: new FormControl('', [Validators.required]),
      scoring_point: new FormControl('', [Validators.required]),
      checklist_terms: new FormControl('', [Validators.required])
    });
    this.schemeForm.controls['durationType'].valueChanges.subscribe(
      (durationType) => {
        this.schemeForm.patchValue({
          bonus_start_date: '',
          scheme_end_date: '',
          bonus_end_date: ''
        });
      }
    );
    this.schemeForm.controls['bonus_start_date'].valueChanges.subscribe(
      (startDate) => {
        if (startDate && typeof startDate == 'string') {
          let monthInMiliSec = 30 * 24 * 60 * 60 * 1000;
          if (this.schemeForm.value.durationType !== 'ad-hoc') {
            let schemeStartDate = new Date(parseInt(startDate.split('-')[0]), parseInt(startDate.split('-')[1]) - 1, parseInt(startDate.split('-')[2]), 0, 0, 0, 0).getTime();
            let schemeEndDate = new Date(schemeStartDate + (monthInMiliSec * parseInt(this.schemeForm.value.durationType)));
            this.schemeForm.patchValue({
              scheme_end_date: schemeEndDate.getFullYear() + '-' +
                ((schemeEndDate.getMonth() + 1).toString().length == 1 ? ('0' + (schemeEndDate.getMonth() + 1)) : (schemeEndDate.getMonth() + 1)) + '-' +
                (schemeEndDate.getDate().toString().length == 1 ? ('0' + schemeEndDate.getDate()) : schemeEndDate.getDate()),
                bonus_end_date: ''
            });
            this.bonusMinDate = new Date(schemeStartDate);
            this.bonusMaxDate = schemeEndDate;
          }
          console.log(this.schemeForm)
        }
      }
    );
  }

  ngOnInit(): void {
    this.schemeStartMinDate = new Date();
    this.bonusMinDate = new Date();
    this.bonusMaxDate = new Date();
    this.schemeEndMinDate = new Date();
    this.getCategories();
  }

  getCategories() {
    this.commonService.getInvoiceCategoryList().then(
      (res) => {
        if (res) {
          this.categoryList = res.data;
        }
      }
    )
  }

  get f() {
    return this.schemeForm.controls;
  }

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
            if (key !== "scheme_image") {
              this.formData.set(key, this.schemeForm.value[key]);
            }
            break;
        }

      }
    );

    this.schemeService.createScheme(this.formData).then(
      (res) => {
        if (res) {
          this.toastr.success("Scheme created");
          this.router.navigate(['/list-schemes']);
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
