import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/shared/product.service';
import { CommonService } from 'src/app/shared/common.service';

declare var $: any;
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  updateproductForm: FormGroup;
  productID: any;
  productEdit: boolean;
  categoryList: any;
  formData: FormData = new FormData();
  imageUploaded: boolean;
  pdfUploaded: boolean;
  product: any;

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
      details: new FormControl('', [Validators.required]),
      active: new FormControl('', [Validators.required]),
      categories_id: new FormControl('', [Validators.required]),
      promotional_video: new FormControl('', [Validators.required]),
      images: new FormControl(''),
      product_pdf: new FormControl('')
    });
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.productID = params['product'];
        console.log('product id ======>>>', this.productID);
      }
    )

  }

  ngOnInit(): void {
    this.imageUploaded = true;
    this.pdfUploaded = true;
    this.productEdit = false;
    document.getElementById('input-productimage').addEventListener('change', (event: any) => {
      console.log('event', event.target.files)
      this.updateProduct(event.target.files, 'image');
    });
    this.getCategories();
  }

  getCategories() {
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
          this.product = res.data;
          let category = this.categoryList.find(category => { return category.id == this.product.categories_id });
          if (category) {
            this.product.categoryName = category.name;
          }
          console.log('product details =======>>>>>>', this.product);
        }
      }
    );
  }

  patchValueToForm() {
    let formControls = this.updateproductForm.value;

    Object.keys(formControls).forEach(
      (key) => {
        if (key !== 'images' && key !== 'product_pdf') {
          formControls[key] = this.product[key]
        }
      }
    );
    this.updateproductForm.patchValue(formControls);
  }

  get f() {
    return this.updateproductForm.controls;
  }

  async editProduct(boolValue: boolean) {
    this.productEdit = boolValue;
    if (this.productEdit) {
      this.patchValueToForm();
    } else {
      this.updateproductForm.reset();
    }
  }



  updateProduct(files?: FileList, type?: string, ) {
    if(type == 'image' && files.length) {
      this.formData = new FormData();
      this.patchValueToForm();
      this.formData.set('images', files[0]);
      Object.keys(this.updateproductForm.value).forEach(
        (key) => {
          if (key !== 'images' && key !== 'product_pdf') {
            this.formData.set(key, this.updateproductForm.value[key]);
          }
        }
      );
    } else {
      Object.keys(this.updateproductForm.value).forEach(
        (key) => {
          if (key !== 'images' && key !== 'product_pdf') {
            this.formData.set(key, this.updateproductForm.value[key]);
          }
        }
      );
    }
    this.formData.set('purchase_price', '123');
    this.formData.set('sale_price', '123');
    this.formData.set('details', 'datqweqwea');
    this.formData.set('store_id', '1');
    console.log('product add payload ====>>>', this.formData);
    this.productService.updateProduct(this.formData, this.updateproductForm.value.id).then(
      (res) => {
        if (res) {
          // this.router.navigate(['list-products']);
          this.productEdit = false;
          this.formData = new FormData();
          this.getCategories();
        }
      }
    );
  }

  onFileSelect(type, files: FileList) {
    const formData: FormData = new FormData();


    switch (type) {
      case 'pdf':
        this.formData = new FormData();
        this.formData.set('product_pdf', files[0]);
        this.pdfUploaded = true;
        break;

      default:
        break;
    }
    console.log('file upload', files[0].type)

    console.log('form data ======>>>>', formData);
  }

  editImage(id) {
    document.getElementById(id).click();
  }

  openDeleteProductModal() {
    $('#product-Delete').modal("show");
  }

  deleteProduct() {
    $('#product-Delete').modal("hide");
    this.productService.deleteProduct(this.productID, this.product.name).then(
      (res) => {
        if (res) {
          this.router.navigate(['list-products']);
        }
      }
    )
  }

  closeModal() {
    $('#product-Delete').modal("hide");
  }

}
