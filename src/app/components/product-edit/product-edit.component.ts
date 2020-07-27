import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  updateproductForm: FormGroup;
  productID: any;
  editProduct: boolean;
  categoryList: any;
  formData: FormData = new FormData();
  imageUploaded: boolean;
  pdfUploaded: boolean;

  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private commonService: CommonService
  ) {
    this.updateproductForm = this.fb.group({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      sku: new FormControl('', [Validators.required]),
      active: new FormControl('', [Validators.required]),
      categories_id: new FormControl('', [Validators.required]),
      promotional_video: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      pdf: new FormControl('')
    });
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.productID = params['product_id'];
        console.log('product id ======>>>', this.productID);
      }
    )

  }

  ngOnInit(): void {
    this.imageUploaded = true;
    this.pdfUploaded = true;
    this.editProduct = false;
    this.commonService.getCategoriesList().then(
      (res) => {
        if (res) {
          console.log('response from category list ====>>>>', res);
          this.categoryList = res.data.data;
          this.getProductDetails();
        }
      }
    );
  }

  getProductDetails() {
    this.productService.getProductDetails(this.productID).then(
      (res) => {
        if (res) {
          this.updateproductForm.patchValue({
            id: res.data.id,
            name: res.data.name,
            sku: res.data.sku,
            active: res.data.active,
            categories_id: res.data.categories_id,
            promotional_video: res.data.promotional_video,
            image: res.data.images,
            pdf: res.data.product_pdf
          });
          this.updateproductForm.controls['categories_id'].disable();
          this.updateproductForm.controls['active'].disable();
          console.log('product details =====>>>>', res);
        }
      }
    );
  }

  get f() {
    return this.updateproductForm.controls;
  }

  async toggleViewEditProduct() {
    this.editProduct = !this.editProduct;
    if (this.editProduct) {
      this.updateproductForm.controls['categories_id'].enable();
      this.updateproductForm.controls['active'].enable();
    } else {
      this.updateproductForm.controls['categories_id'].disable();
      this.updateproductForm.controls['active'].disable();
    }
  }



  updateProduct() {
    Object.keys(this.updateproductForm.value).forEach(
      (key) => {
        if (key !== 'image' && key !== 'pdf') {
          this.formData.append(key, this.updateproductForm.value[key]);
        }
      }
    );
    this.formData.set('purchase_price', '123');
    this.formData.set('sale_price', '123');
    this.formData.set('details', 'datqweqwea');
    this.formData.set('store_id', '1');
    console.log('product add payload ====>>>', this.formData);
    this.productService.updateProduct(this.formData, this.updateproductForm.value.id).then(
      (res) => {
        if (res) {
          this.router.navigate(['list-products']);
        }
      }
    );
  }

  onFileSelect(type, files: FileList) {
    const formData: FormData = new FormData();


    switch (type) {
      case 'pdf':
        this.formData.append('product_pdf', files[0]);
        this.pdfUploaded = true;
        break;

      case 'image':
        this.formData.append('images', files[0]);
        this.imageUploaded = true;
        // const file = files[0];

        // const reader = new FileReader();
        // reader.onload = e => this.imageSrc = reader.result;

        // reader.readAsDataURL(file)
        break;

      default:
        break;
    }
    console.log('file upload', files[0].type)

    console.log('form data ======>>>>', formData);
  }

}
