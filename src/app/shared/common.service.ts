import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Spinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { apiResources } from '../app.constants';
import { HttpWrapperService } from './http/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private httpWrapper: HttpWrapperService
  ) { }

  showSpinner() {
    this.spinner.show();
  }

  hideSpinner() {
    this.spinner.hide();
  }

  getCategoriesList() {
    this.showSpinner();
    return this.httpWrapper.get(apiResources.categoriesList).map(
      (res) => {
        this.hideSpinner();
        if (res) {
          return res;
        }
      }
    ).toPromise()
      .catch(
        (err) => {
          this.hideSpinner();
          this.toastr.error('Cannot get Categories list')
          console.log('category list api error =====>>', err)
        }
      );
  }


}

