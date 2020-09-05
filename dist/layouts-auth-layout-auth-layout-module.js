(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <!--   <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Welcome!</h1>\n   <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p> \n        </div>\n      </div>\n    </div> -->\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-7\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <!--    <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-3\"><small>Sign in with</small></div>\n          <div class=\"btn-wrapper text-center\">\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n              <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/github.svg\"></span>\n              <span class=\"btn-inner--text\">Github</span>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n              <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/google.svg\"></span>\n              <span class=\"btn-inner--text\">Google</span>\n            </a>\n          </div>\n        </div> -->\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small>sign in with credentials</small>\n          </div>\n          <form class=\"form-signin\" [formGroup]=\"signinForm\" (ngSubmit)=\"loginUser()\">\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Email\" formControlName=\"email\" placeholder=\"Enter email\"\n                  required type=\"email\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Password\" formControlName=\"password\"\n                  placeholder=\"Enter password\" required type=\"password\">\n              </div>\n            </div>\n            <!--     <div class=\"custom-control custom-control-alternative custom-checkbox\">\n              <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                <span class=\"text-muted\">Remember me</span>\n              </label>\n            </div> -->\n            <div class=\"text-center\">\n              <button type=\"submit\" class=\"btn btn-primary my-4 w-100px\" [disabled]=\"signinForm?.disabled\">\n                <span *ngIf=\"!signclicked\"> Sign in </span>\n                <i *ngIf=\"signclicked\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <!--   <div class=\"row mt-3\">\n        <div class=\"col-6\">\n          <a href=\"javascript:void(0)\" class=\"text-light\"><small>Forgot password?</small></a>\n        </div>\n        <div class=\"col-6 text-right\">\n          <a href=\"javascript:void(0)\" class=\"text-light\"><small>Create new account</small></a>\n        </div>\n      </div> -->\n    </div>\n  </div>\n  <!-- <ngx-spinner bdColor=\"rgba(0, 0, 0, 1)\">\n    template=\"<img src='https://thumbs.gfycat.com/RewardingDisfiguredAnnelid-size_restricted.gif' />\"\n  </ngx-spinner> -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Welcome!</h1>\n          <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <!-- Table -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6 col-md-8\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-4\"><small>Sign up with</small></div>\n          <div class=\"text-center\">\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/github.svg\"></span>\n              <span class=\"btn-inner--text\">Github</span>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/google.svg\"></span>\n              <span class=\"btn-inner--text\">Google</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small>Or sign up with credentials</small>\n          </div>\n          <form role=\"form\">\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Name\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\n              </div>\n            </div>\n            <div class=\"text-muted font-italic\"><small>password strength: <span class=\"text-success font-weight-700\">strong</span></small></div>\n            <div class=\"row my-4\">\n              <div class=\"col-12\">\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                  <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\n                  <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                    <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"button\" class=\"btn btn-primary mt-4\">Create account</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var auth_layout_routing_1 = __webpack_require__(/*! ./auth-layout.routing */ "./src/app/layouts/auth-layout/auth-layout.routing.ts");
var login_component_1 = __webpack_require__(/*! ../../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
var register_component_1 = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");
var ngx_spinner_1 = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(auth_layout_routing_1.AuthLayoutRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_spinner_1.NgxSpinnerModule
            ],
            declarations: [
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());
exports.AuthLayoutModule = AuthLayoutModule;


/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = __webpack_require__(/*! ../../pages/login/login.component */ "./src/app/pages/login/login.component.ts");
var register_component_1 = __webpack_require__(/*! ../../pages/register/register.component */ "./src/app/pages/register/register.component.ts");
exports.AuthLayoutRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent }
];


/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".w-100px {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RhdGEvQmFuZGhhbi9iYW5kaGFuLWFkbWluL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudy0xMDBweCB7XG4gICAgd2lkdGg6IDEwMHB4O1xufSIsIi53LTEwMHB4IHtcbiAgd2lkdGg6IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
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
var auth_service_1 = __webpack_require__(/*! ./../../shared/auth.service */ "./src/app/shared/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var dataservice_service_1 = __webpack_require__(/*! src/app/shared/dataservice.service */ "./src/app/shared/dataservice.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, dataService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.dataService = dataService;
        this.signclicked = false;
        this.signinForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.signinForm.disable();
        this.signclicked = true;
        this.authService.signIn(this.signinForm.value);
        this.subscription = this.dataService.signInClicked.subscribe(function (data) {
            if (data == false) {
                _this.signclicked = false;
                _this.signinForm.enable();
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: forms_1.FormBuilder },
        { type: auth_service_1.AuthService },
        { type: router_1.Router },
        { type: dataservice_service_1.DataService }
    ]; };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_service_1.AuthService,
            router_1.Router,
            dataservice_service_1.DataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map