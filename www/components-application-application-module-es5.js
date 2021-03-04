(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-application-application-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/application/application.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/application/application.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsApplicationApplicationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{application.company}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [routerLink]=\"['/home']\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-item lines=\"none\">\n    <ion-label color=\"tertiary\">Status</ion-label>\n    <p>{{application.status}}</p>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label color=\"tertiary\">Company</ion-label>\n    <p>{{application.company}}</p>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label color=\"tertiary\">Position</ion-label>\n    <p>{{application.position}}</p>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label color=\"tertiary\">Url</ion-label>\n    <a href=\"{{application.url}}\">Link</a>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label color=\"tertiary\">Date</ion-label>\n    <p>{{application.date | date: 'MMM d, y'}}</p>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label position=\"stacked\" color=\"tertiary\">Notes</ion-label>\n    <ion-textarea\n      autoGrow=\"true\"\n      readonly\n      value=\"{{application.notes}}\"\n    ></ion-textarea>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-button\n          color=\"primary\"\n          expand=\"block\"\n          [routerLink]=\"['/add-interview/', id]\"\n        >\n          Add\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-button\n          expand=\"block\"\n          color=\"light\"\n          (click)=\"toggle()\"\n          [disabled]=\"interviews == false\"\n        >\n          {{btn_name}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngIf=\"show_list\">\n    <ion-item-sliding *ngFor=\"let interview of interviews\">\n      <ion-item\n        lines=\"full\"\n        [routerLink]=\"['/interview/', interview.payload.doc.id, id]\"\n      >\n        <ion-label>\n          <h2>{{ interview.payload.doc.data().platform }} Interview</h2>\n          <p>{{ interview.payload.doc.data().date | date: 'MMM d, y' }}</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"start\">\n        <ion-item-option\n          [routerLink]=\"['/edit-interview/', interview.payload.doc.id, id]\"\n        >\n          <ion-icon slot=\"icon-only\" name=\"pencil\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option\n          color=\"danger\"\n          (click)=\"deleteInterview(interview.payload.doc.id)\"\n        >\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/components/application/application-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/components/application/application-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ApplicationPageRoutingModule */

    /***/
    function srcAppComponentsApplicationApplicationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationPageRoutingModule", function () {
        return ApplicationPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _application_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./application.page */
      "./src/app/components/application/application.page.ts");

      var routes = [{
        path: '',
        component: _application_page__WEBPACK_IMPORTED_MODULE_3__["ApplicationPage"]
      }];

      var ApplicationPageRoutingModule = function ApplicationPageRoutingModule() {
        _classCallCheck(this, ApplicationPageRoutingModule);
      };

      ApplicationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ApplicationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/components/application/application.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/application/application.module.ts ***!
      \**************************************************************/

    /*! exports provided: ApplicationPageModule */

    /***/
    function srcAppComponentsApplicationApplicationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationPageModule", function () {
        return ApplicationPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _application_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./application-routing.module */
      "./src/app/components/application/application-routing.module.ts");
      /* harmony import */


      var _application_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./application.page */
      "./src/app/components/application/application.page.ts");

      var ApplicationPageModule = function ApplicationPageModule() {
        _classCallCheck(this, ApplicationPageModule);
      };

      ApplicationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _application_routing_module__WEBPACK_IMPORTED_MODULE_5__["ApplicationPageRoutingModule"]],
        declarations: [_application_page__WEBPACK_IMPORTED_MODULE_6__["ApplicationPage"]]
      })], ApplicationPageModule);
      /***/
    },

    /***/
    "./src/app/components/application/application.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/components/application/application.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsApplicationApplicationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwbGljYXRpb24vYXBwbGljYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/application/application.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/components/application/application.page.ts ***!
      \************************************************************/

    /*! exports provided: ApplicationPage */

    /***/
    function srcAppComponentsApplicationApplicationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationPage", function () {
        return ApplicationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_service_application_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/service/application-service.service */
      "./src/app/service/application-service.service.ts");
      /* harmony import */


      var src_app_service_interview_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/interview-service.service */
      "./src/app/service/interview-service.service.ts");

      var ApplicationPage = /*#__PURE__*/function () {
        function ApplicationPage(actRoute, applicationService, interviewService) {
          _classCallCheck(this, ApplicationPage);

          this.actRoute = actRoute;
          this.applicationService = applicationService;
          this.interviewService = interviewService;
          this.application = {};
          this.show_list = false;
          this.btn_name = "Show";
        }

        _createClass(ApplicationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.actRoute.snapshot.paramMap.get("id");
            this.getApplicationById();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.interviewService.getAllInterviews(this.id).subscribe(function (data) {
              _this.interviews = data;
            });
          }
        }, {
          key: "getApplicationById",
          value: function getApplicationById() {
            var _this2 = this;

            this.applicationService.getApplicationById(this.id).subscribe(function (data) {
              _this2.application.status = data["status"];
              _this2.application.company = data["company"];
              _this2.application.position = data["position"];
              _this2.application.url = data["url"];
              _this2.application.date = data["date"];
              _this2.application.notes = data["notes"];
            });
          }
        }, {
          key: "deleteInterview",
          value: function deleteInterview(id) {
            this.interviewService.deleteInterview(this.id, id);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.show_list = !this.show_list;

            if (this.show_list) {
              this.btn_name = "Hide";
            } else {
              this.btn_name = "Show";
            }
          }
        }]);

        return ApplicationPage;
      }();

      ApplicationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_service_application_service_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]
        }, {
          type: src_app_service_interview_service_service__WEBPACK_IMPORTED_MODULE_4__["InterviewService"]
        }];
      };

      ApplicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-application',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./application.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/application/application.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./application.page.scss */
        "./src/app/components/application/application.page.scss"))["default"]]
      })], ApplicationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-application-application-module-es5.js.map