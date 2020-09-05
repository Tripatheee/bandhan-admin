(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\n    <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-schemes/create-schemes.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-schemes/create-schemes.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\"\n    style=\"min-height: 70px; background-image: url(assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;\">\n    <!-- Mask -->\n    <span class=\"mask bg-gradient-danger opacity-8\"></span>\n</div>\n<div class=\"container-fluid mt--4\">\n    <div class=\"row\">\n        <div class=\"col-xl-12 order-xl-1\">\n            <div class=\"card bg-secondary shadow\">\n                <div class=\"card-header bg-white border-0\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-8\">\n                            <h3 class=\"mb-0\">Create Schemes</h3>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n\n                    <form class=\"form-signin\" [formGroup]=\"schemeForm\">\n                        <div class=\"pl-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-username\">Name</label>\n                                        <input type=\"text\" id=\"input-username\" formControlName=\"name\" required\n                                            class=\"form-control form-control-alternative\" placeholder=\"Name\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">Description</label>\n                                        <input type=\"text\" formControlName=\"description\" id=\"input-email\"\n                                            placeholder=\"Enter Description\" required\n                                            class=\"form-control form-control-alternative\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-scheme-image\">Scheme\n                                            Image</label>\n                                        <input type=\"file\" id=\"input-scheme-image\" required\n                                            class=\"form-control form-control-alternative\"\n                                            accept=\"image/png, image/jpeg, image/jpg\"\n                                            (change)=\"selectImage($event.target.files)\" placeholder=\"Scheme image\">\n                                        <!-- <img [src]=\"imageSrc\" width=\"400\" height=\"400\"> -->\n                                        <!-- <div *ngIf=\"f.images.touched &&  f.images.invalid\" class=\"alert alert-danger\">\n                                      <div *ngIf=\"f.images.errors.required\">Scheme image is required.</div>\n                                    </div> -->\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-status\">Scheme Category</label>\n                                        <select required placeholder=\"Select Scheme Category...\"\n                                            formControlName=\"category\" class=\"form-control form-control-alternative\">\n                                            <option value=\"0\" disabled selected> Select Scheme Category... </option>\n                                            <option *ngFor=\"let category of categoryList\" [value]=\"category?.id\">\n                                                {{category?.name}} </option>\n                                        </select>\n                                        <div *ngIf=\"f.category.touched &&  f.category.invalid\"\n                                            class=\"alert alert-danger\">\n                                            <div *ngIf=\"f.category.errors.required\">Select Scheme Category</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-status\">Scheme Group</label>\n                                        <select required placeholder=\"Select Scheme Group...\" formControlName=\"group\"\n                                            class=\"form-control form-control-alternative\">\n                                            <option value=\"0\" disabled selected> Select Scheme Group... </option>\n                                            <option *ngFor=\"let group of groupList\" [value]=\"group?.id\">\n                                                {{group?.name}} </option>\n                                        </select>\n                                        <div *ngIf=\"f.group.touched &&  f.group.invalid\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"f.group.errors.required\">Select Scheme group</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">Product Volume</label>\n                                        <input type=\"text\" formControlName=\"product_volume\" id=\"input-email\"\n                                            placeholder=\"Enter Description\" required\n                                            class=\"form-control form-control-alternative\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">Target Points</label>\n                                        <input type=\"text\" formControlName=\"default_points\" id=\"input-email\"\n                                            placeholder=\"Enter Points\" required\n                                            class=\"form-control form-control-alternative\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">Bonus Points</label>\n                                        <input type=\"text\" formControlName=\"bonus_points\" id=\"input-email\"\n                                            placeholder=\"Enter Points\" required\n                                            class=\"form-control form-control-alternative\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">Scoring Points</label>\n                                        <input type=\"text\" formControlName=\"scoring_point\" id=\"input-email\"\n                                            placeholder=\"Enter Points\" required\n                                            class=\"form-control form-control-alternative\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label \" for=\"input-username\">Scheme Duration\n                                            Type</label>\n                                        <div>\n                                            <label class=\"duration-type\"><input type=\"radio\"\n                                                    formControlName=\"durationType\" class=\"duration-radio\" value=\"ad-hoc\"\n                                                    name=\"durationType\" checked>Ad-Hoc/Period</label>\n                                            <label class=\"duration-type\"><input type=\"radio\"\n                                                    formControlName=\"durationType\" class=\"duration-radio\"\n                                                    value=\"1\" name=\"durationType\" checked>Monthly</label>\n                                            <label class=\"duration-type\"><input type=\"radio\"\n                                                    formControlName=\"durationType\" class=\"duration-radio\"\n                                                    value=\"3\" name=\"durationType\">Quarterly</label>\n                                            <label class=\"duration-type\"><input type=\"radio\"\n                                                    formControlName=\"durationType\" class=\"duration-radio\"\n                                                    value=\"6\" name=\"durationType\">Half Yearly</label>\n                                            <label class=\"duration-type\"><input type=\"radio\"\n                                                    formControlName=\"durationType\" class=\"duration-radio\" value=\"12\"\n                                                    name=\"durationType\">Yearly</label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label \" for=\"input-username\">Scheme Start\n                                            Date</label>\n                                        <input type=\"date\" formControlName=\"bonus_start_date\" id=\"input-date\"\n                                            placeholder=\"Enter Bonus Start Date\" min=\"{{schemeStartMinDate |date: 'yyyy-MM-dd'}}\" required\n                                            class=\"form-control form-control-alternative\">\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\" [hidden]=\"schemeForm?.value?.durationType !== 'ad-hoc'\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label \" for=\"input-username\">Scheme End\n                                            Date</label>\n                                        <input class=\"form-control form-control-alternative\" type=\"date\" min=\"{{schemeEndMinDate |date: 'yyyy-MM-dd'}}\"\n                                            formControlName=\"scheme_end_date\" data-date-inline-picker=\"false\"\n                                            data-date-open-on-focus=\"true\" />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\" [hidden]=\"(!schemeForm?.value?.bonus_start_date) || (!schemeForm?.value?.scheme_end_date)\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label \" for=\"input-username\">Bonus End\n                                            Date</label>\n                                        <input class=\"form-control form-control-alternative\" min=\"{{bonusMinDate |date: 'yyyy-MM-dd'}}\" type=\"date\"  max=\"{{bonusMaxDate |date: 'yyyy-MM-dd'}}\" type=\"date\"\n                                            formControlName=\"bonus_end_date\" data-date-inline-picker=\"false\"\n                                            data-date-open-on-focus=\"true\" />\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label \" for=\"input-username\">CheckList and Terms\n                                        </label>\n                                        <textarea class=\"form-control form-control-alternative\"\n                                            formControlName=\"checklist_terms\" rows=\"5\"> </textarea>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <button (click)=\"createScheme()\" class=\"btn btn-primary my-4\">Create\n                                            Schemes</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <footer class=\"footer\">\n  <div class=\"row align-items-center justify-content-xl-between\">\n    <div class=\"col-xl-6\">\n      <div class=\"copyright text-center text-xl-left text-muted\">\n        &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n        <li class=\"nav-item\">\n          <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"http://blog.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-schemes/list-schemes.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-schemes/list-schemes.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <!-- Card stats -->\n\n        </div>\n    </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"card shadow\">\n                <div class=\"card-header border-0\">\n                    <h3 class=\"mb-0\">List Schemes</h3>\n                </div>\n                <div class=\"table-responsive\">\n                    <table class=\"table align-items-center table-flush\">\n                        <thead class=\"thead-light\">\n                            <tr>\n\n                                <th scope=\"col\">S.N.</th>\n                                <th scope=\"col\">Name</th>\n                                <th scope=\"col\">Product Volume</th>\n                                <th scope=\"col\">Target Points</th>                                \n                                <th scope=\"col\">Start Date</th>\n                                <th scope=\"col\">End Date</th>\n                                <th scope=\"col\">Status</th>\n                                <th scope=\"col\">View</th>\n                                <th scope=\"col\">Delete</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr [hidden]=\"schemes?.length\">\n                                <th colspan=\"10\">\n                                    <h3 class=\"text-danger text-center\">No Schemes found</h3>\n                                </th>\n                            </tr>\n                            <tr *ngFor=\"let scheme of schemes | paginate: {\n                                id: 'schemeList',\n                                itemsPerPage: itemPerPage,\n                                currentPage: page,\n                                totalItems: totalSchemes }; let i = index;\">\n                                <th scope=\"row\">\n                                    {{ itemPerPage * (page - 1) + i + 1 }}\n                                </th>\n                                <td>\n                                    {{scheme.name}}\n                                </td>\n                                <td>\n                                    {{scheme.product_volume}}\n                                </td>\n                                <td>\n                                    {{scheme.default_points}}\n                                </td>\n                                <td>\n                                    {{scheme.bonus_start_date | date: \"dd/MM/yyyy\"}}\n                                </td>\n                                <td>\n                                    {{scheme.scheme_end_date | date: \"dd/MM/yyyy\"}}\n                                </td>\n                                <td [style.color]=\"scheme.status == 'expired' ? 'red' : 'green'\">\n                                    {{scheme.status |uppercase}}\n                                </td>\n                                <td>\n                                    <button class=\"view-icon-only-btn\" (click)=\"editSchemesFunction(scheme.id)\"><i\n                                            class=\"fas fa-eye\"></i></button>\n                                </td>\n                                <td>\n                                    <button class=\"delete-icon-only-btn\" (click)=\"openDeleteSchemeModal(scheme.name, scheme.id)\"><i class=\"fas fa-trash\"></i></button>\n                                </td>\n                            </tr>\n\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"txt-align-right\">\n                    <pagination-controls id=\"schemeList\" (pageChange)=\"selectPage($event)\"></pagination-controls>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <!-- Dark table -->\n  <!-- The Modal -->\n  <div class=\"modal fade\" role=\"dialog\" id=\"schemeDelete\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4>Delete Scheme!</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <p class=\"modalText\">Are you sure you want to delete <strong>{{schemeName}}</strong>?</p>\n        </div>\n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-outline-success\" (click)=\"deleteScheme()\">Yes</button>\n          <button class=\"btn btn-outline-danger\" (click)=\"closeModal()\">No</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-top navbar-expand-md navbar-dark\" id=\"navbar-main\">\n  <div class=\"container-fluid\">\n    <!-- Brand -->\n    <a class=\"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block\" routerLinkActive=\"active\"\n      [routerLink]=\"['/dashboard']\">{{getTitle()}}</a>\n    <!-- Form -->\n    <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n      <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n        <div class=\"input-group input-group-alternative\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n          </div>\n          <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\" (blur)=\"focus = false\">\n        </div>\n      </div>\n    </form>\n    <!-- User -->\n    <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link pr-0\" role=\"button\" ngbDropdownToggle>\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" src=\"assets/img/theme/team-4-800x800.jpg\">\n            </span>\n            <div class=\"media-body ml-2 d-none d-lg-block\">\n              <span class=\"mb-0 text-sm  font-weight-bold\">{{userName}}</span>\n            </div>\n          </div>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <button (click)=\"logout()\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span (click)=\"logout()\">Logout</span>\n          </button>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-vertical navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\n  <div class=\"container-fluid\">\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n       aria-controls=\"sidenav-collapse-main\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Brand -->\n    <a class=\"navbar-brand pt-0\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n      <img src=\"./assets/img/brand/red.png\" class=\"navbar-brand-img logo-brand\" alt=\"...\">\n    </a>\n    <!-- User -->\n    <ul class=\"nav align-items-center d-md-none\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link nav-link-icon\" role=\"button\" ngbDropdownToggle>\n          <i class=\"ni ni-bell-55\"></i>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link\" role=\"button\" ngbDropdownToggle>\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" src=\"./assets/img/theme/team-1-800x800.jpg\">\n            </span>\n          </div>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <button (click)=\"logout()\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span  (click)=\"logout()\">Logout</span>\n          </button>\n        </div>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a  routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <img src=\"./assets/img/brand/blue.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-4 mb-3 d-md-none\">\n        <div class=\"input-group input-group-rounded input-group-merge\">\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\" aria-label=\"Search\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <span class=\"fa fa-search\"></span>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- Navigation -->\n      <ul class=\"navbar-nav\">\n          <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <h6 *ngIf=\"menuItem.isHeader\" class=\"navbar-heading  sidebar-header text-muted\">\n              <i class=\"ni {{menuItem.icon}}\"></i> {{menuItem.title}}</h6>\n\n              <a *ngIf=\"!menuItem.isHeader\" routerLinkActive=\"active\" [routerLink]=\"[menuItem.path]\" class=\"nav-link\">\n                  <i class=\"ni {{menuItem.icon}}\"></i>\n                  {{menuItem.title}}\n              </a>\n          </li>\n      </ul>\n      <!-- Divider -->\n      <hr class=\"my-3\">\n      <!-- Heading -->\n    \n      <!-- Navigation -->\n    <!--   <ul class=\"navbar-nav mb-md-3\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/tutorial\">\n            <i class=\"ni ni-spaceship\"></i> Getting started\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/colors\">\n            <i class=\"ni ni-palette\"></i> Foundation\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/alerts\">\n            <i class=\"ni ni-ui-04\"></i> Components\n          </a>\n        </li>\n      </ul> -->\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-schemes/edit-schemes.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-schemes/edit-schemes.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\"\n    style=\"min-height: 70px; background-image: url(assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;\">\n    <!-- Mask -->\n    <span class=\"mask bg-gradient-danger opacity-8\"></span>\n</div>\n<div class=\"container-fluid mt--4\">\n    <div class=\"row\">\n        <div class=\"col-xl-12 order-xl-1\">\n            <div class=\"card bg-secondary shadow\">\n                <div class=\"card-header bg-white border-0\">\n                    <div class=\"row align-items-center\">\n                        <div class=\"col-8\">\n                            <h3 class=\"mb-0\">Scheme Details</h3>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n\n                    <form class=\"form-signin\" [formGroup]=\"schemeForm\">\n                        <div class=\"pl-lg-4\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group image-wrap\">\n                                        <label class=\"form-control-label\" for=\"input-schemeimage\">Scheme Image</label>\n                                        <input type=\"file\" hidden id=\"input-schemeimage\"\n                                            class=\"form-control form-control-alternative\" placeholder=\"Name\" required\n                                            accept=\"image/jpg, image/jpeg, image/png\">\n                                        <div class=\"image-container\">\n                                            <img [src]=\"schemeDetail?.scheme_image\"\n                                                [hidden]=\"!schemeDetail?.scheme_image\" class=\"img-rounded image\"\n                                                alt=\"scheme Image\">\n                                            <img [src]=\"'assets/img/brand/argon-white.png'\"\n                                                [hidden]=\"schemeDetail?.scheme_image\" class=\"img-rounded image\"\n                                                alt=\"scheme Image\">\n                                            <a (click)=\"editImage('input-schemeimage')\"><i class=\"fas fa-edit\"></i>\n                                                Change Image</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-username\">Name</label>\n                                        <input type=\"text\" id=\"input-username\" [hidden]=\"!schemeEdit\"\n                                            formControlName=\"name\" required\n                                            class=\"form-control form-control-alternative\" placeholder=\"Name\">\n                                        <label [hidden]=\"schemeEdit\"\n                                            class=\"form-control form-control-alternative\">{{schemeDetail?.name}}</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">Description</label>\n                                        <input type=\"text\" formControlName=\"description\" [hidden]=\"!schemeEdit\"\n                                            id=\"input-email\" placeholder=\"Enter Description\" required\n                                            class=\"form-control form-control-alternative\">\n                                        <label [hidden]=\"schemeEdit\"\n                                            class=\"form-control form-control-alternative\">{{schemeDetail?.description}}</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-status\">Scheme Category</label>\n                                        <select required placeholder=\"Select Scheme Category...\" [hidden]=\"!schemeEdit\"\n                                            formControlName=\"category\" class=\"form-control form-control-alternative\">\n                                            <option value=\"0\" disabled selected> Select Scheme Category... </option>\n                                            <option *ngFor=\"let category of categoryList\" [value]=\"category?.id\">\n                                                {{category?.name}} </option>\n                                        </select>\n                                        <label [hidden]=\"schemeEdit\"\n                                            class=\"form-control form-control-alternative\">{{schemeDetail?.category}}</label>\n                                        <div *ngIf=\"f.category.touched &&  f.category.invalid\"\n                                            class=\"alert alert-danger\">\n                                            <div *ngIf=\"f.category.errors.required\">Select Scheme Category</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-status\">Scheme Group</label>\n                                        <select required placeholder=\"Select Scheme Group...\" formControlName=\"group\"\n                                            [hidden]=\"!schemeEdit\" class=\"form-control form-control-alternative\">\n                                            <option value=\"0\" disabled selected> Select Scheme Group... </option>\n                                            <option *ngFor=\"let group of groupList\" [value]=\"group?.id\">\n                                                {{group?.name}} </option>\n                                        </select>\n                                        <label [hidden]=\"schemeEdit\"\n                                            class=\"form-control form-control-alternative\">{{schemeDetail?.group}}</label>\n                                        <div *ngIf=\"f.group.touched &&  f.group.invalid\" class=\"alert alert-danger\">\n                                            <div *ngIf=\"f.group.errors.required\">Select Scheme group</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">Product Volume</label>\n                                        <input type=\"text\" formControlName=\"product_volume\" id=\"input-email\"\n                                            placeholder=\"Enter Description\" required [hidden]=\"!schemeEdit\"\n                                            class=\"form-control form-control-alternative\">\n                                        <label [hidden]=\"schemeEdit\"\n                                            class=\"form-control form-control-alternative\">{{schemeDetail?.product_volume}}</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">Target Points</label>\n                                        <input type=\"text\" formControlName=\"default_points\" id=\"input-email\"\n                                            placeholder=\"Enter Points\" required [hidden]=\"!schemeEdit\"\n                                            class=\"form-control form-control-alternative\">\n                                        <label [hidden]=\"schemeEdit\"\n                                            class=\"form-control form-control-alternative\">{{schemeDetail?.default_points}}</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">Bonus Points</label>\n                                        <input type=\"text\" formControlName=\"bonus_points\" id=\"input-email\"\n                                            placeholder=\"Enter Points\" required [hidden]=\"!schemeEdit\"\n                                            class=\"form-control form-control-alternative\">\n                                        <label [hidden]=\"schemeEdit\"\n                                            class=\"form-control form-control-alternative\">{{schemeDetail?.bonus_points}}</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\" for=\"input-email\">Scoring Points</label>\n                                        <input type=\"text\" formControlName=\"scoring_point\" id=\"input-email\"\n                                            placeholder=\"Enter Points\" required [hidden]=\"!schemeEdit\"\n                                            class=\"form-control form-control-alternative\">\n                                        <label [hidden]=\"schemeEdit\"\n                                            class=\"form-control form-control-alternative\">{{schemeDetail?.scoring_point}}</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\" [hidden]=\"!schemeEdit\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label \" for=\"input-username\">Scheme Duration\n                                            Type</label>\n                                        <div>\n                                            <label class=\"duration-type\"><input type=\"radio\"\n                                                    formControlName=\"durationType\" class=\"duration-radio\" value=\"ad-hoc\"\n                                                    name=\"durationType\" checked>Ad-Hoc/Period</label>\n                                            <label class=\"duration-type\"><input type=\"radio\"\n                                                    formControlName=\"durationType\" class=\"duration-radio\" value=\"1\"\n                                                    name=\"durationType\" checked>Monthly</label>\n                                            <label class=\"duration-type\"><input type=\"radio\"\n                                                    formControlName=\"durationType\" class=\"duration-radio\" value=\"3\"\n                                                    name=\"durationType\">Quarterly</label>\n                                            <label class=\"duration-type\"><input type=\"radio\"\n                                                    formControlName=\"durationType\" class=\"duration-radio\" value=\"6\"\n                                                    name=\"durationType\">Half Yearly</label>\n                                            <label class=\"duration-type\"><input type=\"radio\"\n                                                    formControlName=\"durationType\" class=\"duration-radio\" value=\"12\"\n                                                    name=\"durationType\">Yearly</label>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label \" for=\"input-username\">Scheme Start\n                                            Date</label>\n                                        <input type=\"date\" formControlName=\"bonus_start_date\" id=\"input-date\"\n                                            placeholder=\"Enter Bonus Start Date\" [hidden]=\"!schemeEdit\"\n                                            min=\"{{schemeStartMinDate |date: 'yyyy-MM-dd'}}\" required\n                                            class=\"form-control form-control-alternative\">\n                                        <label [hidden]=\"schemeEdit\"\n                                            class=\"form-control form-control-alternative\">{{schemeDetail?.bonus_start_date | date: \"dd MMM yyyy\"}}</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\" [hidden]=\"(schemeForm?.value?.durationType && schemeForm?.value?.durationType !== 'ad-hoc')\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label \" for=\"input-username\">Scheme End\n                                            Date</label>\n                                        <input class=\"form-control form-control-alternative\" type=\"date\"\n                                            min=\"{{schemeEndMinDate |date: 'yyyy-MM-dd'}}\" [hidden]=\"!schemeEdit\"\n                                            formControlName=\"scheme_end_date\" data-date-inline-picker=\"false\"\n                                            data-date-open-on-focus=\"true\" />\n                                        <label [hidden]=\"schemeEdit\"\n                                            class=\"form-control form-control-alternative\">{{schemeDetail?.scheme_end_date | date: \"dd MMM yyyy\"}}</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\"\n                                [hidden]=\"(!schemeDetail?.bonus_end_date) && ((!schemeForm?.value?.bonus_start_date) || (!schemeForm?.value?.scheme_end_date))\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label \" for=\"input-username\">Bonus End\n                                            Date</label>\n                                        <input class=\"form-control form-control-alternative\" [hidden]=\"!schemeEdit\"\n                                            min=\"{{bonusMinDate |date: 'yyyy-MM-dd'}}\" type=\"date\"\n                                            max=\"{{bonusMaxDate |date: 'yyyy-MM-dd'}}\" type=\"date\"\n                                            formControlName=\"bonus_end_date\" data-date-inline-picker=\"false\"\n                                            data-date-open-on-focus=\"true\" />\n                                        <label  [hidden]=\"schemeEdit\"\n                                            class=\"form-control form-control-alternative\">{{schemeDetail?.bonus_end_date | date: \"dd MMM yyyy\"}}</label>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label \" for=\"input-username\">CheckList and Terms\n                                        </label>\n                                        <textarea class=\"form-control form-control-alternative\" [hidden]=\"!schemeEdit\"\n                                            formControlName=\"checklist_terms\" rows=\"5\"> </textarea>\n                                        <div [hidden]=\"schemeEdit\" class=\"form-control form-control-alternative\">\n                                            {{schemeDetail?.checklist_terms}}</div>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"form-group\" [hidden]=\"!schemeEdit\">\n                                        <button class=\"btn btn-primary my-4\">Update\n                                            Schemes</button>\n                                        <button class=\"btn btn-outline-danger my-4\"\n                                            (click)=\"schemeEdit = false\">Cancel</button>\n                                    </div>\n                                    <div class=\"form-group\" [hidden]=\"schemeEdit\">\n                                        <button class=\"btn btn-primary my-4\" (click)=\"schemeEdit = true\">Edit\n                                            Schemes</button>\n                                        <button class=\"btn btn-outline-danger my-4\">Delete\n                                            Schemes</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidenav -->\n<app-sidebar></app-sidebar>\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <app-navbar></app-navbar>\n  <!-- Pages -->\n  <router-outlet></router-outlet>\n  <div class=\"container-fluid\">\n    <app-footer></app-footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <nav class=\"navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark\">\n    <div class=\"container px-4\">\n      <a class=\"navbar-brand logo-brand\"  routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n        <img src=\"assets/img/brand/argon-white.png\" />\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n         aria-controls=\"sidenav-collapse-main\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n        <!-- Collapse header -->\n        <div class=\"navbar-collapse-header d-md-none\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n                <img src=\"assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\" >\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Navbar items -->\n       <!--  <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <i class=\"ni ni-planet\"></i>\n              <span class=\"nav-link-inner--text\">Dashboard</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/register']\">\n              <i class=\"ni ni-circle-08\"></i>\n              <span class=\"nav-link-inner--text\">Register</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">\n              <i class=\"ni ni-key-25\"></i>\n              <span class=\"nav-link-inner--text\">Login</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\">\n              <i class=\"ni ni-single-02\"></i>\n              <span class=\"nav-link-inner--text\">Profile</span>\n            </a>\n          </li>\n        </ul> -->\n      </div>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"py-5\">\n  <!-- <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-auth-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"http://blog.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div> -->\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userdetails/userdetails.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userdetails/userdetails.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <!-- Card stats -->\n        </div>\n    </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n    <!-- Table -->\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"card shadow\">\n                <div class=\"card-header border-0\">\n                    <h3 class=\"mb-0\">Details of {{userInfo?.data?.name}} </h3>\n                </div>\n                <hr>\n                <div>\n                    <p class=\"label\">Personal Details</p>\n                    <div style=\"display: flex;justify-content: space-between;\">\n                        <div style=\"padding: 44px;\">\n                            <img [src]=\"userInfo?.aditional_data?.user_image || 'assets/img/brand/avtar.png'\"\n                                alt=\"Avatar\" class=\"avatar\">\n                        </div>\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    Name\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{userInfo?.data?.name}}\n                                </div>\n                            </div>\n                            <hr class=\"line\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    Mobile No.\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{userInfo?.data?.mobile_no}}\n                                </div>\n                            </div>\n                            <hr class=\"line\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    Email Id\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{userInfo?.data?.email}}\n                                </div>\n                            </div>\n                            <hr class=\"line\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    Address\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{userInfo?.data?.user_personal?.address}}\n                                </div>\n                            </div>\n                            <hr class=\"line\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    DateOfBirth\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{userInfo?.data?.user_personal?.dob}}\n                                </div>\n                            </div>\n                            <hr class=\"line\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    Gender\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{userInfo?.data?.user_personal?.gender}}\n                                </div>\n                            </div>\n                            <hr class=\"line\" *ngIf=\"userInfo?.data?.status === 0\">\n                            <div class=\"row\" *ngIf=\"userInfo?.data?.status === 0\">\n                                <div class=\"col-md-4\">\n                                    Status\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{'Disapproved'}}\n                                </div>\n                            </div>\n                            <hr class=\"line\" *ngIf=\"userInfo?.data?.status === 0\">\n                            <div class=\"row\" *ngIf=\"userInfo?.data?.status === 0\">\n                                <div class=\"col-md-4\">\n                                    Disapprove reason\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{userInfo?.data?.disapprove_message}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <hr>\n                <div>\n                    <p class=\"label\">Identity Proof</p>\n                    <div style=\"display: flex;justify-content: space-between;\">\n                        <div class=\"adharimage\">\n                            <img [src]=\"userInfo?.aditional_data?.aadhar_image || 'assets/img/brand/avtar.png'\"\n                                alt=\"Avatar\" class=\"avatarAdhar\">\n                            <!-- <img [src]=\"userInfo?.aditional_data?.aadhar_image\" alt=\"Avatar\" class=\"avatarAdhar\"> -->\n                        </div>\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    Aadhar Name\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{userInfo?.data?.user_documents?.aadhar_name}}\n                                </div>\n                            </div>\n                            <hr class=\"line\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    Aadhar No.\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{userInfo?.data?.user_documents?.aadhar_no}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <hr>\n                    <div style=\"display: flex;justify-content: space-between;\">\n                        <div class=\"adharimage\">\n                            <img [src]=\"userInfo?.aditional_data?.pan_image || 'assets/img/brand/avtar.png'\"\n                                alt=\"Avatar\" class=\"avatarAdhar\">\n                        </div>\n                        <div class=\"container\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    PanCard Name\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{userInfo?.data?.user_documents?.pan_name}}\n                                </div>\n                            </div>\n                            <hr class=\"line\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    PanCard No.\n                                </div>\n                                <div class=\"col-md-1\">\n                                    :\n                                </div>\n                                <div class=\"col-md-7\">\n                                    {{userInfo?.data?.user_documents?.pan_no}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <hr>\n                <div>\n\n                    <div>\n                        <p class=\"label\">Bank Details</p>\n                        <div style=\"display: flex;justify-content: space-between;\">\n                            <div class=\"adharimage\">\n                                <img [src]=\"userInfo?.aditional_data?.bank_document || 'assets/img/brand/avtar.png'\"\n                                    alt=\"Avatar\" class=\"avatarAdhar\">\n                            </div>\n\n                            <div class=\"container\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                        Bank Name\n                                    </div>\n                                    <div class=\"col-md-1\">\n                                        :\n                                    </div>\n                                    <div class=\"col-md-7\">\n                                        {{userInfo?.data?.user_bank?.bank_name}}\n                                    </div>\n                                </div>\n                                <hr class=\"line\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                        Account No.\n                                    </div>\n                                    <div class=\"col-md-1\">\n                                        :\n                                    </div>\n                                    <div class=\"col-md-7\">\n                                        {{userInfo?.data?.user_bank?.account_no}}\n                                    </div>\n                                </div>\n                                <hr class=\"line\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                        Branch Address\n                                    </div>\n                                    <div class=\"col-md-1\">\n                                        :\n                                    </div>\n                                    <div class=\"col-md-7\">\n                                        {{userInfo?.data?.user_bank?.branch_address}}\n                                    </div>\n                                </div>\n                                <hr class=\"line\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                        IFSC Code\n                                    </div>\n                                    <div class=\"col-md-1\">\n                                        :\n                                    </div>\n                                    <div class=\"col-md-7\">\n                                        {{userInfo?.data?.user_bank?.ifsc_code}}\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                    </div>\n                </div>\n\n                <div style=\"display: flex;justify-content: center;\">\n                    <div class=\"btn\">\n                        <div>\n                            <button *ngIf=\"userInfo?.data?.is_completed !=1\" class=\"button button2\" data-toggle=\"modal\"\n                                data-target=\"#myModal\">Approve</button>\n                        </div>\n                    </div>\n                    <div class=\"btn\">\n                        <div>\n                            <button class=\"button button3\" *ngIf=\"userInfo?.data?.status !=0\" data-toggle=\"modal\"\n                                data-target=\"#myDisModal\">Disapprove</button>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <form [formGroup]=\"modalForm\">\n                <!-- Modal Header -->\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n\n                <!-- Modal body -->\n                <div class=\"modal-body\">\n                    <h4 class=\"modal-title\">Are you sure you want to approve ?</h4>\n                    <div class=\"dropdown\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <p class=\"dropMenu\">Club Name</p>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <select class=\"selectBox\" formControlName=\"club\"\n                                    (change)=\"clubEvent($event.target.value)\">\n                                    <option value=\"\">Select club</option>\n                                    <option value=\"0\" selected>Gold</option>\n                                    <option value=\"1\">Silver</option>\n                                    <option value=\"2\">Bronze</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <p class=\"dropMenu\">Store Name</p>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <select class=\"selectBox\" formControlName=\"store\"\n                                    (change)=\"storeEvent($event.target.value)\">\n                                    <option value=\"\">Select store</option>\n                                    <option placeholder=\"Select store\" value=\"{{items?.id}}\"\n                                        *ngFor=\"let items of stores\">{{items.name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"btn\">\n                    <div>\n                        <button class=\"button button2\" [disabled]=\"!modalForm.valid\"\n                            (click)=\"confirmStatus()\">Confirm</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n\n\n<!-- The  Disapprove Modal -->\n<div class=\"modal\" id=\"myDisModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form [formGroup]=\"disapproveForm\">\n                <div class=\"reasonsModal\">\n                    <h4 class=\"modal-title\">Please write reason for disapproval.</h4>\n                    <div>\n                        <textarea formControlName=\"reason\" style=\"width: 68%; \n                        margin-top: 20px;\" placeholder=\"Write comments.....\"></textarea>\n                    </div>\n                    <span class=\"text-danger\" *ngIf=\"disapproveForm.get('reason').dirty || disapproveForm.get('reason').touched\">\n                        <span *ngIf=\"disapproveForm.get('reason').hasError('required')\">\n                            Please Enter reasons.\n                        </span>\n                    </span>\n                </div>\n    \n                <!-- Modal footer -->\n                <div class=\"btn\">\n                    <div>\n                        <button class=\"button button2\" (click)=\"disapproveConfirm()\">Confirm</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"./src/app/layouts/auth-layout/auth-layout.module.ts",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'argon-dashboard-angular';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiResources = {
    baseURL: "https://bandhan.herokuapp.com/api/v1",
    categoriesList: "/categories",
    createProduct: "/worker/products/create",
    productList: "/worker/products/all",
    deleteProduct: "/worker/products/productID/delete",
    getProduct: "/worker/products/productID",
    updateProduct: "/worker/products/productID/update",
    addStore: "/stores/store",
    storeManagerList: "/store-manager/fetch/all",
    storeList: "/stores/list",
    getStore: "/stores/storeID/edit",
    updateStore: "/stores/storeID/update",
    deleteStore: "/stores/delete/storeID",
    createScheme: "/scheme/create",
    schemeList: "/scheme/all",
    deleteScheme: "/scheme/delete/schemeID",
    fetchScheme: "/scheme/fetch/schemeID",
    activitiesList: "/activity/all",
    invoiceCategories: "/category/fetch"
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var admin_layout_component_1 = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
var auth_layout_component_1 = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
var http_2 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var authconfig_interceptor_1 = __webpack_require__(/*! ./shared/authconfig.interceptor */ "./src/app/shared/authconfig.interceptor.ts");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
var forms_2 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var app_routing_1 = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var components_module_1 = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var edit_schemes_component_1 = __webpack_require__(/*! ./edit-schemes/edit-schemes.component */ "./src/app/edit-schemes/edit-schemes.component.ts");
var userdetails_component_1 = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/userdetails/userdetails.component.ts");
var ngx_spinner_1 = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                ngx_spinner_1.NgxSpinnerModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                forms_2.ReactiveFormsModule,
                http_1.HttpClientModule,
                components_module_1.ComponentsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                ng_bootstrap_1.NgbModule,
                router_1.RouterModule,
                app_routing_1.AppRoutingModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                admin_layout_component_1.AdminLayoutComponent,
                auth_layout_component_1.AuthLayoutComponent,
                edit_schemes_component_1.EditSchemesComponent,
                userdetails_component_1.UserdetailsComponent,
            ],
            providers: [{
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: authconfig_interceptor_1.AuthInterceptor,
                    multi: true
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var admin_layout_component_1 = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
var auth_layout_component_1 = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
var auth_guard_1 = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [auth_guard_1.AuthGuard]
    }, {
        path: '',
        component: admin_layout_component_1.AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ],
        canActivate: [auth_guard_1.AuthGuard]
    }, {
        path: '',
        component: auth_layout_component_1.AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    }, {
        path: '**',
        redirectTo: 'dashboard',
        canActivate: [auth_guard_1.AuthGuard]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var sidebar_component_1 = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var navbar_component_1 = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
var footer_component_1 = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
var create_schemes_component_1 = __webpack_require__(/*! ./create-schemes/create-schemes.component */ "./src/app/components/create-schemes/create-schemes.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var list_schemes_component_1 = __webpack_require__(/*! ./list-schemes/list-schemes.component */ "./src/app/components/list-schemes/list-schemes.component.ts");
/* import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component'; */
var ngx_pagination_1 = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
var ngx_spinner_1 = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ngx_pagination_1.NgxPaginationModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
                ngx_spinner_1.NgxSpinnerModule
            ],
            declarations: [
                footer_component_1.FooterComponent,
                navbar_component_1.NavbarComponent,
                sidebar_component_1.SidebarComponent,
                create_schemes_component_1.CreateSchemesComponent,
                list_schemes_component_1.ListSchemesComponent
            ],
            exports: [
                footer_component_1.FooterComponent,
                navbar_component_1.NavbarComponent,
                sidebar_component_1.SidebarComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;


/***/ }),

