(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-add-application-add-application-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-application/add-application.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-application/add-application.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>New Application</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <form [formGroup]=\"applicationForm\" (ngSubmit)=\"addApplication()\">\r\n    <ion-list>\r\n      <ion-item lines=\"full\">\r\n        <ion-label>Status</ion-label>\r\n        <ion-select okText=\"Ok\" cancelText=\"Cancel\" formControlName=\"status\">\r\n          <ion-select-option value=\"Whishlist\">Whishlist</ion-select-option>\r\n          <ion-select-option value=\"Pending\">Pending</ion-select-option>\r\n          <ion-select-option value=\"Offer\">Offer</ion-select-option>\r\n          <ion-select-option value=\"Denied\">Denied</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-item lines=\"full\">\r\n      <ion-label>Company</ion-label>\r\n      <ion-input\r\n        class=\"ion-text-right\"\r\n        type=\"text\"\r\n        formControlName=\"company\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label>Position</ion-label>\r\n      <ion-input\r\n        class=\"ion-text-right\"\r\n        type=\"text\"\r\n        formControlName=\"position\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label>Url</ion-label>\r\n      <ion-input\r\n        type=\"url\"\r\n        class=\"ion-text-right\"\r\n        formControlName=\"url\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label>Date</ion-label>\r\n      <ion-datetime\r\n        class=\"ion-text-right\"\r\n        displayFormat=\"DD/MM/YYYY\"\r\n        formControlName=\"date\"\r\n      ></ion-datetime>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"stacked\">Notes</ion-label>\r\n      <ion-textarea autoGrow=\"true\" formControlName=\"notes\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-button\r\n      expand=\"block\"\r\n      type=\"submit\"\r\n      [disabled]=\"applicationForm.invalid\"\r\n      >Submit</ion-button\r\n    >\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/components/add-application/add-application-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/add-application/add-application-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AddApplicationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApplicationPageRoutingModule", function() { return AddApplicationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_application_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-application.page */ "./src/app/components/add-application/add-application.page.ts");




const routes = [
    {
        path: '',
        component: _add_application_page__WEBPACK_IMPORTED_MODULE_3__["AddApplicationPage"]
    }
];
let AddApplicationPageRoutingModule = class AddApplicationPageRoutingModule {
};
AddApplicationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddApplicationPageRoutingModule);



/***/ }),

/***/ "./src/app/components/add-application/add-application.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/add-application/add-application.module.ts ***!
  \**********************************************************************/
/*! exports provided: AddApplicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApplicationPageModule", function() { return AddApplicationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_application_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-application-routing.module */ "./src/app/components/add-application/add-application-routing.module.ts");
/* harmony import */ var _add_application_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-application.page */ "./src/app/components/add-application/add-application.page.ts");







let AddApplicationPageModule = class AddApplicationPageModule {
};
AddApplicationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_application_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddApplicationPageRoutingModule"]
        ],
        declarations: [_add_application_page__WEBPACK_IMPORTED_MODULE_6__["AddApplicationPage"]]
    })
], AddApplicationPageModule);



/***/ }),

/***/ "./src/app/components/add-application/add-application.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/add-application/add-application.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWFwcGxpY2F0aW9uL2FkZC1hcHBsaWNhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/add-application/add-application.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/add-application/add-application.page.ts ***!
  \********************************************************************/
/*! exports provided: AddApplicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApplicationPage", function() { return AddApplicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_application_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/application-service.service */ "./src/app/service/application-service.service.ts");





let AddApplicationPage = class AddApplicationPage {
    constructor(formBuilder, applicationService, route) {
        this.formBuilder = formBuilder;
        this.applicationService = applicationService;
        this.route = route;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.applicationForm = this.formBuilder.group({
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            position: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            notes: ['']
        });
    }
    addApplication() {
        if (!this.applicationForm.invalid) {
            this.applicationService.addApplication(this.applicationForm.value);
            this.route.navigate(["home"]);
        }
    }
};
AddApplicationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_application_service_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddApplicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-application',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-application.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-application/add-application.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-application.page.scss */ "./src/app/components/add-application/add-application.page.scss")).default]
    })
], AddApplicationPage);



/***/ })

}]);
//# sourceMappingURL=components-add-application-add-application-module-es2015.js.map