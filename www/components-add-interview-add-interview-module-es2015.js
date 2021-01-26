(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-add-interview-add-interview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-interview/add-interview.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-interview/add-interview.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>New Interview</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <form [formGroup]=\"interviewForm\" (ngSubmit)=\"submit()\">\n    <ion-item lines=\"full\">\n      <ion-label>Recruiter</ion-label>\n      <ion-input\n        class=\"ion-text-right\"\n        type=\"text\"\n        formControlName=\"recruiter\"\n        required\n      ></ion-input>\n    </ion-item>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label>Platform</ion-label>\n        <ion-select okText=\"Ok\" cancelText=\"Cancel\" formControlName=\"platform\">\n          <ion-select-option value=\"Phone\">Phone</ion-select-option>\n          <ion-select-option value=\"Vidéo\">Vidéo</ion-select-option>\n          <ion-select-option value=\"Face-to-face\">\n            Face-to-face\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-item lines=\"full\">\n      <ion-label>Date</ion-label>\n      <ion-datetime\n        class=\"ion-text-right\"\n        displayFormat=\"DD/MM/YYYY\"\n        formControlName=\"date\"\n      ></ion-datetime>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Notes</ion-label>\n      <ion-textarea autoGrow=\"true\" formControlName=\"notes\"></ion-textarea>\n    </ion-item>\n    <ion-button expand=\"block\" type=\"submit\" [disabled]=\"interviewForm.invalid\"\n      >Submit</ion-button\n    >\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/add-interview/add-interview-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/add-interview/add-interview-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AddInterviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInterviewPageRoutingModule", function() { return AddInterviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_interview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-interview.page */ "./src/app/components/add-interview/add-interview.page.ts");




const routes = [
    {
        path: '',
        component: _add_interview_page__WEBPACK_IMPORTED_MODULE_3__["AddInterviewPage"]
    }
];
let AddInterviewPageRoutingModule = class AddInterviewPageRoutingModule {
};
AddInterviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddInterviewPageRoutingModule);



/***/ }),

/***/ "./src/app/components/add-interview/add-interview.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/add-interview/add-interview.module.ts ***!
  \******************************************************************/
/*! exports provided: AddInterviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInterviewPageModule", function() { return AddInterviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_interview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-interview-routing.module */ "./src/app/components/add-interview/add-interview-routing.module.ts");
/* harmony import */ var _add_interview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-interview.page */ "./src/app/components/add-interview/add-interview.page.ts");







let AddInterviewPageModule = class AddInterviewPageModule {
};
AddInterviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_interview_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddInterviewPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_add_interview_page__WEBPACK_IMPORTED_MODULE_6__["AddInterviewPage"]]
    })
], AddInterviewPageModule);



/***/ }),

/***/ "./src/app/components/add-interview/add-interview.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/add-interview/add-interview.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWludGVydmlldy9hZGQtaW50ZXJ2aWV3LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/add-interview/add-interview.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/add-interview/add-interview.page.ts ***!
  \****************************************************************/
/*! exports provided: AddInterviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInterviewPage", function() { return AddInterviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_calendar_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/calendar-service.service */ "./src/app/service/calendar-service.service.ts");
/* harmony import */ var src_app_service_interview_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/interview-service.service */ "./src/app/service/interview-service.service.ts");






let AddInterviewPage = class AddInterviewPage {
    constructor(actRoute, formBuilder, interviewService, calendar) {
        this.actRoute = actRoute;
        this.formBuilder = formBuilder;
        this.interviewService = interviewService;
        this.calendar = calendar;
    }
    ngOnInit() {
        this.initForm();
        this.calendar.createCalendar("Entretien");
    }
    initForm() {
        this.id = this.actRoute.snapshot.paramMap.get("id");
        this.interviewForm = this.formBuilder.group({
            recruiter: ['John Doe', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            platform: ['Phone', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ['2021-01-23T15:43:06.450+01:00', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            notes: ['Get CV']
        });
    }
    submit() {
        if (!this.interviewForm.invalid) {
            this.interviewService.addInterview(this.id, this.interviewForm.value);
        }
    }
    createEvent() {
        this.calendar.createEvent(`${this.interviewForm.value.platform} interview`, "", this.interviewForm.value.notes, this.interviewForm.value.date, this.interviewForm.value.date);
    }
};
AddInterviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_interview_service_service__WEBPACK_IMPORTED_MODULE_5__["InterviewService"] },
    { type: src_app_service_calendar_service_service__WEBPACK_IMPORTED_MODULE_4__["CalendarService"] }
];
AddInterviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-interview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-interview.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-interview/add-interview.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-interview.page.scss */ "./src/app/components/add-interview/add-interview.page.scss")).default]
    })
], AddInterviewPage);



/***/ })

}]);
//# sourceMappingURL=components-add-interview-add-interview-module-es2015.js.map