/***/ "./src/app/components/create-schemes/create-schemes.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/create-schemes/create-schemes.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".date {\n    width: 100%;\n    box-shadow: 1px 5px ghostwhite !important;\n    border-radius: 5px !important;\n}\n\n.duration-type {\n    margin: 15px;\n}\n\n.duration-radio {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtc2NoZW1lcy9jcmVhdGUtc2NoZW1lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlDQUF5QztJQUN6Qyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtc2NoZW1lcy9jcmVhdGUtc2NoZW1lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDFweCA1cHggZ2hvc3R3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uZHVyYXRpb24tdHlwZSB7XG4gICAgbWFyZ2luOiAxNXB4O1xufVxuXG4uZHVyYXRpb24tcmFkaW8ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/create-schemes/create-schemes.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-schemes/create-schemes.component.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var dataservice_service_1 = __webpack_require__(/*! ../../shared/dataservice.service */ "./src/app/shared/dataservice.service.ts");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var common_service_1 = __webpack_require__(/*! src/app/shared/common.service */ "./src/app/shared/common.service.ts");
var store_service_1 = __webpack_require__(/*! src/app/shared/store.service */ "./src/app/shared/store.service.ts");
var product_service_1 = __webpack_require__(/*! src/app/shared/product.service */ "./src/app/shared/product.service.ts");
var scheme_service_1 = __webpack_require__(/*! src/app/shared/scheme.service */ "./src/app/shared/scheme.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var CreateSchemesComponent = /** @class */ (function () {
    function CreateSchemesComponent(fb, dataService, toastr, commonService, storeService, productService, schemeService, router) {
        var _this = this;
        this.fb = fb;
        this.dataService = dataService;
        this.toastr = toastr;
        this.commonService = commonService;
        this.storeService = storeService;
        this.productService = productService;
        this.schemeService = schemeService;
        this.router = router;
        this.formData = new FormData();
        this.groupList = [
            { id: 1, name: 'Gold' },
            { id: 2, name: 'Silver' },
            { id: 3, name: 'Bronze' }
        ];
        this.schemeForm = this.fb.group({
            name: new forms_1.FormControl('', [forms_1.Validators.required]),
            description: new forms_1.FormControl('', [forms_1.Validators.required]),
            scheme_image: new forms_1.FormControl('', [forms_1.Validators.required]),
            category: new forms_1.FormControl('', [forms_1.Validators.required]),
            group: new forms_1.FormControl('', [forms_1.Validators.required]),
            product_volume: new forms_1.FormControl('', [forms_1.Validators.required]),
            default_points: new forms_1.FormControl('', [forms_1.Validators.required]),
            durationType: new forms_1.FormControl('1', [forms_1.Validators.required]),
            bonus_points: new forms_1.FormControl('', [forms_1.Validators.required]),
            bonus_start_date: new forms_1.FormControl('', [forms_1.Validators.required]),
            bonus_end_date: new forms_1.FormControl('', [forms_1.Validators.required]),
            scheme_end_date: new forms_1.FormControl('', [forms_1.Validators.required]),
            scoring_point: new forms_1.FormControl('', [forms_1.Validators.required]),
            checklist_terms: new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.schemeForm.controls['durationType'].valueChanges.subscribe(function (durationType) {
            _this.schemeForm.patchValue({
                bonus_start_date: '',
                scheme_end_date: '',
                bonus_end_date: ''
            });
        });
        this.schemeForm.controls['bonus_start_date'].valueChanges.subscribe(function (startDate) {
            if (startDate && typeof startDate == 'string') {
                var monthInMiliSec = 30 * 24 * 60 * 60 * 1000;
                if (_this.schemeForm.value.durationType !== 'ad-hoc') {
                    var schemeStartDate = new Date(parseInt(startDate.split('-')[0]), parseInt(startDate.split('-')[1]) - 1, parseInt(startDate.split('-')[2]), 0, 0, 0, 0).getTime();
                    var schemeEndDate = new Date(schemeStartDate + (monthInMiliSec * parseInt(_this.schemeForm.value.durationType)));
                    _this.schemeForm.patchValue({
                        scheme_end_date: schemeEndDate.getFullYear() + '-' +
                            ((schemeEndDate.getMonth() + 1).toString().length == 1 ? ('0' + (schemeEndDate.getMonth() + 1)) : (schemeEndDate.getMonth() + 1)) + '-' +
                            (schemeEndDate.getDate().toString().length == 1 ? ('0' + schemeEndDate.getDate()) : schemeEndDate.getDate()),
                        bonus_end_date: ''
                    });
                    _this.bonusMinDate = new Date(schemeStartDate);
                    _this.bonusMaxDate = schemeEndDate;
                }
                console.log(_this.schemeForm);
            }
        });
    }
    CreateSchemesComponent.prototype.ngOnInit = function () {
        this.schemeStartMinDate = new Date();
        this.bonusMinDate = new Date();
        this.bonusMaxDate = new Date();
        this.schemeEndMinDate = new Date();
        this.getCategories();
    };
    CreateSchemesComponent.prototype.getCategories = function () {
        var _this = this;
        this.commonService.getInvoiceCategoryList().then(function (res) {
            if (res) {
                _this.categoryList = res.data;
            }
        });
    };
    Object.defineProperty(CreateSchemesComponent.prototype, "f", {
        get: function () {
            return this.schemeForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CreateSchemesComponent.prototype.createScheme = function () {
        var _this = this;
        Object.keys(this.schemeForm.value).forEach(function (key) {
            switch (key) {
                case "bonus_start_date":
                    _this.formData.set(key, (new Date(_this.schemeForm.value[key]).getTime() / 1000).toString());
                    break;
                case "bonus_end_date":
                    _this.formData.set(key, (new Date(_this.schemeForm.value[key]).getTime() / 1000).toString());
                    break;
                case "scheme_end_date":
                    _this.formData.set(key, (new Date(_this.schemeForm.value[key]).getTime() / 1000).toString());
                    break;
                default:
                    if (key !== "scheme_image") {
                        _this.formData.set(key, _this.schemeForm.value[key]);
                    }
                    break;
            }
        });
        this.schemeService.createScheme(this.formData).then(function (res) {
            if (res) {
                _this.toastr.success("Scheme created");
                _this.router.navigate(['/list-schemes']);
            }
        });
    };
    CreateSchemesComponent.prototype.selectImage = function (files) {
        this.schemeForm.patchValue({
            scheme_image: files[0].name
        });
        this.formData.set('scheme_image', files[0]);
    };
    CreateSchemesComponent.ctorParameters = function () { return [
        { type: forms_1.FormBuilder },
        { type: dataservice_service_1.DataService },
        { type: ngx_toastr_1.ToastrService },
        { type: common_service_1.CommonService },
        { type: store_service_1.StoreService },
        { type: product_service_1.ProductService },
        { type: scheme_service_1.SchemeService },
        { type: router_1.Router }
    ]; };
    CreateSchemesComponent = __decorate([
        core_1.Component({
            selector: 'app-create-schemes',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-schemes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/create-schemes/create-schemes.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./create-schemes.component.css */ "./src/app/components/create-schemes/create-schemes.component.css")).default]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            dataservice_service_1.DataService,
            ngx_toastr_1.ToastrService,
            common_service_1.CommonService,
            store_service_1.StoreService,
            product_service_1.ProductService,
            scheme_service_1.SchemeService,
            router_1.Router])
    ], CreateSchemesComponent);
    return CreateSchemesComponent;
}());
exports.CreateSchemesComponent = CreateSchemesComponent;


/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/components/list-schemes/list-schemes.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/list-schemes/list-schemes.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".txt-align-right {\n    text-align: right;\n}\n\n.delete-icon-only-btn {\n    background: transparent;\n      border-color: transparent;\n      color: red;\n  }\n\n.edit-icon-only-btn {\n    background: transparent;\n      border-color: transparent;\n      color: green;\n  }\n\n.view-icon-only-btn {\n    background: transparent;\n      border-color: transparent;\n      color: rgb(12, 201, 226);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LXNjaGVtZXMvbGlzdC1zY2hlbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7TUFDckIseUJBQXlCO01BQ3pCLFVBQVU7RUFDZDs7QUFFQTtJQUNFLHVCQUF1QjtNQUNyQix5QkFBeUI7TUFDekIsWUFBWTtFQUNoQjs7QUFFQTtJQUNFLHVCQUF1QjtNQUNyQix5QkFBeUI7TUFDekIsd0JBQXdCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0LXNjaGVtZXMvbGlzdC1zY2hlbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHh0LWFsaWduLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmRlbGV0ZS1pY29uLW9ubHktYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogcmVkO1xuICB9XG4gIFxuICAuZWRpdC1pY29uLW9ubHktYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogZ3JlZW47XG4gIH1cbiAgXG4gIC52aWV3LWljb24tb25seS1idG4ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiByZ2IoMTIsIDIwMSwgMjI2KTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/list-schemes/list-schemes.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/list-schemes/list-schemes.component.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var scheme_service_1 = __webpack_require__(/*! src/app/shared/scheme.service */ "./src/app/shared/scheme.service.ts");
var ListSchemesComponent = /** @class */ (function () {
    function ListSchemesComponent(tostr, router, schemeService) {
        this.tostr = tostr;
        this.router = router;
        this.schemeService = schemeService;
        this.schemes = [];
        this.itemPerPage = 0;
        this.totalSchemes = 0;
    }
    ListSchemesComponent.prototype.ngOnInit = function () {
        this.page = 1;
        this.getSchemes();
    };
    ListSchemesComponent.prototype.getSchemes = function () {
        var _this = this;
        this.schemeService.getSchemeList(this.page).then(function (res) {
            if (res) {
                _this.schemes = res.data.data;
                _this.schemes.forEach(function (scheme) {
                    scheme.status = new Date(scheme.scheme_end_date) < new Date() ? 'expired' : 'valid';
                });
                _this.page = res.data.meta.current_page;
                _this.itemPerPage = res.data.meta.per_page;
                _this.totalSchemes = res.data.meta.total;
            }
        });
    };
    ListSchemesComponent.prototype.editSchemesFunction = function (id) {
        var extras = {
            queryParams: {
                scheme: id
            }
        };
        this.router.navigate(['edit-schemes'], extras);
    };
    ListSchemesComponent.prototype.selectPage = function (event) {
        this.page = event;
        this.getSchemes();
        console.log(event);
    };
    ListSchemesComponent.prototype.openDeleteSchemeModal = function (schemeName, schemeID) {
        this.schemeName = schemeName;
        this.schemeID = schemeID;
        $('#schemeDelete').modal("show");
    };
    ListSchemesComponent.prototype.deleteScheme = function () {
        var _this = this;
        $('#schemeDelete').modal("hide");
        if (this.page > 1 && this.schemes.length == 1) {
            this.page -= 1;
        }
        this.schemeService.deleteProduct(this.schemeID, this.schemeName).then(function (res) {
            if (res) {
                _this.schemeName = '';
                _this.schemeID = '';
                $('#schemeDelete').modal("hide");
                _this.getSchemes();
            }
        });
    };
    ListSchemesComponent.prototype.closeModal = function () {
        this.schemeName = '';
        this.schemeID = '';
        $('#productDelete').modal("hide");
    };
    ListSchemesComponent.ctorParameters = function () { return [
        { type: ngx_toastr_1.ToastrService },
        { type: router_1.Router },
        { type: scheme_service_1.SchemeService }
    ]; };
    ListSchemesComponent = __decorate([
        core_1.Component({
            selector: 'app-list-schemes',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list-schemes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/list-schemes/list-schemes.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list-schemes.component.css */ "./src/app/components/list-schemes/list-schemes.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService,
            router_1.Router,
            scheme_service_1.SchemeService])
    ], ListSchemesComponent);
    return ListSchemesComponent;
}());
exports.ListSchemesComponent = ListSchemesComponent;


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var sidebar_component_1 = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var auth_service_1 = __webpack_require__(/*! ../../shared/auth.service */ "./src/app/shared/auth.service.ts");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, authService) {
        this.element = element;
        this.router = router;
        this.authService = authService;
        this.userName = "";
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = sidebar_component_1.ROUTES.filter(function (listTitle) { return listTitle; });
        // this.userName = this.authService.currentUser.data.name;
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.doLogout();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: common_1.Location },
        { type: core_1.ElementRef },
        { type: router_1.Router },
        { type: auth_service_1.AuthService }
    ]; };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [common_1.Location, core_1.ElementRef, router_1.Router, auth_service_1.AuthService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar-header {\n  border-top: 1px solid #ececec;\n  padding: 20px 15px 1px 13px;\n  margin-bottom: 2px;\n  color: #ececec;\n}\n\n.logo-brand {\n  max-height: 6.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvQmFuZGhhbi9iYW5kaGFuLWFkbWluL3NyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRElBO0VBQ0ksNkJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXItaGVhZGVye1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNlY2VjOyBcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHggMXB4IDEzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGNvbG9yOiAjZWNlY2VjO1xuXG59XG5cblxuLmxvZ28tYnJhbmQge1xuICAgIG1heC1oZWlnaHQ6IDYuNXJlbSAhaW1wb3J0YW50O1xuICAgfSIsIi5zaWRlYmFyLWhlYWRlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNlY2VjO1xuICBwYWRkaW5nOiAyMHB4IDE1cHggMXB4IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgY29sb3I6ICNlY2VjZWM7XG59XG5cbi5sb2dvLWJyYW5kIHtcbiAgbWF4LWhlaWdodDogNi41cmVtICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var auth_service_1 = __webpack_require__(/*! ../../shared/auth.service */ "./src/app/shared/auth.service.ts");
exports.ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ni-tv-2 text-primary', class: '', isHeader: false },
    { path: '', title: 'User Management', icon: 'ni-circle-08 text-orange', class: '', isHeader: true },
    { path: '/add-user', title: 'Create User', icon: 'ni-single-02 text-yellow', class: '', isHeader: false },
    { path: '/list-users', title: 'List Users', icon: 'ni-bullet-list-67 text-blue', class: '', isHeader: false },
    // { path: '/list-roles', title: 'List User Roles', icon: 'ni-key-25 text-info', class: '', isHeader: false },
    { path: '', title: 'Store Management', icon: 'ni ni-shop text-orange', class: '', isHeader: true },
    { path: '/add-store', title: 'Create Store', icon: 'ni ni-shop', class: '', isHeader: false },
    { path: '/list-stores', title: 'List of Stores', icon: 'ni-bullet-list-67 text-blue', class: '', isHeader: false },
    { path: '', title: 'Product Management', icon: 'ni ni-shop text-orange', class: '', isHeader: true },
    { path: '/add-product', title: 'Add Product', icon: 'ni ni-shop', class: '', isHeader: false },
    { path: '/list-products', title: 'list of all products', icon: 'ni-bullet-list-67 text-blue', class: '', isHeader: false },
    { path: '', title: ' Schemes Management', icon: 'ni ni-shop text-orange', class: '', isHeader: true },
    { path: '/create-schemes', title: 'Create Schemes', icon: 'ni ni-shop', class: '', isHeader: false },
    { path: '/list-schemes', title: 'List Schemes', icon: 'ni-bullet-list-67 text-blue', class: '', isHeader: false },
    { path: '', title: 'Activity Management', icon: 'ni ni-world-2 text-orange', class: '', isHeader: true },
    // { path: '/add-activity', title: 'Add Activity', icon: 'ni ni-shop', class: '', isHeader: false },
    { path: '/list-activities', title: 'list of all Activities', icon: 'ni-bullet-list-67 text-blue', class: '', isHeader: false },
    { path: '/site-setting', title: 'Site Setting', icon: 'ni ni-settings-gear-65 text-orange', class: '', isHeader: false },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.isCollapsed = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    SidebarComponent.prototype.logout = function () {
        this.authService.doLogout();
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: router_1.Router },
        { type: auth_service_1.AuthService }
    ]; };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "./src/app/edit-schemes/edit-schemes.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-schemes/edit-schemes.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".date {\n    width: 100%;\n    box-shadow: 1px 5px ghostwhite !important;\n    border-radius: 5px !important;\n}\n\n.duration-type {\n    margin: 15px;\n}\n\n.duration-radio {\n    margin-right: 5px;\n}\n\n.image-wrap {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.image-container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.image {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n}\n\na:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: #0056b3;\n    text-decoration: underline;\n}\n\na:not([href]):not([tabindex]) {\n    color: #0056b3;\n    text-decoration: none;\n}\n\na:not([href]):hover {\n    color: #0056b3;\n    text-decoration: underline;\n}\n\na:hover {\n    color: #233dd2;\n    text-decoration: underline;\n}\n\na:not([href]) {\n    color: #0056b3;\n    text-decoration: underline;\n}\n\na:hover {\n    color: #0056b3;\n    text-decoration: underline;\n}\n\na {\n    /* color: initial;\n    text-decoration: none;\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects; */\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1zY2hlbWVzL2VkaXQtc2NoZW1lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlDQUF5QztJQUN6Qyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztBQUNBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFDQTtJQUNJOzs7NENBR3dDO0lBQ3hDLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LXNjaGVtZXMvZWRpdC1zY2hlbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogMXB4IDVweCBnaG9zdHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kdXJhdGlvbi10eXBlIHtcbiAgICBtYXJnaW46IDE1cHg7XG59XG5cbi5kdXJhdGlvbi1yYWRpbyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5pbWFnZS13cmFwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWFnZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5hOm5vdChbaHJlZl0pOm5vdChbdGFiaW5kZXhdKTpob3ZlciwgYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSk6Zm9jdXMge1xuICAgIGNvbG9yOiAjMDA1NmIzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuYTpub3QoW2hyZWZdKTpub3QoW3RhYmluZGV4XSkge1xuICAgIGNvbG9yOiAjMDA1NmIzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6bm90KFtocmVmXSk6aG92ZXIge1xuICAgIGNvbG9yOiAjMDA1NmIzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuYTpob3ZlciB7XG4gICAgY29sb3I6ICMyMzNkZDI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5hOm5vdChbaHJlZl0pIHtcbiAgICBjb2xvcjogIzAwNTZiMztcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmE6aG92ZXIge1xuICAgIGNvbG9yOiAjMDA1NmIzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuYSB7XG4gICAgLyogY29sb3I6IGluaXRpYWw7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/edit-schemes/edit-schemes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-schemes/edit-schemes.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var scheme_service_1 = __webpack_require__(/*! ../shared/scheme.service */ "./src/app/shared/scheme.service.ts");
var common_service_1 = __webpack_require__(/*! ../shared/common.service */ "./src/app/shared/common.service.ts");
var EditSchemesComponent = /** @class */ (function () {
    function EditSchemesComponent(fb, tostr, route, router, activatedRoute, schemeService, commonService) {
        var _this = this;
        this.fb = fb;
        this.tostr = tostr;
        this.route = route;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.schemeService = schemeService;
        this.commonService = commonService;
        this.groupList = [
            { id: 1, name: 'Gold' },
            { id: 2, name: 'Silver' },
            { id: 3, name: 'Bronze' }
        ];
        this.schemeForm = this.fb.group({
            name: new forms_1.FormControl('', [forms_1.Validators.required]),
            description: new forms_1.FormControl('', [forms_1.Validators.required]),
            scheme_image: new forms_1.FormControl('', [forms_1.Validators.required]),
            category: new forms_1.FormControl('', [forms_1.Validators.required]),
            group: new forms_1.FormControl('', [forms_1.Validators.required]),
            product_volume: new forms_1.FormControl('', [forms_1.Validators.required]),
            default_points: new forms_1.FormControl('', [forms_1.Validators.required]),
            durationType: new forms_1.FormControl('', [forms_1.Validators.required]),
            bonus_points: new forms_1.FormControl('', [forms_1.Validators.required]),
            bonus_start_date: new forms_1.FormControl('', [forms_1.Validators.required]),
            bonus_end_date: new forms_1.FormControl('', [forms_1.Validators.required]),
            scheme_end_date: new forms_1.FormControl('', [forms_1.Validators.required]),
            scoring_point: new forms_1.FormControl('', [forms_1.Validators.required]),
            checklist_terms: new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.schemes_id = params['scheme'];
            console.log('product id ======>>>', _this.schemes_id);
        });
        this.schemeForm.controls['durationType'].valueChanges.subscribe(function (durationType) {
            _this.schemeForm.patchValue({
                bonus_start_date: '',
                scheme_end_date: '',
                bonus_end_date: ''
            });
        });
        this.schemeForm.controls['bonus_start_date'].valueChanges.subscribe(function (startDate) {
            if (startDate && typeof startDate == 'string') {
                var monthInMiliSec = 30 * 24 * 60 * 60 * 1000;
                if (_this.schemeForm.value.durationType !== 'ad-hoc') {
                    var schemeStartDate = new Date(parseInt(startDate.split('-')[0]), parseInt(startDate.split('-')[1]) - 1, parseInt(startDate.split('-')[2]), 0, 0, 0, 0).getTime();
                    var schemeEndDate = new Date(schemeStartDate + (monthInMiliSec * parseInt(_this.schemeForm.value.durationType)));
                    _this.schemeForm.patchValue({
                        scheme_end_date: schemeEndDate.getFullYear() + '-' +
                            ((schemeEndDate.getMonth() + 1).toString().length == 1 ? ('0' + (schemeEndDate.getMonth() + 1)) : (schemeEndDate.getMonth() + 1)) + '-' +
                            (schemeEndDate.getDate().toString().length == 1 ? ('0' + schemeEndDate.getDate()) : schemeEndDate.getDate()),
                        bonus_end_date: ''
                    });
                    _this.bonusMinDate = new Date(schemeStartDate);
                    _this.bonusMaxDate = schemeEndDate;
                }
                console.log(_this.schemeForm);
            }
        });
    }
    EditSchemesComponent.prototype.editImage = function (id) {
        document.getElementById(id).click();
    };
    EditSchemesComponent.prototype.ngOnInit = function () {
        this.schemeStartMinDate = new Date();
        this.bonusMinDate = new Date();
        this.bonusMaxDate = new Date();
        this.schemeEndMinDate = new Date();
        this.getSchemes();
    };
    EditSchemesComponent.prototype.getSchemes = function () {
        var _this = this;
        this.schemeService.getSchemeDetails(this.schemes_id).then(function (res) {
            if (res) {
                _this.schemeDetail = res.data;
                console.log('scheme details ===>>>>', res);
                _this.getCategories();
            }
        });
    };
    EditSchemesComponent.prototype.getCategories = function () {
        var _this = this;
        this.commonService.getInvoiceCategoryList().then(function (res) {
            if (res) {
                _this.categoryList = res.data;
            }
        });
    };
    Object.defineProperty(EditSchemesComponent.prototype, "f", {
        get: function () {
            return this.schemeForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    EditSchemesComponent.prototype.updateScheme = function () {
        var formValue = this.schemeForm.value;
        formValue.bonus_start_date = new Date(formValue.bonus_start_date).getTime() / 1000;
        formValue.bonus_end_date = new Date(formValue.bonus_end_date).getTime() / 1000;
        formValue.scheme_end_date = new Date(formValue.scheme_end_date).getTime() / 100;
        var data = {
            'name': this.schemes.name,
            'description': this.schemes.default_points,
            'default_points': this.schemes.default_points,
            'scheme_end_date': this.schemeForm.value.scheme_end_date,
            'scheme_id': this.schemes_id
        };
    };
    EditSchemesComponent.prototype.editScheme = function () {
        this.schemeEdit = !this.schemeEdit;
        if (this.schemeEdit) {
        }
        else {
            this.schemeForm.reset();
        }
    };
    EditSchemesComponent.ctorParameters = function () { return [
        { type: forms_1.FormBuilder },
        { type: ngx_toastr_1.ToastrService },
        { type: router_1.ActivatedRoute },
        { type: router_1.Router },
        { type: router_1.ActivatedRoute },
        { type: scheme_service_1.SchemeService },
        { type: common_service_1.CommonService }
    ]; };
    EditSchemesComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-schemes',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-schemes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-schemes/edit-schemes.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-schemes.component.css */ "./src/app/edit-schemes/edit-schemes.component.css")).default]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            ngx_toastr_1.ToastrService,
            router_1.ActivatedRoute,
            router_1.Router,
            router_1.ActivatedRoute,
            scheme_service_1.SchemeService,
            common_service_1.CommonService])
    ], EditSchemesComponent);
    return EditSchemesComponent;
}());
exports.EditSchemesComponent = EditSchemesComponent;


