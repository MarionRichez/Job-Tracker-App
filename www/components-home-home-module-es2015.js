(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Home</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"logout()\">\r\n        <ion-icon name=\"log-out-outline\"> </ion-icon\r\n      ></ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-item lines=\"full\">\r\n    <ion-label>Status</ion-label>\r\n    <ion-select\r\n      okText=\"Ok\"\r\n      cancelText=\"Cancel\"\r\n      [(ngModel)]=\"status\"\r\n      (ionChange)=\"getByStatus(status)\"\r\n    >\r\n      <ion-select-option value=\"all\">All</ion-select-option>\r\n      <ion-select-option value=\"Whishlist\">Whishlist</ion-select-option>\r\n      <ion-select-option value=\"Pending\">Pending</ion-select-option>\r\n      <ion-select-option value=\"Offer\">Offer</ion-select-option>\r\n      <ion-select-option value=\"Denied\">Denied</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button [routerLink]=\"['/add-application']\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <div *ngIf=\"visibility\">\r\n    <ion-list lines=\"full\">\r\n      <ion-item-sliding *ngFor=\"let application of applications\">\r\n        <ion-item [routerLink]=\"['/application/', application.payload.doc.id]\">\r\n          <ion-label>\r\n            <h2>{{ application.payload.doc.data().position }}</h2>\r\n            <h3>{{ application.payload.doc.data().company }}</h3>\r\n            <p>{{ application.payload.doc.data().status }}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item-options side=\"start\">\r\n          <ion-item-option\r\n            [routerLink]=\"['/edit-application/', application.payload.doc.id]\"\r\n          >\r\n            <ion-icon slot=\"icon-only\" name=\"pencil\"></ion-icon>\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option\r\n            color=\"danger\"\r\n            (click)=\"deleteApplication(application.payload.doc.id)\"\r\n          >\r\n            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n          </ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/components/home/home-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/home/home-routing.module.ts ***!
  \********************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/components/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/components/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/components/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/components/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/components/home/home.page.scss":
/*!************************************************!*\
  !*** ./src/app/components/home/home.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/home/home.page.ts":
/*!**********************************************!*\
  !*** ./src/app/components/home/home.page.ts ***!
  \**********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_application_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/application-service.service */ "./src/app/service/application-service.service.ts");
/* harmony import */ var src_app_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth-service.service */ "./src/app/service/auth-service.service.ts");




let HomePage = class HomePage {
    constructor(applicationService, authService) {
        this.applicationService = applicationService;
        this.authService = authService;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getApplications();
    }
    getApplications() {
        this.applicationService
            .getAllApplication()
            .subscribe((data) => {
            this.applications = data;
        });
        this.visibility = true;
    }
    deleteApplication(id) {
        this.applicationService.deleteApplication(id);
    }
    logout() {
        this.authService.logout();
    }
    getByStatus(selectValue) {
        if (selectValue == "all") {
            this.getApplications();
        }
        else {
            this.applicationService
                .getApplicationByStatus(selectValue)
                .subscribe((data) => {
                this.applications = data;
            });
        }
        this.visibility = true;
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_service_application_service_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"] },
    { type: src_app_service_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/components/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=components-home-home-module-es2015.js.map