(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-account-account-module"],{

/***/ "./src/app/modules/account/account-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/account/account-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.component */ "./src/app/modules/account/account/account.component.ts");




var routes = [
    { path: '', component: _account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"] }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/account/account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/modules/account/account-routing.module.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account.component */ "./src/app/modules/account/account/account.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            exports: [_account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/modules/account/account/account.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/account/account/account.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*used styles from signup-page.component*/\r\n\r\n.form > #cancel-btn {\r\n  background-color: indianred;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hY2NvdW50L2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5Qzs7QUFFekM7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FjY291bnQvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnVzZWQgc3R5bGVzIGZyb20gc2lnbnVwLXBhZ2UuY29tcG9uZW50Ki9cclxuXHJcbi5mb3JtID4gI2NhbmNlbC1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluZGlhbnJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/account/account/account.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/account/account/account.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"!showChange;else otherDD\" class=\"form\">\r\n  <h2>Your account data</h2>\r\n  <hr>\r\n  <label><b>Login:</b></label>\r\n  <div>{{user.username}}</div>\r\n  <label><b>Email:</b></label>\r\n  <div>{{user.email}}</div>\r\n  <button (click)=\"showChange = true\">Change</button>\r\n</div>\r\n\r\n<ng-template #otherDD>\r\n\r\n  <form #newDataForm='ngForm' class=\"form\">\r\n    <h2>Change account data</h2>\r\n    <p>Please, enter new account data.<br>\r\n      If you change the email, it will require a confirmation.</p>\r\n    <hr>\r\n    <label><b>New login:</b></label>\r\n    <input\r\n      [(ngModel)]=\"basicData.username\"\r\n      [ngStyle]=\"{border: usernameInp.invalid && usernameInp.dirty ? '2px solid red' : '2px solid green'}\"\r\n      #usernameInp='ngModel'\r\n      required pattern=\"{{dataService.passLoginRegExp.source}}\"\r\n      placeholder=\"3-20 latin letters/numbers\"\r\n      size=\"25\"\r\n      type=\"text\"\r\n      name=\"username\"\r\n      autocomplete=\"off\">\r\n    <label><b>New email:</b></label>\r\n    <input\r\n      [(ngModel)]=\"basicData.email\"\r\n      [ngStyle]=\"{border: emailInp.invalid && emailInp.dirty? '2px solid red' : '2px solid green'}\"\r\n      #emailInp='ngModel'\r\n      required pattern=\"{{dataService.emailRegExp.source}}\"\r\n      placeholder=\"email\"\r\n      size=\"25\"\r\n      type=\"text\"\r\n      name=\"email\"\r\n      autocomplete=\"off\">\r\n    <label><b>New password:</b></label>\r\n    <input\r\n      [(ngModel)]=\"basicData.password\"\r\n      [ngStyle]=\"{border: passwordInp.invalid && passwordInp.dirty? '2px solid red' : '2px solid green'}\"\r\n      #passwordInp='ngModel'\r\n      required pattern=\"{{dataService.passLoginRegExp.source}}\"\r\n      placeholder=\"3-20 latin letters/numbers\"\r\n      size=\"25\"\r\n      type=\"password\"\r\n      name=\"password\">\r\n    <button\r\n      [disabled]=\"newDataForm.invalid\"\r\n      (click)=\"updateAccount()\">Save changes\r\n    </button>\r\n    <button (click)=\"showChange=false\" id=\"cancel-btn\">Cancel</button>\r\n  </form>\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/modules/account/account/account.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/account/account/account.component.ts ***!
  \**************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _models_BasicData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/BasicData */ "./src/app/models/BasicData.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AccountComponent = /** @class */ (function () {
    function AccountComponent(mainService, dataService, router, appComponent) {
        this.mainService = mainService;
        this.dataService = dataService;
        this.router = router;
        this.appComponent = appComponent;
        this.user = new _models_User__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.basicData = new _models_BasicData__WEBPACK_IMPORTED_MODULE_3__["BasicData"]();
        this.formerEmail = '';
        this.showChange = false;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    AccountComponent.prototype.loadData = function () {
        var _this = this;
        this.mainService.getUserById(localStorage.getItem('_userId'))
            .subscribe(function (obj) {
            _this.user = obj;
            _this.basicData.username = _this.user.username;
            _this.basicData.email = _this.user.email;
            _this.formerEmail = _this.user.email;
        }, function (error) {
            console.log(error);
        });
    };
    AccountComponent.prototype.updateAccount = function () {
        var _this = this;
        var id = localStorage.getItem('_userId');
        this.mainService.updateAccount(id, this.basicData)
            .subscribe(function (value) {
            _this.appComponent.showModal(value.message);
            if (_this.basicData.email !== _this.formerEmail) {
                localStorage.clear();
                _this.router.navigate(['/']);
            }
            else {
                _this.loadData();
            }
        }, function (error) {
            _this.appComponent.showModal(error);
        });
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/modules/account/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/modules/account/account/account.component.css"), __webpack_require__(/*! ../../signup/signup-page/signup-page.component.css */ "./src/app/modules/signup/signup-page/signup-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-account-account-module.js.map