/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());
exports.AdminLayoutComponent = AdminLayoutComponent;


/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-brand {\n  background: #fff;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.logo-brand > img {\n  width: 130px;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvQmFuZGhhbi9iYW5kaGFuLWFkbWluL3NyYy9hcHAvbGF5b3V0cy9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWJyYW5ke1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubG9nby1icmFuZCA+IGltZ3tcbiB3aWR0aDogMTMwcHg7XG4gaGVpZ2h0OjUwJTtcbn0iLCIubG9nby1icmFuZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sb2dvLWJyYW5kID4gaW1nIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBoZWlnaHQ6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router) {
        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var html = document.getElementsByTagName("html")[0];
        html.classList.add("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-default");
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        var html = document.getElementsByTagName("html")[0];
        html.classList.remove("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("bg-default");
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: router_1.Router }
    ]; };
    AuthLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-auth-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")).default]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());
exports.AuthLayoutComponent = AuthLayoutComponent;


/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var auth_service_1 = __webpack_require__(/*! ./../shared/auth.service */ "./src/app/shared/auth.service.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn !== true) {
            //window.alert("Access not allowed!");
            this.router.navigate(['login']);
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: auth_service_1.AuthService },
        { type: router_1.Router }
    ]; };
    AuthGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var dataservice_service_1 = __webpack_require__(/*! ./dataservice.service */ "./src/app/shared/dataservice.service.ts");
