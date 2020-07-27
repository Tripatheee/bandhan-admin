import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiResources } from 'src/app/app.constants';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  constructor(
    private http: HttpClient
  ) { }

  private createURL(url: string, options?: HttpInputData) {
    url = apiResources.baseURL + url;
    if (options && options.uriParams) {
      url += "/";
      var index = 0;
      var length = Object.keys(options.uriParams).length
      Object.keys(options.uriParams).forEach(key => {
        url.replace("{" + key + "}", options.uriParams[key]);
        if (++index != length) {
          url += "/";
        }
      });
    }
    console.log('url ====>>>', url);
    return url;
  }

  get(url: string, options?: HttpInputData): Observable<any> {
    url = this.createURL(url, options);
    return this.http.get(url, options);
  }

  post(url: string, payload: any, options?: HttpInputData) {
    url = this.createURL(url, options);
    return this.http.post(url, payload, options);
  }

  delete(url: string, options?: HttpInputData): Observable<any> {
    url = this.createURL(url);
    return this.http.delete(url, options);
  }
}

export class HttpInputData {
  headers: HttpHeaders = null;
  uriParams: Object = null;
  params: HttpParams = null;
  authentication: boolean = false;
}