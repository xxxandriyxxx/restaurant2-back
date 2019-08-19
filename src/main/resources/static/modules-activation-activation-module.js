(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-activation-activation-module"],{

/***/ "./src/app/modules/activation/activation-page/activation-page.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/activation/activation-page/activation-page.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  min-height: 100vh;\r\n  /*background: lightgoldenrodyellow;*/\r\n  background: beige;\r\n  padding-top: 1px;\r\n}\r\n\r\ndiv{\r\n  width: 30%;\r\n  margin: 20px 35%;\r\n}\r\n\r\n#header{\r\n  margin: 20px 20%;\r\n  font-size: x-large;\r\n  font-weight: bold;\r\n  color: darkred;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hY3RpdmF0aW9uL2FjdGl2YXRpb24tcGFnZS9hY3RpdmF0aW9uLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hY3RpdmF0aW9uL2FjdGl2YXRpb24tcGFnZS9hY3RpdmF0aW9uLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgLypiYWNrZ3JvdW5kOiBsaWdodGdvbGRlbnJvZHllbGxvdzsqL1xyXG4gIGJhY2tncm91bmQ6IGJlaWdlO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbmRpdntcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbjogMjBweCAzNSU7XHJcbn1cclxuXHJcbiNoZWFkZXJ7XHJcbiAgbWFyZ2luOiAyMHB4IDIwJTtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/activation/activation-page/activation-page.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/activation/activation-page/activation-page.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n<div>\r\n  <h2 id=\"header\">\r\n    ACTIVATION\r\n  </h2>\r\n  <p *ngIf=\"activated;else otherP\">\r\n    Your account has been successfully activated ! <br>\r\n    To continue, sign in with the following link: <br>\r\n    <a routerLink=\"/sign-in\">{{dataService.url}}/sign-in</a>\r\n  </p>\r\n  <ng-template #otherP>\r\n    <p>\r\n      ERROR of activation !\r\n    </p>\r\n  </ng-template>\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/modules/activation/activation-page/activation-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/activation/activation-page/activation-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ActivationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationPageComponent", function() { return ActivationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");





var ActivationPageComponent = /** @class */ (function () {
    function ActivationPageComponent(activatedRoute, mainService, dataService) {
        this.activatedRoute = activatedRoute;
        this.mainService = mainService;
        this.dataService = dataService;
        this.activated = false;
    }
    ActivationPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.mainService.activation(params.jwt)
                .subscribe(function (res) {
                console.log(res);
                if (res.message.indexOf('SUCCESS') > -1) {
                    _this.activated = true;
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    ActivationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activation-page',
            template: __webpack_require__(/*! ./activation-page.component.html */ "./src/app/modules/activation/activation-page/activation-page.component.html"),
            styles: [__webpack_require__(/*! ./activation-page.component.css */ "./src/app/modules/activation/activation-page/activation-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], ActivationPageComponent);
    return ActivationPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/activation/activation-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/activation/activation-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ActivationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationRoutingModule", function() { return ActivationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _activation_page_activation_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activation-page/activation-page.component */ "./src/app/modules/activation/activation-page/activation-page.component.ts");





var routes = [
    { path: '', component: _activation_page_activation_page_component__WEBPACK_IMPORTED_MODULE_4__["ActivationPageComponent"] }
];
var ActivationRoutingModule = /** @class */ (function () {
    function ActivationRoutingModule() {
    }
    ActivationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ActivationRoutingModule);
    return ActivationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/activation/activation.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/activation/activation.module.ts ***!
  \*********************************************************/
/*! exports provided: ActivationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationModule", function() { return ActivationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _activation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activation-routing.module */ "./src/app/modules/activation/activation-routing.module.ts");
/* harmony import */ var _activation_page_activation_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activation-page/activation-page.component */ "./src/app/modules/activation/activation-page/activation-page.component.ts");





var ActivationModule = /** @class */ (function () {
    function ActivationModule() {
    }
    ActivationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_activation_page_activation_page_component__WEBPACK_IMPORTED_MODULE_4__["ActivationPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _activation_routing_module__WEBPACK_IMPORTED_MODULE_3__["ActivationRoutingModule"]
            ]
        })
    ], ActivationModule);
    return ActivationModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-activation-activation-module.js.map