var AuthService = /** @class */ (function () {
    function AuthService(http, router, toastr, dataService) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.dataService = dataService;
        this.endpoint = 'https://bandhan-laravel-api.herokuapp.com/public/api/v1';
        this.headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        this.currentUser = {};
        this.handleError = function (error) {
            var msg = '';
            _this.dataService.dismissLoder();
            _this.dataService.setloginLoader(false);
            if (error.error instanceof ErrorEvent) {
                // client-side error
                msg = error.error.message;
            }
            else {
                // server-side error
                msg = "Error Code: " + error.status + "\nMessage: " + error.message;
                _this.toastr.error(error.error.message);
                if (error.status == 401) {
                    _this.toastr.error("Unauthenticated");
                    _this.router.navigate(['login']);
                }
            }
            return rxjs_1.throwError(msg);
        };
    }
    // Sign-in
    AuthService.prototype.signIn = function (user) {
        var _this = this;
        // this.dataService.loader();
        // ${this.endpoint}
        this.dataService.setloginLoader(true);
        return this.http.post("https://bandhan.herokuapp.com/api/v1/login", user).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError)).subscribe(function (res) {
            // console.log("this is the loader begin")
            // this.dataService.dismissLoder()
            _this.dataService.setloginLoader(false);
            if (res.success != "1") {
                _this.toastr.error(res.message);
            }
            else {
                if (res.data.user_role.name == 'management' || res.data.user_role.name == 'administrator') {
                    _this.toastr.success(res.message);
                    _this.dataService.dismissLoder();
                    localStorage.setItem('access_token', res.data.api_token);
                    localStorage.setItem('user_name', res.data.name);
                    _this.currentUser = res;
                    _this.router.navigate(['dashboard']);
                }
                else {
                    _this.toastr.warning("No Privilege Assigned!");
                }
            }
        });
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('access_token');
    };
    AuthService.prototype.getUserName = function () {
        return localStorage.getItem('user_name');
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            var authToken = localStorage.getItem('access_token');
            return (authToken !== null) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.doLogout = function () {
        var removeToken = localStorage.removeItem('access_token');
        if (removeToken == null) {
            this.router.navigate(['login']);
        }
    };
    AuthService.ctorParameters = function () { return [
        { type: http_1.HttpClient },
        { type: router_1.Router },
        { type: ngx_toastr_1.ToastrService },
        { type: dataservice_service_1.DataService }
    ]; };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router,
            ngx_toastr_1.ToastrService,
            dataservice_service_1.DataService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/shared/authconfig.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/authconfig.interceptor.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth.service.ts");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: auth_service_1.AuthService }
    ]; };
    AuthInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;


