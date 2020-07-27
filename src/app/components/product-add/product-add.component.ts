import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { DataService } from '../../shared/dataservice.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/shared/product.service';
import { NavigationExtras, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  fileToUpload: File = null;
  categoryList: any;
  formData: FormData = new FormData();
  imageSrc: string | ArrayBuffer;
  pdfUploaded: boolean;
  imageUploaded: boolean;

  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    private tostr: ToastrService,
    private productService: ProductService,
    private router: Router,
    private commonService: CommonService
  ) {
    this.productForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      sku: new FormControl('', [Validators.required]),
      active: new FormControl('', [Validators.required]),
      categories_id: new FormControl('', [Validators.required]),
      promotional_video: new FormControl('', [Validators.required])

    });

  }

  ngOnInit(): void {
    this.imageUploaded = false;
    this.pdfUploaded = false;
    this.commonService.getCategoriesList().then(
      (res) => {
        if (res) {
          console.log('response from category list ====>>>>', res);
          this.categoryList = res.data.data;
        }
      }
    );
  }

  get f() {
    return this.productForm.controls;
  }

  onFileSelect(type, files: FileList) {

    switch (type) {
      case 'pdf':
        if (files[0]) {
          const reader = new FileReader();
          reader.readAsBinaryString(files[0]);
          reader.onloadend = () => {
            const count = reader.result.toString().match(/\/Type[\s]*\/Page[^s]/g).length;
            console.log('Number of Pages:', count);
          }
        }
        this.formData.set('product_pdf', files[0]);
        this.pdfUploaded = true;
        break;

      case 'image':
        this.formData.set('images', files[0]);
        this.imageUploaded = true;
        break;

      default:
        break;
    }
    console.log('file upload', files[0].type)
  }



  addProduct() {
    Object.keys(this.productForm.value).forEach(
      (key) => {
        this.formData.set(key, this.productForm.value[key]);
      }
    );

    this.formData.set('purchase_price', '123');
    this.formData.set('sale_price', '123');
    this.formData.set('details', 'datqweqwea');
    this.formData.set('store_id', '1');
    console.log('product add payload ====>>>', this.formData);
    this.productService.addProduct(this.formData, this.productForm.value.name).then(
      (res: any) => {
        if (res) {
          console.log('response from create produt api ======>>', res);
          this.viewProduct(res.data.id);
        }
      }
    )
  }

  viewProduct(productID) {
    let extras: NavigationExtras = {
      queryParams: {
        product_id: productID
      }
    }
    this.router.navigate(['product'], extras);
  }

}
