import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../shared/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SchemeService } from '../shared/scheme.service';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-edit-schemes',
  templateUrl: './edit-schemes.component.html',
  styleUrls: ['./edit-schemes.component.css']
})
export class EditSchemesComponent implements OnInit {
  schemeForm: FormGroup;
  schemes_id: any;
  schemes: any;
  schemeDetail: any;
  categoryList: any;
  groupList = [
    { id: 1, name: 'Gold' },
    { id: 2, name: 'Silver' },
    { id: 3, name: 'Bronze' }
  ];
  bonusMinDate: Date;
  bonusMaxDate: Date;
  schemeStartMinDate: Date;
  schemeEndMinDate: Date;
  schemeEdit: boolean;

  constructor(
    public fb: FormBuilder,
    private tostr: ToastrService,
    public route: ActivatedRoute,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private schemeService: SchemeService,
    private commonService: CommonService
  ) {
    this.schemeForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      scheme_image: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required]),
      product_volume: new FormControl('', [Validators.required]),
      default_points: new FormControl('', [Validators.required]),
      durationType: new FormControl('', [Validators.required]),
      bonus_points: new FormControl('', [Validators.required]),
      bonus_start_date: new FormControl('', [Validators.required]),
      bonus_end_date: new FormControl('', [Validators.required]),
      scheme_end_date: new FormControl('', [Validators.required]),
      scoring_point: new FormControl('', [Validators.required]),
      checklist_terms: new FormControl('', [Validators.required])
    });
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.schemes_id = params['scheme'];
        console.log('product id ======>>>', this.schemes_id);
      }
    );

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

  editImage(id) {
    document.getElementById(id).click();
  }

  ngOnInit(): void {
    this.schemeStartMinDate = new Date();
    this.bonusMinDate = new Date();
    this.bonusMaxDate = new Date();
    this.schemeEndMinDate = new Date();
    this.getSchemes();
  }
  getSchemes() {
    this.schemeService.getSchemeDetails(this.schemes_id).then(
      (res) => {
        if (res) {
          this.schemeDetail = res.data;
          console.log('scheme details ===>>>>', res);
          this.getCategories();
        }
      }
    );
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


  updateScheme() {
    let formValue = this.schemeForm.value;
    formValue.bonus_start_date = new Date(formValue.bonus_start_date).getTime() / 1000;
    formValue.bonus_end_date = new Date(formValue.bonus_end_date).getTime() / 1000;
    formValue.scheme_end_date = new Date(formValue.scheme_end_date).getTime() / 100;
    let data = {
      'name': this.schemes.name,
      'description': this.schemes.default_points,
      'default_points': this.schemes.default_points,
      'scheme_end_date': this.schemeForm.value.scheme_end_date,
      'scheme_id': this.schemes_id
    }

  }

  editScheme() {
    this.schemeEdit = !this.schemeEdit;
    if(this.schemeEdit) {

    } else {
      this.schemeForm.reset();
    }
  }




}