/***/ }),

/***/ "./src/app/shared/common.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/common.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var ngx_spinner_1 = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
var app_constants_1 = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var http_wrapper_service_1 = __webpack_require__(/*! ./http/http-wrapper.service */ "./src/app/shared/http/http-wrapper.service.ts");
var CommonService = /** @class */ (function () {
    function CommonService(toastr, spinner, httpWrapper) {
        this.toastr = toastr;
        this.spinner = spinner;
        this.httpWrapper = httpWrapper;
    }
    CommonService.prototype.showSpinner = function () {
        this.spinner.show();
    };
    CommonService.prototype.hideSpinner = function () {
        this.spinner.hide();
    };
    CommonService.prototype.getCategoriesList = function () {
        var _this = this;
        this.showSpinner();
        return this.httpWrapper.get(app_constants_1.apiResources.categoriesList).map(function (res) {
            _this.hideSpinner();
            if (res) {
                return res;
            }
        }).toPromise()
            .catch(function (err) {
            _this.hideSpinner();
            _this.toastr.error('Cannot get Categories list');
            console.log('category list api error =====>>', err);
        });
    };
    CommonService.prototype.getInvoiceCategoryList = function () {
        var _this = this;
        this.showSpinner();
        return this.httpWrapper.get(app_constants_1.apiResources.invoiceCategories).map(function (res) {
            _this.hideSpinner();
            if (res) {
                return res;
            }
        }).toPromise()
            .catch(function (err) {
            _this.hideSpinner();
            _this.toastr.error('Cannot get invoice category list');
            console.log('invoice category list api error =====>>', err);
        });
    };
    CommonService.ctorParameters = function () { return [
        { type: ngx_toastr_1.ToastrService },
        { type: ngx_spinner_1.NgxSpinnerService },
        { type: http_wrapper_service_1.HttpWrapperService }
    ]; };
    CommonService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService,
            ngx_spinner_1.NgxSpinnerService,
            http_wrapper_service_1.HttpWrapperService])
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;


