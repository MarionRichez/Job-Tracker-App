(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-edit-interview-edit-interview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-interview/edit-interview.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-interview/edit-interview.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>edit-interview</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <form [formGroup]=\"interviewForm\" (ngSubmit)=\"submit()\">\r\n    <ion-item lines=\"full\">\r\n      <ion-label>Recruiter</ion-label>\r\n      <ion-input\r\n        class=\"ion-text-right\"\r\n        type=\"text\"\r\n        formControlName=\"recruiter\"\r\n        required\r\n        value=\"{{interview.recruiter}}\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-list>\r\n      <ion-item lines=\"full\">\r\n        <ion-label>Platform</ion-label>\r\n        <ion-select\r\n          okText=\"Ok\"\r\n          cancelText=\"Cancel\"\r\n          formControlName=\"platform\"\r\n          value=\"{{interview.platform}}\"\r\n        >\r\n          <ion-select-option value=\"Phone\">Phone</ion-select-option>\r\n          <ion-select-option value=\"Vidéo\">Vidéo</ion-select-option>\r\n          <ion-select-option value=\"Face-to-face\">\r\n            Face-to-face\r\n          </ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n    <ion-item lines=\"full\">\r\n      <ion-label>Date</ion-label>\r\n      <ion-datetime\r\n        class=\"ion-text-right\"\r\n        displayFormat=\"DD/MM/YYYY\"\r\n        formControlName=\"date\"\r\n        value=\"{{interview.date}}\"\r\n      ></ion-datetime>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"stacked\">Notes</ion-label>\r\n      <ion-textarea\r\n        autoGrow=\"true\"\r\n        formControlName=\"notes\"\r\n        value=\"{{interview.notes}}\"\r\n      ></ion-textarea>\r\n    </ion-item>\r\n    <ion-button expand=\"block\" type=\"submit\" [disabled]=\"interviewForm.invalid\"\r\n      >Submit</ion-button\r\n    >\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/components/edit-interview/edit-interview-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/edit-interview/edit-interview-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: EditInterviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInterviewPageRoutingModule", function() { return EditInterviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_interview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-interview.page */ "./src/app/components/edit-interview/edit-interview.page.ts");




const routes = [
    {
        path: '',
        component: _edit_interview_page__WEBPACK_IMPORTED_MODULE_3__["EditInterviewPage"]
    }
];
let EditInterviewPageRoutingModule = class EditInterviewPageRoutingModule {
};
EditInterviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditInterviewPageRoutingModule);



/***/ }),

/***/ "./src/app/components/edit-interview/edit-interview.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-interview/edit-interview.module.ts ***!
  \********************************************************************/
/*! exports provided: EditInterviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInterviewPageModule", function() { return EditInterviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_interview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-interview-routing.module */ "./src/app/components/edit-interview/edit-interview-routing.module.ts");
/* harmony import */ var _edit_interview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-interview.page */ "./src/app/components/edit-interview/edit-interview.page.ts");







let EditInterviewPageModule = class EditInterviewPageModule {
};
EditInterviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_interview_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditInterviewPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_edit_interview_page__WEBPACK_IMPORTED_MODULE_6__["EditInterviewPage"]]
    })
], EditInterviewPageModule);



/***/ }),

/***/ "./src/app/components/edit-interview/edit-interview.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-interview/edit-interview.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1pbnRlcnZpZXcvZWRpdC1pbnRlcnZpZXcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/edit-interview/edit-interview.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/edit-interview/edit-interview.page.ts ***!
  \******************************************************************/
/*! exports provided: EditInterviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditInterviewPage", function() { return EditInterviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_interview_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/interview-service.service */ "./src/app/service/interview-service.service.ts");





let EditInterviewPage = class EditInterviewPage {
    constructor(actRoute, formBuilder, interviewService) {
        this.actRoute = actRoute;
        this.formBuilder = formBuilder;
        this.interviewService = interviewService;
        this.interview = {};
        this.interviewId = this.actRoute.snapshot.paramMap.get("id1");
        this.applicationId = this.actRoute.snapshot.paramMap.get("id2");
    }
    ngOnInit() {
        this.initForm();
        this.getInterview();
    }
    getInterview() {
        this.interviewService
            .getInterviewsById(this.applicationId, this.interviewId)
            .subscribe(data => {
            this.interview.recruiter = data["recruiter"];
            this.interview.platform = data["platform"];
            this.interview.date = data["date"];
            this.interview.notes = data["notes"];
        });
    }
    initForm() {
        this.interviewForm = this.formBuilder.group({
            recruiter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            platform: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            notes: ['']
        });
    }
    submit() {
        if (!this.interviewForm.invalid) {
            this.interviewService.updateInterview(this.applicationId, this.interviewId, this.interviewForm.value);
        }
    }
};
EditInterviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_interview_service_service__WEBPACK_IMPORTED_MODULE_4__["InterviewService"] }
];
EditInterviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-interview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-interview.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-interview/edit-interview.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-interview.page.scss */ "./src/app/components/edit-interview/edit-interview.page.scss")).default]
    })
], EditInterviewPage);



/***/ })

}]);
//# sourceMappingURL=components-edit-interview-edit-interview-module-es2015.js.map