/***/ }),

/***/ "./src/app/shared/dataservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/dataservice.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var ngx_spinner_1 = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
var DataService = /** @class */ (function () {
    function DataService(http, router, toastr, spinner) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.spinner = spinner;
        // endpoint: string = 'https://bandhan-laravel-api.herokuapp.com/public/api/v1';
        this.endpoint = 'https://bandhan.herokuapp.com/api/v1';
        this.headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        this.currentUser = {};
        this.signInClicked = new rxjs_1.BehaviorSubject(false);
        // Error 
        this.handleError = function (error) {
            var msg = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                msg = error.error.message;
            }
            else {
                // server-side error
                msg = "Error Code: " + error.status + "\nMessage: " + error.message;
                // this.toastr.error(error.error.message);
                // if (error.status == 401) {
                //   this.toastr.error("Unauthenticated");
                //   this.router.navigate(['login']);
                // }
            }
            return rxjs_1.throwError(msg);
        };
    }
    DataService.prototype.setloginLoader = function (data) {
        this.signInClicked.next(data);
    };
    DataService.prototype.loader = function () {
        // this.spinner.show("mySpinner", {
        //   type: "line-scale-party",
        //   size: "large",
        //   bdColor: "rgba(0, 0, 0, 1)",
        //   color: "white",
        //   template: "<img src='https://thumbs.gfycat.com/RewardingDisfiguredAnnelid-size_restricted.gif' />"
        // });
        this.spinner.show();
    };
    DataService.prototype.dismissLoder = function () {
        this.spinner.hide();
    };
    DataService.prototype.getUsers = function (currentPage) {
        var api = this.endpoint + "/users?page=" + currentPage;
        return this.http.get(api, { headers: this.headers }).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.getCategories = function () {
        var api = this.endpoint + "/categories";
        return this.http.get(api, { headers: this.headers }).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.getStores = function () {
        var api = this.endpoint + "/stores/list";
        return this.http.get(api, { headers: this.headers }).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.addStore = function (form) {
        var api = this.endpoint + "/store/add";
        return this.http.post(api, form, { headers: this.headers }).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.getRoles = function () {
        var api = this.endpoint + "/users/roles";
        return this.http.get(api, { headers: this.headers }).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.addUser = function (user) {
        user.active = "1";
        var api = this.endpoint + "/users/store";
        return this.http.post(api, user, { headers: this.headers }).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.addStoreManager = function (user) {
        // user.active = "1";
        var api = this.endpoint + "/store-manager/create";
        // , { headers: this.headers }
        return this.http.post(api, user).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.schemeCreate = function (scheme) {
        console.log("this is the angular -=-=-=-=-=-= schemeCreate");
        // scheme.active = "1";
        var api = this.endpoint + "/scheme/create";
        return this.http.post(api, scheme, { headers: this.headers }).pipe(operators_1.map(function (res) {
            console.log(Response);
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.schemeUpdate = function (scheme) {
        console.log("this is the angular -=-=-=-=-=-= schemeUpdated");
        var api = this.endpoint + "/scheme/update";
        return this.http.post(api, scheme, { headers: this.headers }).pipe(operators_1.map(function (res) {
            console.log(Response);
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.getSchemes = function (scheme) {
        console.log("this is the angular -=-=-=-=-=-= schemeCreate");
        // scheme.active = "1";
        var api = this.endpoint + "/scheme/fetch";
        return this.http.post(api, scheme, { headers: this.headers }).pipe(operators_1.map(function (res) {
            console.log(Response);
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.getActivity = function () {
        console.log("this is the angular -=-=-=-=-=-= schemeCreate");
        // scheme.active = "1";
        var api = this.endpoint + "/activity/fetch";
        return this.http.post(api, { headers: this.headers }).pipe(operators_1.map(function (res) {
            console.log(Response);
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.deleteUsers = function (id) {
        console.log("this is the id of user =-=-=-=", id);
        var api = this.endpoint + "/users/delete";
        var data = {
            'user_id': id
        };
        return this.http.post(api, data, { headers: this.headers }).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.userDetails = function (id) {
        var api = this.endpoint + "/users/user-details";
        var data = {
            user_id: id
        };
        return this.http.post(api, data, { headers: this.headers }).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    //* Approval for the worker*/
    DataService.prototype.approvalStatus = function (storeId, clubId, userId) {
        var api = this.endpoint + "/stores/worker/assign-store";
        var data = {
            'store_id': storeId,
            'user_id': userId,
            'club_id': clubId,
        };
        return this.http.post(api, data, { headers: this.headers }).pipe(operators_1.map(function (res) {
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.updateActivity = function (statusId, activityId) {
        console.log("this is the angular -=-=-=-=-=-= schemeCreate");
        var api = this.endpoint + "/update/activity/status";
        var data = {
            'activity_id': activityId,
            'status_id': JSON.parse(statusId),
        };
        return this.http.post(api, data, { headers: this.headers }).pipe(operators_1.map(function (res) {
            console.log(Response);
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.disapproveUser = function (userData, status, disapproveMessage) {
        var api = this.endpoint + "/users/disapprove";
        var data = new FormData();
        data.append('user_id', userData.data.id);
        data.append('status', status);
        data.append('disapprove_message', disapproveMessage);
        // let data = {
        //   'activity_id': activityId,
        //   'status_id': JSON.parse(statusId),
        // }
        return this.http.post(api, data).pipe(operators_1.map(function (res) {
            console.log(Response);
            return res || {};
        }), operators_1.catchError(this.handleError));
    };
    DataService.ctorParameters = function () { return [
        { type: http_1.HttpClient },
        { type: router_1.Router },
        { type: ngx_toastr_1.ToastrService },
        { type: ngx_spinner_1.NgxSpinnerService }
    ]; };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router,
            ngx_toastr_1.ToastrService,
            ngx_spinner_1.NgxSpinnerService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./src/app/shared/http/http-wrapper.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/http/http-wrapper.service.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var app_constants_1 = __webpack_require__(/*! src/app/app.constants */ "./src/app/app.constants.ts");
__webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var HttpWrapperService = /** @class */ (function () {
    function HttpWrapperService(http) {
        this.http = http;
    }
    HttpWrapperService.prototype.createURL = function (url, options) {
        url = app_constants_1.apiResources.baseURL + url;
        if (options && options.uriParams) {
            url += "/";
            var index = 0;
            var length = Object.keys(options.uriParams).length;
            Object.keys(options.uriParams).forEach(function (key) {
                url.replace("{" + key + "}", options.uriParams[key]);
                if (++index != length) {
                    url += "/";
                }
            });
        }
        console.log('url ====>>>', url);
        return url;
    };
    HttpWrapperService.prototype.get = function (url, options) {
        url = this.createURL(url, options);
        return this.http.get(url, options);
    };
    HttpWrapperService.prototype.post = function (url, payload, options) {
        url = this.createURL(url, options);
        return this.http.post(url, payload, options);
    };
    HttpWrapperService.prototype.delete = function (url, options) {
        url = this.createURL(url);
        return this.http.delete(url, options);
    };
    HttpWrapperService.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    HttpWrapperService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpWrapperService);
    return HttpWrapperService;
}());
exports.HttpWrapperService = HttpWrapperService;
var HttpInputData = /** @class */ (function () {
    function HttpInputData() {
        this.headers = null;
        this.uriParams = null;
        this.params = null;
        this.authentication = false;
    }
    return HttpInputData;
}());
exports.HttpInputData = HttpInputData;


/***/ }),

/***/ "./src/app/shared/product.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/product.service.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var http_wrapper_service_1 = __webpack_require__(/*! ./http/http-wrapper.service */ "./src/app/shared/http/http-wrapper.service.ts");
var app_constants_1 = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var common_service_1 = __webpack_require__(/*! ./common.service */ "./src/app/shared/common.service.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var ProductService = /** @class */ (function () {
    function ProductService(httpWrapper, commonService, toastr) {
        this.httpWrapper = httpWrapper;
        this.commonService = commonService;
        this.toastr = toastr;
    }
    ProductService.prototype.addProduct = function (payload, productName) {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.post(app_constants_1.apiResources.createProduct, payload).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                _this.toastr.success("Product " + productName + " deleted");
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            _this.toastr.error('Error in add products');
            _this.commonService.hideSpinner();
            console.log('error in create product api =====>>>', err);
        });
    };
    ProductService.prototype.getAllProducts = function (page) {
        var _this = this;
        this.commonService.showSpinner();
        var httpInput = new http_wrapper_service_1.HttpInputData();
        var httpParam = new http_1.HttpParams();
        httpParam = httpParam.append('page', page);
        httpInput.params = httpParam;
        return this.httpWrapper.get(app_constants_1.apiResources.productList, httpInput).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            _this.toastr.error('Cannot get products list');
            _this.commonService.hideSpinner();
            console.log('error in product list api ====>>>', err);
        });
    };
    ProductService.prototype.deleteProduct = function (productID, productName) {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.delete(app_constants_1.apiResources.deleteProduct.replace('productID', productID)).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                _this.toastr.success("Product " + productName + " deleted");
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            _this.toastr.error("Cannot delete product " + productName);
            console.log('error in delete product api ====>>>>', err);
            _this.commonService.hideSpinner();
        });
    };
    ProductService.prototype.getProductDetails = function (productID) {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.get(app_constants_1.apiResources.getProduct.replace('productID', productID)).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            console.log('error in fetch product api ====>>>>', err);
            _this.commonService.hideSpinner();
        });
    };
    ProductService.prototype.updateProduct = function (payload, productID, options) {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.post(app_constants_1.apiResources.updateProduct.replace('productID', productID), payload, options).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            _this.toastr.error("Unable to update product");
            console.log('error in delete product api ====>>>>', err);
            _this.commonService.hideSpinner();
        });
    };
    ProductService.ctorParameters = function () { return [
        { type: http_wrapper_service_1.HttpWrapperService },
        { type: common_service_1.CommonService },
        { type: ngx_toastr_1.ToastrService }
    ]; };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_wrapper_service_1.HttpWrapperService,
            common_service_1.CommonService,
            ngx_toastr_1.ToastrService])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/app/shared/scheme.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/scheme.service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var http_wrapper_service_1 = __webpack_require__(/*! ./http/http-wrapper.service */ "./src/app/shared/http/http-wrapper.service.ts");
var common_service_1 = __webpack_require__(/*! ./common.service */ "./src/app/shared/common.service.ts");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var app_constants_1 = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var SchemeService = /** @class */ (function () {
    function SchemeService(httpWrapper, commonService, toastr) {
        this.httpWrapper = httpWrapper;
        this.commonService = commonService;
        this.toastr = toastr;
    }
    SchemeService.prototype.createScheme = function (payload, httpInput) {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.post(app_constants_1.apiResources.createScheme, payload, httpInput).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            console.log("error in create scheme api =====>>>", err);
            _this.commonService.hideSpinner();
            _this.toastr.error("Couldn't create scheme");
        });
    };
    SchemeService.prototype.getSchemeList = function (page) {
        var _this = this;
        this.commonService.showSpinner();
        var httpInput = new http_wrapper_service_1.HttpInputData();
        var httpParam = new http_1.HttpParams();
        httpParam.set('page', page);
        httpInput.params = httpParam;
        return this.httpWrapper.get(app_constants_1.apiResources.schemeList, httpInput).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            console.log("error in schemes fetch api =====>>", err);
            _this.toastr.error("Couldn't fetch schemes");
            _this.commonService.hideSpinner();
        });
    };
    SchemeService.prototype.deleteProduct = function (schemeID, schemeName) {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.delete(app_constants_1.apiResources.deleteScheme.replace('schemeID', schemeID)).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                _this.toastr.success("Scheme " + schemeName + " deleted");
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            _this.toastr.error("Cannot delete Scheme " + schemeName);
            console.log('error in delete scheme api ====>>>>', err);
            _this.commonService.hideSpinner();
        });
    };
    SchemeService.prototype.getSchemeDetails = function (schemeID) {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.get(app_constants_1.apiResources.fetchScheme.replace('schemeID', schemeID)).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            console.log('error in fetch scheme api ====>>>>', err);
            _this.commonService.hideSpinner();
        });
    };
    SchemeService.ctorParameters = function () { return [
        { type: http_wrapper_service_1.HttpWrapperService },
        { type: common_service_1.CommonService },
        { type: ngx_toastr_1.ToastrService }
    ]; };
    SchemeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_wrapper_service_1.HttpWrapperService,
            common_service_1.CommonService,
            ngx_toastr_1.ToastrService])
    ], SchemeService);
    return SchemeService;
}());
exports.SchemeService = SchemeService;


/***/ }),

/***/ "./src/app/shared/store.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/store.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var http_wrapper_service_1 = __webpack_require__(/*! ./http/http-wrapper.service */ "./src/app/shared/http/http-wrapper.service.ts");
var common_service_1 = __webpack_require__(/*! ./common.service */ "./src/app/shared/common.service.ts");
var app_constants_1 = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var StoreService = /** @class */ (function () {
    function StoreService(httpWrapper, commonService, toastr) {
        this.httpWrapper = httpWrapper;
        this.commonService = commonService;
        this.toastr = toastr;
    }
    StoreService.prototype.addStore = function (payload, options) {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.post(app_constants_1.apiResources.addStore, payload, options).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            _this.commonService.hideSpinner();
            console.log('error on create store api =====>>>>', err);
            _this.toastr.error('Cannot create store for now');
        });
    };
    StoreService.prototype.getStoreManagerList = function () {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.get(app_constants_1.apiResources.storeManagerList).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            console.log('error in store manager list api ====>>>', err);
            _this.commonService.hideSpinner();
            _this.toastr.error("Couldn't fetch store manager list");
        });
    };
    StoreService.prototype.getStoreList = function (page) {
        var _this = this;
        this.commonService.showSpinner();
        var httpInput = new http_wrapper_service_1.HttpInputData();
        var httpParam = new http_1.HttpParams();
        httpParam = httpParam.append('page', page);
        httpInput.params = httpParam;
        return this.httpWrapper.get(app_constants_1.apiResources.storeList, httpInput).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            console.log('error in store manager list api ====>>>', err);
            _this.commonService.hideSpinner();
            _this.toastr.error("Couldn't fetch store list");
        });
    };
    StoreService.prototype.deleteStore = function (storeID, storeName) {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.delete(app_constants_1.apiResources.deleteStore.replace('storeID', storeID)).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                _this.toastr.success("Product " + storeName + " deleted");
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            _this.toastr.error("Cannot delete product " + storeName);
            console.log('error in delete store api ====>>>>', err);
            _this.commonService.hideSpinner();
        });
    };
    StoreService.prototype.getStore = function (storeID) {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.get(app_constants_1.apiResources.getStore.replace('storeID', storeID)).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            console.log('error in get store api ====>>>>', err);
            _this.commonService.hideSpinner();
        });
    };
    StoreService.prototype.updateStore = function (payload, storeID) {
        var _this = this;
        this.commonService.showSpinner();
        return this.httpWrapper.post(app_constants_1.apiResources.updateStore.replace('storeID', storeID), payload).map(function (res) {
            _this.commonService.hideSpinner();
            if (res.success) {
                return res;
            }
            else {
                _this.toastr.error(res.message);
            }
        }).toPromise()
            .catch(function (err) {
            console.log('error in updating store api ====>>>>', err);
            _this.commonService.hideSpinner();
        });
    };
    StoreService.ctorParameters = function () { return [
        { type: http_wrapper_service_1.HttpWrapperService },
        { type: common_service_1.CommonService },
        { type: ngx_toastr_1.ToastrService }
    ]; };
    StoreService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_wrapper_service_1.HttpWrapperService,
            common_service_1.CommonService,
            ngx_toastr_1.ToastrService])
    ], StoreService);
    return StoreService;
}());
exports.StoreService = StoreService;


/***/ }),

/***/ "./src/app/userdetails/userdetails.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userdetails/userdetails.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".accordion {\n    background-color: #f44b4b;\n    color: #444;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 15px;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n}\n\n\n.accordion:after {\n    content: '\\002B';\n    color: #777;\n    font-weight: bold;\n    float: right;\n    margin-left: 5px;\n}\n\n\n.active:after {\n    content: \"\\2212\";\n}\n\n\n.panel {\n    padding: 0 18px;\n    background-color: white;\n    max-height: 0;\n    overflow: hidden;\n    -webkit-transition: max-height 0.2s ease-out;\n    transition: max-height 0.2s ease-out;\n}\n\n\n.avatar {\n    vertical-align: middle;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n\n.personalDetails {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding: 10px;\n}\n\n\n.container {\n    margin-left: 30px;\n}\n\n\n.line {\n    margin: 4px;\n    border: 0;\n    border-top: 2px solid rgb(221, 224, 228);\n}\n\n\n.col-md-4 {\n    font-weight: 600;\n    background-color: #adb5bd0d;\n    border-radius: 10px;\n}\n\n\n.info {\n    text-align: center;\n}\n\n\n.attribute {\n    color: red;\n}\n\n\n.avatarAdhar {\n    width: 75%;\n    height: 100px\n}\n\n\n.adharimage {\n    text-align: center;\n    max-width: 30%;\n}\n\n\n.btn {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n\n.button {\n    background-color: #4CAF50;\n    /* Green */\n    border: none;\n    color: white;\n    padding: 16px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    margin: 4px 2px;\n    -webkit-transition-duration: 0.4s;\n            transition-duration: 0.4s;\n    cursor: pointer;\n}\n\n\n.label {\n    text-align: center;\n    font-weight: 600;\n    color: #5e72e4;\n    background-color: #fbfbfc;\n}\n\n\n.button2 {\n    background-color: #08b93b;\n    color: black;\n    border: 2px solid #00ba368a;\n    border-radius: 15px;\n    color: white;\n}\n\n\n.button2:hover {\n    background-color: white;\n    color: black;\n}\n\n\n.button3 {\n    background-color: #f44336;\n    color: black;\n    border: 2px solid #f44336;\n    border-radius: 15px;\n\n}\n\n\n.button3:hover {\n    background-color: white;\n    color: black;\n}\n\n\n.modalBtn {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n\n.modal-body {\n    text-align: center;\n}\n\n\n.dropMenu {\n    font-weight: 600;\n}\n\n\n.dropdown {\n    margin-top: 20px;\n}\n\n\n.modal-title {\n    font-weight: bolder;\n    font-size: larger;\n}\n\n\n.selectBox {\n    width: 110%;\n}\n\n\n.yesBtn {\n    background-color: #079b32;\n    border-radius: 10px;\n    color: white;\n    width: 70px;\n    height: 40px;\n}\n\n\n.reasonsModal {\n    margin: 20px 0px 0px 0px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDRDQUFvQztJQUFwQyxvQ0FBb0M7QUFDeEM7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCx3Q0FBd0M7QUFDNUM7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxVQUFVO0lBQ1Y7QUFDSjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7O0FBS0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjs7QUFFdkI7OztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvcmRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDRiNGI7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuXG4uYWNjb3JkaW9uOmFmdGVyIHtcbiAgICBjb250ZW50OiAnXFwwMDJCJztcbiAgICBjb2xvcjogIzc3NztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmFjdGl2ZTphZnRlciB7XG4gICAgY29udGVudDogXCJcXDIyMTJcIjtcbn1cblxuLnBhbmVsIHtcbiAgICBwYWRkaW5nOiAwIDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWF4LWhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcbn1cblxuLmF2YXRhciB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wZXJzb25hbERldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4ubGluZSB7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMjIxLCAyMjQsIDIyOCk7XG59XG5cbi5jb2wtbWQtNCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkMGQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmluZm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmF0dHJpYnV0ZSB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmF2YXRhckFkaGFyIHtcbiAgICB3aWR0aDogNzUlO1xuICAgIGhlaWdodDogMTAwcHhcbn1cblxuLmFkaGFyaW1hZ2Uge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbn1cblxuXG5cblxuLmJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4uYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIC8qIEdyZWVuICovXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogNHB4IDJweDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzVlNzJlNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZjO1xufVxuXG5cbi5idXR0b24yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhiOTNiO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDBiYTM2OGE7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24yOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5idXR0b24zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZjQ0MzM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cbn1cblxuLmJ1dHRvbjM6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm1vZGFsQnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHJvcE1lbnUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kcm9wZG93biB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4uc2VsZWN0Qm94IHtcbiAgICB3aWR0aDogMTEwJTtcbn1cblxuLnllc0J0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3OWIzMjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5yZWFzb25zTW9kYWwge1xuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/userdetails/userdetails.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userdetails/userdetails.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var dataservice_service_1 = __webpack_require__(/*! ../shared/dataservice.service */ "./src/app/shared/dataservice.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var UserdetailsComponent = /** @class */ (function () {
    function UserdetailsComponent(route, tostr, fb, dataService, router) {
        var _this = this;
        this.route = route;
        this.tostr = tostr;
        this.fb = fb;
        this.dataService = dataService;
        this.router = router;
        this.userInfo = {};
        this.route.params.subscribe(function (params) {
            _this.user_id = params.id;
            console.log("this is the user id -=-=-=-=-", _this.user_id);
        });
    }
    UserdetailsComponent.prototype.ngOnInit = function () {
        this.userDetails(this.user_id);
        this.getStores();
        //*form start here */
        this.modalForm = this.fb.group({
            'club': new forms_1.FormControl('', forms_1.Validators.required),
            'store': new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.disapproveForm = this.fb.group({
            reason: new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    UserdetailsComponent.prototype.userDetails = function (user_id) {
        var _this = this;
        console.log("this is the userdetail function =-=-=-=-=", user_id);
        this.dataService.userDetails(this.user_id).subscribe(function (response) {
            console.log("this is the response of the=-=-=-= ", response);
            if (response) {
                _this.userInfo = response;
            }
        });
    };
    UserdetailsComponent.prototype.getStores = function () {
        var _this = this;
        // this.tostr.info("Loading...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
        this.dataService.getStores().subscribe(function (res) {
            _this.stores = res.data;
            console.log("this is the stores id -=-=-=-=-=-=", _this.stores);
        });
    };
    //* this is the function for the store click  */
    UserdetailsComponent.prototype.storeEvent = function ($event) {
        console.log("this is the store id click by admin-=-=-=-=-", $event);
        this.storeId = $event;
    };
    //* this is the function for the club click  */
    UserdetailsComponent.prototype.clubEvent = function ($event) {
        console.log("this is the store id click by admin-=-=-=-=-", $event);
        this.clubId = $event;
    };
    UserdetailsComponent.prototype.confirmStatus = function () {
        var _this = this;
        console.log("this is the next page on clicking -=-=-=-=");
        this.dataService.approvalStatus(this.storeId, this.clubId, this.user_id).subscribe(function (data) {
            console.log("this is the consirmstatus data-=-=-=", data);
            if (data) {
                _this.tostr.info("Store Assigned", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
                $("#myModal").modal("hide");
                _this.userDetails(_this.user_id);
            }
        }, function (err) {
            console.log(err);
            $("#myModal").modal("hide");
        });
    };
    UserdetailsComponent.prototype.disapproveConfirm = function () {
        var _this = this;
        if (this.disapproveForm.invalid) {
            this.tostr.info("Please enter reason...", "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
            return;
        }
        console.log('this.userInfo ===>>>', this.userInfo);
        this.dataService.disapproveUser(this.userInfo, 0, this.disapproveForm.value.reason).subscribe(function (success) {
            console.log('success ==>>', success);
            _this.tostr.info(success.message, "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
            if (success.success === 1) {
                _this.userDetails(_this.user_id);
                $('#myDisModal').modal('hide');
            }
        }, function (error) {
            _this.tostr.info(error.error.error.message, "", { progressBar: true, progressAnimation: 'increasing', timeOut: 1000 });
            console.log('error ==>>', error);
        });
    };
    UserdetailsComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute },
        { type: ngx_toastr_1.ToastrService },
        { type: forms_1.FormBuilder },
        { type: dataservice_service_1.DataService },
        { type: router_1.Router }
    ]; };
    UserdetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-userdetails',
            template: __importDefault(__webpack_require__(/*! raw-loader!./userdetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userdetails/userdetails.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./userdetails.component.css */ "./src/app/userdetails/userdetails.component.css")).default]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, ngx_toastr_1.ToastrService, forms_1.FormBuilder, dataservice_service_1.DataService, router_1.Router])
    ], UserdetailsComponent);
    return UserdetailsComponent;
}());
exports.UserdetailsComponent = UserdetailsComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    baseURL: 'https://bandhan.herokuapp.com/api/v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!

=========================================================
* Argon Dashboard Angular - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Data/Bandhan/bandhan-admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map