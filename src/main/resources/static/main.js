(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/account/account.module": [
		"./src/app/modules/account/account.module.ts",
		"modules-account-account-module"
	],
	"./modules/activation/activation.module": [
		"./src/app/modules/activation/activation.module.ts",
		"modules-activation-activation-module"
	],
	"./modules/admin/admin.module": [
		"./src/app/modules/admin/admin.module.ts",
		"modules-admin-admin-module"
	],
	"./modules/my-restaurants/my-restaurants.module": [
		"./src/app/modules/my-restaurants/my-restaurants.module.ts",
		"modules-my-restaurants-my-restaurants-module"
	],
	"./modules/orders/orders.module": [
		"./src/app/modules/orders/orders.module.ts",
		"modules-orders-orders-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#signInMessage {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  margin-bottom: 20px;\r\n  border: black solid 2px;\r\n  background: indianred;\r\n  padding: .5em;\r\n  text-align: center;\r\n}\r\n\r\n.navbar {\r\n  overflow: hidden;\r\n  background-color: #333;\r\n  z-index: 2;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 110px;\r\n}\r\n\r\n.navbar a {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar a:hover {\r\n  background: #ddd;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar .right {\r\n  float: right;\r\n}\r\n\r\n/*Main content*/\r\n\r\n.main {\r\n  margin-top: 110px;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 3;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.modal-response {\r\n  background-color: #fefefe;\r\n  margin: 15% auto 10px auto;\r\n  padding: 0 10px 20px 10px;\r\n  border: 1px solid #888;\r\n  width: 30%;\r\n}\r\n\r\n.modal-response > div {\r\n  padding: 20px;\r\n  word-break: break-word;\r\n}\r\n\r\n.modal-response > button {\r\n  height: 40px;\r\n  width: 50%;\r\n  background: silver;\r\n  margin: 0 25%;\r\n  border: none;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\n.modal-response > button:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.close-modal {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.close-modal:hover,\r\n.close-modal:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\n#dishes-img{\r\n  overflow: hidden;\r\n  z-index: 1;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUMsZUFBZTs7QUFDaEI7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixNQUFNO0VBQ04sV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3NpZ25Jbk1lc3NhZ2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xyXG4gIGJhY2tncm91bmQ6IGluZGlhbnJlZDtcclxuICBwYWRkaW5nOiAuNWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyIGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZjJmMmYyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubmF2YmFyIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciAucmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuIC8qTWFpbiBjb250ZW50Ki9cclxuLm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDExMHB4O1xyXG59XHJcblxyXG5cclxuLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAzO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm1vZGFsLXJlc3BvbnNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogMTUlIGF1dG8gMTBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDAgMTBweCAyMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ubW9kYWwtcmVzcG9uc2UgPiBkaXYge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLm1vZGFsLXJlc3BvbnNlID4gYnV0dG9uIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XHJcbiAgbWFyZ2luOiAwIDI1JTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLm1vZGFsLXJlc3BvbnNlID4gYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uY2xvc2UtbW9kYWwge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jbG9zZS1tb2RhbDpob3ZlcixcclxuLmNsb3NlLW1vZGFsOmZvY3VzIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbn1cclxuXHJcbiNkaXNoZXMtaW1ne1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"navbar\">\r\n  <a routerLink=\"/\">Home</a>\r\n  <div *ngIf=\"logged;else signInUp\">\r\n    <a *ngIf=\"userClass == 'Owner'\" routerLink=\"myRestaurants\">My restaurants</a>\r\n    <a *ngIf=\"userClass !== 'AdminInMemory'\" routerLink=\"orders/my\">My orders</a>\r\n    <a *ngIf=\"userClass == 'Owner'\" routerLink=\"orders/clients\">Clients' orders</a>\r\n    <a class=\"right\" (click)=\"logout()\">Sign out</a>\r\n    <a *ngIf=\"(userClass == 'Owner')||(userClass == 'Client')\" class=\"right\" routerLink=\"myAccount\">My account</a>\r\n    <a *ngIf=\"userClass == 'AdminInMemory'\" class=\"right\" routerLink=\"admin\">Admin page</a>\r\n  </div>\r\n  <ng-template #signInUp>\r\n    <a class=\"right\" routerLink=\"/sign-up\">Sign up</a>\r\n    <a class=\"right\" routerLink=\"/sign-in\">Sign in</a>\r\n  </ng-template>\r\n\r\n  <img id=\"dishes-img\" src=\"../assets/img/dishes3.png\" alt=\"dishes\">\r\n</div>\r\n\r\n\r\n<div class=\"main\">\r\n<router-outlet>\r\n\r\n</router-outlet>\r\n</div>\r\n\r\n\r\n<div id=\"modalMessage\" class=\"modal\">\r\n  <div class=\"modal-response\">\r\n    <span class=\"close-modal\" (click)=\"closeModal()\">&times;</span>\r\n    <div>\r\n      <h3>Server response</h3>\r\n      <hr>\r\n      <p>{{responseMessage}}</p>\r\n    </div>\r\n    <button (click)=\"closeModal()\">Close</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(dataService, activatedRoute, http, router) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
        this.responseMessage = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modal = document.getElementById('modalMessage');
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.router.navigated = false;
                _this.token = localStorage.getItem('_token');
                _this.userClass = localStorage.getItem('_userClass');
                _this.userId = localStorage.getItem('_userId');
                // console.log('this.token: ' + this.token);
                // console.log('this.userClass: ' + this.userClass);
                // console.log('this.userId: ' + this.userId);
                if (_this.userClass == null) {
                    _this.logged = false;
                }
                else {
                    _this.logged = true;
                }
            }
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.showModal = function (message) {
        this.responseMessage = message;
        this.modal.style.display = 'block';
    };
    AppComponent.prototype.closeModal = function () {
        this.modal.style.display = 'none';
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_signup_signup_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/signup/signup.module */ "./src/app/modules/signup/signup.module.ts");
/* harmony import */ var _modules_signin_signin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/signin/signin.module */ "./src/app/modules/signin/signin.module.ts");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_restaurants_restaurants_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/restaurants/restaurants.module */ "./src/app/modules/restaurants/restaurants.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_7__["MainRoutingModule"],
                _modules_signup_signup_module__WEBPACK_IMPORTED_MODULE_5__["SignupModule"],
                _modules_signin_signin_module__WEBPACK_IMPORTED_MODULE_6__["SigninModule"],
                _modules_restaurants_restaurants_module__WEBPACK_IMPORTED_MODULE_9__["RestaurantsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-routing.module.ts":
/*!****************************************!*\
  !*** ./src/app/main-routing.module.ts ***!
  \****************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_signup_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/signup/signup-page/signup-page.component */ "./src/app/modules/signup/signup-page/signup-page.component.ts");
/* harmony import */ var _modules_signin_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/signin/signin-page/signin-page.component */ "./src/app/modules/signin/signin-page/signin-page.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_restaurants_restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/restaurants/restaurants/restaurants.component */ "./src/app/modules/restaurants/restaurants/restaurants.component.ts");
/* harmony import */ var _modules_restaurants_single_restaurant_single_restaurant_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/restaurants/single-restaurant/single-restaurant.component */ "./src/app/modules/restaurants/single-restaurant/single-restaurant.component.ts");









var routes = [
    { path: 'home', component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { path: '', component: _modules_restaurants_restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_7__["RestaurantsComponent"] },
    { path: 'sign-up', component: _modules_signup_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_4__["SignupPageComponent"] },
    { path: 'sign-in', component: _modules_signin_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_5__["SigninPageComponent"] },
    { path: 'restaurants/:id', component: _modules_restaurants_single_restaurant_single_restaurant_component__WEBPACK_IMPORTED_MODULE_8__["SingleRestaurantComponent"] },
    { path: 'myAccount', loadChildren: './modules/account/account.module#AccountModule' },
    { path: 'myRestaurants', loadChildren: './modules/my-restaurants/my-restaurants.module#MyRestaurantsModule' },
    { path: 'orders', loadChildren: './modules/orders/orders.module#OrdersModule' },
    { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' },
    { path: 'activation/:jwt', loadChildren: './modules/activation/activation.module#ActivationModule' }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/models/BasicData.ts":
/*!*************************************!*\
  !*** ./src/app/models/BasicData.ts ***!
  \*************************************/
/*! exports provided: BasicData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicData", function() { return BasicData; });
var BasicData = /** @class */ (function () {
    function BasicData(username, email, password) {
        if (username === void 0) { username = ''; }
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        this.username = username;
        this.email = email;
        this.password = password;
    }
    return BasicData;
}());



/***/ }),

/***/ "./src/app/models/Client.ts":
/*!**********************************!*\
  !*** ./src/app/models/Client.ts ***!
  \**********************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/app/models/User.ts");


var Client = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Client, _super);
    function Client(id, username, password, email, avatar, orders) {
        if (id === void 0) { id = null; }
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (email === void 0) { email = ''; }
        if (avatar === void 0) { avatar = ''; }
        if (orders === void 0) { orders = []; }
        var _this = _super.call(this, id, username, password, email, avatar, orders) || this;
        _this.id = id;
        _this.username = username;
        _this.password = password;
        _this.email = email;
        _this.avatar = avatar;
        _this.orders = orders;
        return _this;
    }
    return Client;
}(_User__WEBPACK_IMPORTED_MODULE_1__["User"]));



/***/ }),

/***/ "./src/app/models/Order.ts":
/*!*********************************!*\
  !*** ./src/app/models/Order.ts ***!
  \*********************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(id, date, status, user, username, restaurant, dishes, amount) {
        if (id === void 0) { id = null; }
        if (date === void 0) { date = null; }
        if (status === void 0) { status = null; }
        if (user === void 0) { user = null; }
        if (username === void 0) { username = ''; }
        if (restaurant === void 0) { restaurant = null; }
        if (dishes === void 0) { dishes = []; }
        if (amount === void 0) { amount = []; }
        this.id = id;
        this.date = date;
        this.status = status;
        this.user = user;
        this.username = username;
        this.restaurant = restaurant;
        this.dishes = dishes;
        this.amount = amount;
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/models/OrderStatus.ts":
/*!***************************************!*\
  !*** ./src/app/models/OrderStatus.ts ***!
  \***************************************/
/*! exports provided: OrderStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderStatus", function() { return OrderStatus; });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["ORDERED"] = "ORDERED";
    OrderStatus["CONFIRMED_BY_RESTAURANT"] = "CONFIRMED_BY_RESTAURANT";
    OrderStatus["CANCELED_BY_CLIENT"] = "CANCELED_BY_CLIENT";
    OrderStatus["CANCELED_BY_RESTAURANT"] = "CANCELED_BY_RESTAURANT";
    OrderStatus["PAID"] = "PAID";
})(OrderStatus || (OrderStatus = {}));


/***/ }),

/***/ "./src/app/models/Owner.ts":
/*!*********************************!*\
  !*** ./src/app/models/Owner.ts ***!
  \*********************************/
/*! exports provided: Owner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Owner", function() { return Owner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/app/models/User.ts");


var Owner = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Owner, _super);
    function Owner(id, username, password, email, avatar, restaurants, orders) {
        if (id === void 0) { id = null; }
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (email === void 0) { email = ''; }
        if (avatar === void 0) { avatar = ''; }
        if (restaurants === void 0) { restaurants = []; }
        if (orders === void 0) { orders = []; }
        var _this = _super.call(this, id, username, password, email, avatar, orders) || this;
        _this.id = id;
        _this.username = username;
        _this.password = password;
        _this.email = email;
        _this.avatar = avatar;
        _this.restaurants = restaurants;
        _this.orders = orders;
        return _this;
    }
    return Owner;
}(_User__WEBPACK_IMPORTED_MODULE_1__["User"]));



/***/ }),

/***/ "./src/app/models/TransferMessage.ts":
/*!*******************************************!*\
  !*** ./src/app/models/TransferMessage.ts ***!
  \*******************************************/
/*! exports provided: TransferMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferMessage", function() { return TransferMessage; });
var TransferMessage = /** @class */ (function () {
    function TransferMessage(message) {
        this.message = message;
    }
    return TransferMessage;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, username, password, email, avatar, orders) {
        if (id === void 0) { id = null; }
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (email === void 0) { email = ''; }
        if (avatar === void 0) { avatar = ''; }
        if (orders === void 0) { orders = []; }
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.avatar = avatar;
        this.orders = orders;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modules/restaurants/restaurants-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/restaurants/restaurants-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RestaurantsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsRoutingModule", function() { return RestaurantsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var routes = [];
var RestaurantsRoutingModule = /** @class */ (function () {
    function RestaurantsRoutingModule() {
    }
    RestaurantsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RestaurantsRoutingModule);
    return RestaurantsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/restaurants/restaurants.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/restaurants/restaurants.module.ts ***!
  \***********************************************************/
/*! exports provided: RestaurantsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsModule", function() { return RestaurantsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _restaurants_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurants-routing.module */ "./src/app/modules/restaurants/restaurants-routing.module.ts");
/* harmony import */ var _single_restaurant_single_restaurant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-restaurant/single-restaurant.component */ "./src/app/modules/restaurants/single-restaurant/single-restaurant.component.ts");
/* harmony import */ var _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurants/restaurants.component */ "./src/app/modules/restaurants/restaurants/restaurants.component.ts");






var RestaurantsModule = /** @class */ (function () {
    function RestaurantsModule() {
    }
    RestaurantsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_single_restaurant_single_restaurant_component__WEBPACK_IMPORTED_MODULE_4__["SingleRestaurantComponent"], _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_5__["RestaurantsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _restaurants_routing_module__WEBPACK_IMPORTED_MODULE_3__["RestaurantsRoutingModule"]
            ],
            exports: [
                _restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_5__["RestaurantsComponent"],
                _single_restaurant_single_restaurant_component__WEBPACK_IMPORTED_MODULE_4__["SingleRestaurantComponent"]
            ]
        })
    ], RestaurantsModule);
    return RestaurantsModule;
}());



/***/ }),

/***/ "./src/app/modules/restaurants/restaurants/restaurants.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/restaurants/restaurants/restaurants.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  min-height: 100vh;\r\n  /*background: lightgoldenrodyellow;*/\r\n  background: beige;\r\n  padding-top: 1px;\r\n}\r\n\r\n.restaurant {\r\n  width: 80%;\r\n  margin: 20px 10%;\r\n  border: dimgrey solid 2px;\r\n  box-shadow: 9px 7px 10px 0 rgba(0,0,0,0.26);\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  padding: 5px;\r\n  background: tan;\r\n}\r\n\r\n.details > div {\r\n  margin: 10px 20px;\r\n  word-break: break-word;\r\n\r\n}\r\n\r\n.name{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.logo-wrap {\r\n  height: 220px;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.logo {\r\n  min-height: 100px;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  border-radius: 5px;\r\n}\r\n\r\n.bold{\r\n  font-weight: bold;\r\n}\r\n\r\n.bold-color{\r\n  font-weight: bold;\r\n  font-size: x-large;\r\n  color: darkred;\r\n}\r\n\r\n.menu-btn {\r\n  padding: 14px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  background-color: #333;\r\n  color: #f2f2f2;\r\n}\r\n\r\n.menu-btn:hover {\r\n  background: #ddd;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\na:link {\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXN0YXVyYW50cy9yZXN0YXVyYW50cy9yZXN0YXVyYW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsMkNBQTJDO0FBQzdDOztBQUdBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7O0FBRXhCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFtQjtLQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Jlc3RhdXJhbnRzL3Jlc3RhdXJhbnRzL3Jlc3RhdXJhbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIC8qYmFja2dyb3VuZDogbGlnaHRnb2xkZW5yb2R5ZWxsb3c7Ki9cclxuICBiYWNrZ3JvdW5kOiBiZWlnZTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG4ucmVzdGF1cmFudCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDIwcHggMTAlO1xyXG4gIGJvcmRlcjogZGltZ3JleSBzb2xpZCAycHg7XHJcbiAgYm94LXNoYWRvdzogOXB4IDdweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjI2KTtcclxufVxyXG5cclxuXHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogdGFuO1xyXG59XHJcblxyXG4uZGV0YWlscyA+IGRpdiB7XHJcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHJcbn1cclxuXHJcbi5uYW1le1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG4ubG9nby13cmFwIHtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuXHJcbi5ib2xke1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYm9sZC1jb2xvcntcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuXHJcbi5tZW51LWJ0biB7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuLm1lbnUtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmE6bGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/restaurants/restaurants/restaurants.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/restaurants/restaurants/restaurants.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n<div class=\"restaurant\" *ngFor=\"let rest of restaurants\">\r\n  <div class=\"grid\">\r\n\r\n    <div class=\"logo-wrap\"><img class=\"logo\" src=\"{{dataService.pathToResources}}/{{rest.logo}}\" alt=\"logo\"></div>\r\n\r\n    <div class=\"details\">\r\n      <div class=\"name\">\r\n        <div><span class=\"bold-color\">{{rest.name}}</span></div>\r\n        <button class=\"menu-btn\" (click)=\"goToRestaurant(rest.id, rest.name)\">Menu</button>\r\n      </div>\r\n      <div><span class=\"bold\">Address: </span>{{rest.address}}</div>\r\n      <div><span class=\"bold\">Phone: </span>{{rest.phoneNumber}}</div>\r\n      <div><span class=\"bold\">Site: </span><a href=\"https://{{rest.site}}\" target=\"_blank\">{{rest.site}}</a></div>\r\n      <div>{{rest.about}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/modules/restaurants/restaurants/restaurants.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/restaurants/restaurants/restaurants.component.ts ***!
  \**************************************************************************/
/*! exports provided: RestaurantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsComponent", function() { return RestaurantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");





var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent(mainService, router, dataService) {
        this.mainService = mainService;
        this.router = router;
        this.dataService = dataService;
        // showSigInMessage = false;
        this.restaurants = [];
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if (localStorage.getItem('_userId') == null) {
        //   this.showSigInMessage = true;
        // }
        this.mainService.getAllRestaurants()
            .subscribe(function (restaurants) {
            _this.restaurants = restaurants;
            console.log(restaurants);
        }, function (error) {
            console.log(error);
        });
    };
    RestaurantsComponent.prototype.goToRestaurant = function (id, restName) {
        this.router.navigate(['restaurants/' + id], { queryParams: { name: restName } });
    };
    RestaurantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurants',
            template: __webpack_require__(/*! ./restaurants.component.html */ "./src/app/modules/restaurants/restaurants/restaurants.component.html"),
            styles: [__webpack_require__(/*! ./restaurants.component.css */ "./src/app/modules/restaurants/restaurants/restaurants.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());



/***/ }),

/***/ "./src/app/modules/restaurants/single-restaurant/single-restaurant.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/restaurants/single-restaurant/single-restaurant.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody {\r\n  min-height: 100vh;\r\n  background: beige;\r\n  padding-top: 1px;\r\n}\r\n\r\n#signInMessage {\r\n  width: 100%;\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  color: crimson;\r\n  background: beige;\r\n}\r\n\r\n.navbar {\r\n  z-index: 2;\r\n  position: fixed;\r\n  top: 110px;\r\n  width: 100%;\r\n}\r\n\r\n.main {\r\n  margin-top: 120px;\r\n}\r\n\r\n#menu-name {\r\n  width: 100%;\r\n  padding-top: 15px;\r\n  text-align: center;\r\n  border-bottom: darkred solid 2px;\r\n  background: beige;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-gap: 2px;\r\n  width: 60%;\r\n  margin: 20px 20%;\r\n  background: tan;\r\n  border: dimgrey solid 2px;\r\n  box-shadow: 9px 7px 10px 0 rgba(0, 0, 0, 0.26);\r\n\r\n}\r\n\r\n.header {\r\n  display: grid;\r\n  grid-template-columns: 2fr 3fr 1fr;\r\n  grid-gap: 1px;\r\n  background: white;\r\n  border-bottom: #333 solid 2px;\r\n}\r\n\r\n.subgrid {\r\n  display: grid;\r\n  grid-template-columns: 5fr 1fr;\r\n  grid-gap: 2px;\r\n  border: lightgoldenrodyellow solid 1px;\r\n  margin: 0 20px 20px 20px;\r\n  background: lightgrey;\r\n}\r\n\r\n.header > div {\r\n  padding: .5em;\r\n  background: rosybrown;\r\n  text-align: center;\r\n}\r\n\r\n.subgrid > div {\r\n  padding: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n  text-align: left;\r\n  word-break: break-word;\r\n}\r\n\r\n.buy {\r\n  Grid-row-start: 1;\r\n  Grid-row-end: 4;\r\n  Grid-column-start: 2;\r\n  Grid-column-end: 3;\r\n}\r\n\r\n.section {\r\n  padding: 20px 10px 20px 100px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n\r\n}\r\n\r\n.section > button {\r\n  background-color: tan;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.section > button:hover {\r\n  /*background: #ddd;*/\r\n  /*cursor: pointer;*/\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}\r\n\r\n.bold-color {\r\n  font-weight: bold;\r\n  font-size: larger;\r\n  color: darkred;\r\n}\r\n\r\n.bold-color-header {\r\n  font-weight: bold;\r\n  font-size: x-large;\r\n  color: darkred;\r\n}\r\n\r\n.bold-red {\r\n  font-weight: bold;\r\n  color: darkred;\r\n}\r\n\r\n#order {\r\n  top: 0;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  height: 50px;\r\n  background-color: white;\r\n  grid-gap: 1px;\r\n  border-bottom: #333 solid 6px;\r\n}\r\n\r\n#order > div {\r\n  padding-left: 10px;\r\n  background: #aaaaaa;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n  text-align: left;\r\n  word-break: break-word;\r\n\r\n}\r\n\r\n#order button {\r\n  background-color: #4CAF50;\r\n  padding: 8px;\r\n  width: 50%;\r\n  margin-left: 25%;\r\n  font-weight: bold;\r\n  border: silver solid 1px;\r\n  cursor: pointer;\r\n}\r\n\r\n#order button:hover {\r\n  background-color: #3e8e41;\r\n\r\n}\r\n\r\n#orderDetails {\r\n  display: grid;\r\n  grid-gap: 1px;\r\n  width: 60%;\r\n  margin-left: 20%;\r\n  border: black solid 2px;\r\n}\r\n\r\n#orderDetailsName {\r\n  padding: 20px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n  background: silver;\r\n\r\n\r\n}\r\n\r\n#orderDetailsHeader {\r\n  display: grid;\r\n  grid-gap: 1px;\r\n  grid-template-columns: 4fr 1fr 1fr 1fr 2fr;\r\n}\r\n\r\n#orderDetailsHeader > div {\r\n  padding: .5em;\r\n  background: rosybrown;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n  font-weight: bold;\r\n}\r\n\r\n#orderDetailsSubgrid {\r\n  display: grid;\r\n  grid-template-columns: 4fr 1fr 1fr 1fr 2fr;\r\n  grid-gap: 1px;\r\n}\r\n\r\n#orderDetailsSubgrid > div {\r\n  padding: .5em;\r\n  background: silver;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n}\r\n\r\n#orderDetailsSubgrid > .dish-name {\r\n  text-align: left;\r\n  word-break: break-word;\r\n}\r\n\r\n#totalSubgrid {\r\n  display: grid;\r\n  grid-template-columns: 4fr 1fr 1fr 1fr 2fr;\r\n  grid-gap: 1px;\r\n\r\n}\r\n\r\n#total {\r\n  Grid-column-start: 1;\r\n  Grid-column-end: 4;\r\n}\r\n\r\n#totalSubgrid > div {\r\n  padding: .5em;\r\n  background: silver;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}\r\n\r\n#orderDetailsSubgrid button {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: silver solid 1px;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\n#orderDetailsSubgrid button:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#cancel-btn {\r\n  margin: 10px 10px 10px 20%;\r\n  padding: 12px;\r\n  width: 15%;\r\n  background-color: indianred;\r\n  font-weight: bold;\r\n  border: none;\r\n  cursor: pointer;\r\n  opacity: 0.9;\r\n}\r\n\r\n#confirm-btn {\r\n  padding: 12px;\r\n  width: 80%;\r\n  border: none;\r\n  cursor: pointer;\r\n  opacity: 0.9;\r\n}\r\n\r\n#confirm-btn:hover, #cancel-btn:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.increase-btn {\r\n  background-color: #4CAF50;\r\n\r\n}\r\n\r\n.reduce-btn {\r\n  background-color: goldenrod;\r\n\r\n}\r\n\r\n.delete-btn {\r\n  background-color: indianred;\r\n}\r\n\r\n#confirm-btn {\r\n  background-color: #4CAF50;\r\n  border: whitesmoke solid 1px;\r\n  font-weight: bold;\r\n}\r\n\r\n.buy-btn {\r\n  margin: 10px 10px auto auto;\r\n  padding: 10px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  background-color: #333;\r\n  color: #f2f2f2;\r\n}\r\n\r\n.buy-btn:hover {\r\n  background: whitesmoke;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXN0YXVyYW50cy9zaW5nbGUtcmVzdGF1cmFudC9zaW5nbGUtcmVzdGF1cmFudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qiw4Q0FBOEM7O0FBRWhEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHNDQUFzQztFQUN0Qyx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4Qjs7QUFFaEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxNQUFNO0VBQ04sYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7O0FBRXhCOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7OztBQUdwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsYUFBYTtBQUNmOztBQUdBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCOztBQUVuQjs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSwyQkFBMkI7O0FBRTdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkI7O0FBSUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Jlc3RhdXJhbnRzL3NpbmdsZS1yZXN0YXVyYW50L3NpbmdsZS1yZXN0YXVyYW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogYmVpZ2U7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG5cclxuI3NpZ25Jbk1lc3NhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBiYWNrZ3JvdW5kOiBiZWlnZTtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xyXG59XHJcblxyXG4jbWVudS1uYW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogZGFya3JlZCBzb2xpZCAycHg7XHJcbiAgYmFja2dyb3VuZDogYmVpZ2U7XHJcbn1cclxuXHJcblxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMnB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luOiAyMHB4IDIwJTtcclxuICBiYWNrZ3JvdW5kOiB0YW47XHJcbiAgYm9yZGVyOiBkaW1ncmV5IHNvbGlkIDJweDtcclxuICBib3gtc2hhZG93OiA5cHggN3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG5cclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAxcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogIzMzMyBzb2xpZCAycHg7XHJcbn1cclxuXHJcbi5zdWJncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcclxuICBncmlkLWdhcDogMnB4O1xyXG4gIGJvcmRlcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3cgc29saWQgMXB4O1xyXG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5oZWFkZXIgPiBkaXYge1xyXG4gIHBhZGRpbmc6IC41ZW07XHJcbiAgYmFja2dyb3VuZDogcm9zeWJyb3duO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1YmdyaWQgPiBkaXYge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5idXkge1xyXG4gIEdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIEdyaWQtcm93LWVuZDogNDtcclxuICBHcmlkLWNvbHVtbi1zdGFydDogMjtcclxuICBHcmlkLWNvbHVtbi1lbmQ6IDM7XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxufVxyXG5cclxuLnNlY3Rpb24gPiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRhbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VjdGlvbiA+IGJ1dHRvbjpob3ZlciB7XHJcbiAgLypiYWNrZ3JvdW5kOiAjZGRkOyovXHJcbiAgLypjdXJzb3I6IHBvaW50ZXI7Ki9cclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYm9sZC1jb2xvciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuXHJcbi5ib2xkLWNvbG9yLWhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGNvbG9yOiBkYXJrcmVkO1xyXG59XHJcblxyXG4uYm9sZC1yZWQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBkYXJrcmVkO1xyXG59XHJcblxyXG4jb3JkZXIge1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGdyaWQtZ2FwOiAxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogIzMzMyBzb2xpZCA2cHg7XHJcbn1cclxuXHJcbiNvcmRlciA+IGRpdiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNhYWFhYWE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblxyXG59XHJcblxyXG5cclxuI29yZGVyIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogc2lsdmVyIHNvbGlkIDFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4jb3JkZXIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xyXG5cclxufVxyXG5cclxuI29yZGVyRGV0YWlscyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMXB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcclxufVxyXG5cclxuI29yZGVyRGV0YWlsc05hbWUge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XHJcblxyXG5cclxufVxyXG5cclxuI29yZGVyRGV0YWlsc0hlYWRlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMXB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmciAxZnIgMWZyIDJmcjtcclxufVxyXG5cclxuI29yZGVyRGV0YWlsc0hlYWRlciA+IGRpdiB7XHJcbiAgcGFkZGluZzogLjVlbTtcclxuICBiYWNrZ3JvdW5kOiByb3N5YnJvd247XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuI29yZGVyRGV0YWlsc1N1YmdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyIDFmciAxZnIgMmZyO1xyXG4gIGdyaWQtZ2FwOiAxcHg7XHJcbn1cclxuXHJcblxyXG4jb3JkZXJEZXRhaWxzU3ViZ3JpZCA+IGRpdiB7XHJcbiAgcGFkZGluZzogLjVlbTtcclxuICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG5cclxuI29yZGVyRGV0YWlsc1N1YmdyaWQgPiAuZGlzaC1uYW1lIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbiN0b3RhbFN1YmdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyIDFmciAxZnIgMmZyO1xyXG4gIGdyaWQtZ2FwOiAxcHg7XHJcblxyXG59XHJcblxyXG4jdG90YWwge1xyXG4gIEdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIEdyaWQtY29sdW1uLWVuZDogNDtcclxufVxyXG5cclxuI3RvdGFsU3ViZ3JpZCA+IGRpdiB7XHJcbiAgcGFkZGluZzogLjVlbTtcclxuICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxufVxyXG5cclxuXHJcbi5ib2xkIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbiNvcmRlckRldGFpbHNTdWJncmlkIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogc2lsdmVyIHNvbGlkIDFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4jb3JkZXJEZXRhaWxzU3ViZ3JpZCBidXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiNjYW5jZWwtYnRuIHtcclxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDIwJTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4jY29uZmlybS1idG4ge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuI2NvbmZpcm0tYnRuOmhvdmVyLCAjY2FuY2VsLWJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmluY3JlYXNlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuXHJcbn1cclxuXHJcbi5yZWR1Y2UtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcblxyXG59XHJcblxyXG4uZGVsZXRlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWFucmVkO1xyXG59XHJcblxyXG4jY29uZmlybS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgYm9yZGVyOiB3aGl0ZXNtb2tlIHNvbGlkIDFweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcblxyXG4uYnV5LWJ0biB7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggYXV0byBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgY29sb3I6ICNmMmYyZjI7XHJcbn1cclxuXHJcbi5idXktYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/restaurants/single-restaurant/single-restaurant.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/restaurants/single-restaurant/single-restaurant.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n\r\n<div *ngIf=\"showMakeOrder;else otherD\">\r\n  <button id=\"cancel-btn\" (click)=\"cancel()\">Go back to the menu</button>\r\n\r\n  <div id=\"orderDetails\">\r\n    <div id=\"orderDetailsName\"><span class=\"bold-color\">New order</span></div>\r\n    <div id=\"orderDetailsHeader\">\r\n      <div>Name</div>\r\n      <div>Amount</div>\r\n      <div>Price</div>\r\n      <div>Cost</div>\r\n      <div>Actions</div>\r\n    </div>\r\n    <div id=\"orderDetailsSubgrid\" *ngFor=\"let d of newOrder.dishes\">\r\n      <div class=\"dish-name\">{{d.name}}</div>\r\n      <div>{{newOrder.amount[newOrder.dishes.indexOf(d)]}}</div>\r\n      <div>{{d.price}}</div>\r\n      <div>{{newOrder.amount[newOrder.dishes.indexOf(d)] * d.price | number}}</div>\r\n      <div>\r\n        <button class=\"increase-btn\" (click)=\"increaseAmount(newOrder.dishes.indexOf(d))\">+</button>\r\n        <button class=\"reduce-btn\" (click)=\"reduceAmount(newOrder.dishes.indexOf(d))\">-</button>\r\n        <button class=\"delete-btn\" (click)=\"deleteDish(newOrder.dishes.indexOf(d))\">X</button>\r\n      </div>\r\n    </div>\r\n    <div id=\"totalSubgrid\">\r\n      <div id=\"total\">Total sum</div>\r\n      <div>{{totalCost | number}}</div>\r\n      <div>\r\n        <button id=\"confirm-btn\" [disabled]=\"!newOrder.dishes.length\" (click)=\"placeOrder()\">Order now</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<ng-template #otherD>\r\n\r\n  <div class=\"navbar\">\r\n    <div id=\"order\">\r\n      <div><span class=\"bold-red\">Restaurant:</span> {{restaurantName}}</div>\r\n      <div>\r\n        Amount: {{totalAmount}}<br>\r\n        Cost: {{totalCost | number}}\r\n      </div>\r\n      <div>\r\n        <button [disabled]=\"!showBuy\" (click)=\"showMakeOrder = true\">Place an order</button>\r\n      </div>\r\n    </div>\r\n    <div id=\"menu-name\"><span class=\"bold-color-header\">MENU</span></div>\r\n  </div>\r\n\r\n  <div class=\"main\">\r\n\r\n    <div id=\"signInMessage\" *ngIf=\"!showBuy\">\r\n      Please, <a routerLink=\"/sign-in\">sign in</a> to be able to make an order\r\n    </div>\r\n\r\n    <div class=\"grid\" *ngFor=\"let sect of menuSections\">\r\n      <div class=\"section\"><span class=\"bold-color\">{{sect.name}}</span>\r\n        <button *ngIf=\"!showSect[sect.id]\" (click)=\"showSection(sect.id)\"><span class=\"bold-color\">&#9660;</span>\r\n        </button>\r\n        <button *ngIf=\"showSect[sect.id]\" (click)=\"hideSection(sect.id)\"><span class=\"bold-color\">&#9650;</span>\r\n        </button>\r\n      </div>\r\n\r\n      <div *ngIf=\"showSect[sect.id]\">\r\n        <div class=\"subgrid\" *ngFor=\"let dish of sect.dishes\">\r\n          <div class=\"dish-name\"><span class=\"bold\">{{dish.name}}</span></div>\r\n          <div class=\"buy\">\r\n            <button class=\"buy-btn\" *ngIf=\"showBuy\" [disabled]=\"!showBuy\" (click)=\"addDishToOrder(dish.id)\">buy</button>\r\n          </div>\r\n          <div class=\"dish-description\">{{dish.description}}</div>\r\n          <div><span class=\"bold\">Price:</span>{{dish.price}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ng-template>\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/restaurants/single-restaurant/single-restaurant.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/restaurants/single-restaurant/single-restaurant.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SingleRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleRestaurantComponent", function() { return SingleRestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/Order */ "./src/app/models/Order.ts");
/* harmony import */ var _models_OrderStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/OrderStatus */ "./src/app/models/OrderStatus.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");








var SingleRestaurantComponent = /** @class */ (function () {
    function SingleRestaurantComponent(mainService, dataService, activatedRoute, appComponent) {
        this.mainService = mainService;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.appComponent = appComponent;
        this.showMakeOrder = false;
        this.showBuy = false;
        this.totalAmount = 0;
        this.totalCost = 0;
        this.restaurantId = '';
        this.menuSections = [];
        this.ordDishes = [];
        this.newOrder = new _models_Order__WEBPACK_IMPORTED_MODULE_5__["Order"]();
        this.restaurantName = '';
        this.showSect = [];
    }
    SingleRestaurantComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.updateData();
    };
    SingleRestaurantComponent.prototype.loadData = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.restaurantId = params.id;
            // console.log(this.restaurantId);
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.restaurantName = params.name;
        });
        this.mainService.getMenuSections(this.restaurantId)
            .subscribe(function (sections) {
            _this.menuSections = sections;
            // console.log(sections);
            _this.ordDishes = [];
            for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
                var s = sections_1[_i];
                for (var _a = 0, _b = s.dishes; _a < _b.length; _a++) {
                    var d = _b[_a];
                    // d.amount = 1;
                    _this.ordDishes.push(d);
                }
            }
            console.log(_this.ordDishes);
        }, function (error) {
            console.log(error);
        });
    };
    SingleRestaurantComponent.prototype.updateData = function () {
        var userClass = localStorage.getItem('_userClass');
        if (userClass == null || userClass === 'AdminInMemory') {
            this.showBuy = false;
        }
        else {
            this.showBuy = true;
        }
        for (var _i = 0, _a = this.menuSections; _i < _a.length; _i++) {
            var sect = _a[_i];
            this.showSect.push(false);
        }
    };
    SingleRestaurantComponent.prototype.addDishToOrder = function (id) {
        var item = this.ordDishes.find(function (i) { return i.id === id; });
        var index = this.newOrder.dishes.findIndex(function (x) { return x.id === id; });
        if (index === -1) {
            this.newOrder.dishes.push(item);
            this.newOrder.amount.push(1);
        }
        else {
            this.newOrder.amount[index] += 1;
        }
        // console.log(this.newOrder);
        this.totalAmount += 1;
        this.totalCost += item.price;
    };
    SingleRestaurantComponent.prototype.showSection = function (id) {
        this.showSect[id] = true;
    };
    SingleRestaurantComponent.prototype.hideSection = function (id) {
        this.showSect[id] = false;
    };
    SingleRestaurantComponent.prototype.increaseAmount = function (index) {
        this.totalAmount += 1;
        this.totalCost += this.newOrder.dishes[index].price;
        this.newOrder.amount[index] += 1;
        // this.ngOnInit();
    };
    SingleRestaurantComponent.prototype.reduceAmount = function (index) {
        if (this.newOrder.amount[index] === 1) {
            this.deleteDish(index);
        }
        else {
            this.totalAmount -= 1;
            this.totalCost -= this.newOrder.dishes[index].price;
            this.newOrder.amount[index] -= 1;
        }
        // this.ngOnInit();
    };
    SingleRestaurantComponent.prototype.deleteDish = function (index) {
        console.log(this.newOrder);
        this.totalCost -= this.newOrder.dishes[index].price * this.newOrder.amount[index];
        this.totalAmount -= this.newOrder.amount[index];
        this.newOrder.dishes.splice(index, 1);
        this.newOrder.amount.splice(index, 1);
        // console.log(this.newOrder);
        console.log(this.ordDishes);
        // this.ngOnInit();
    };
    SingleRestaurantComponent.prototype.cancel = function () {
        this.showMakeOrder = false;
        console.log(this.newOrder);
        this.ngOnInit();
    };
    SingleRestaurantComponent.prototype.placeOrder = function () {
        var _this = this;
        this.newOrder.date = new Date();
        this.newOrder.status = _models_OrderStatus__WEBPACK_IMPORTED_MODULE_6__["OrderStatus"].ORDERED;
        this.mainService.placeOrder(this.newOrder, localStorage.getItem('_userId'), this.restaurantId)
            .subscribe(function (val) {
            console.log(val);
            _this.newOrder = new _models_Order__WEBPACK_IMPORTED_MODULE_5__["Order"]();
            _this.totalAmount = 0;
            _this.totalCost = 0;
            _this.cancel();
            _this.appComponent.showModal(val.message);
        }, function (error) {
            console.log(error);
            _this.appComponent.showModal(error);
        });
    };
    SingleRestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-restaurant',
            template: __webpack_require__(/*! ./single-restaurant.component.html */ "./src/app/modules/restaurants/single-restaurant/single-restaurant.component.html"),
            styles: [__webpack_require__(/*! ./single-restaurant.component.css */ "./src/app/modules/restaurants/single-restaurant/single-restaurant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]])
    ], SingleRestaurantComponent);
    return SingleRestaurantComponent;
}());



/***/ }),

/***/ "./src/app/modules/signin/signin-page/signin-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/signin/signin-page/signin-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*used styles from signup-page.component*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaWduaW4vc2lnbmluLXBhZ2Uvc2lnbmluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NpZ25pbi9zaWduaW4tcGFnZS9zaWduaW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyp1c2VkIHN0eWxlcyBmcm9tIHNpZ251cC1wYWdlLmNvbXBvbmVudCovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/signin/signin-page/signin-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/signin/signin-page/signin-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form #signInForm='ngForm' class=\"form\">\r\n  <h2>Sign in</h2>\r\n  <p>Please, fill in this form to sign in.</p>\r\n  <hr>\r\n\r\n  <label><b>Login or email:</b></label>\r\n  <input\r\n    [(ngModel)]=\"logForm.loginEmail\"\r\n    [ngStyle]=\"{border: usernameInp.invalid && usernameInp.dirty? '2px solid red' : '2px solid green'}\"\r\n    #usernameInp='ngModel'\r\n    required pattern=\"({{dataService.passLoginRegExp.source}})|({{dataService.emailRegExp.source}})\"\r\n    placeholder=\"login / email\"\r\n    size=\"25\"\r\n    type=\"text\"\r\n    name=\"username\"\r\n    autocomplete=\"off\">\r\n  <label><b>Password:</b></label>\r\n  <input\r\n    [(ngModel)]=\"logForm.password\"\r\n    [ngStyle]=\"{border: passwordInp.invalid && passwordInp.dirty? '2px solid red' : '2px solid green'}\"\r\n    #passwordInp='ngModel'\r\n    required pattern=\"{{dataService.passLoginRegExp.source}}\"\r\n    placeholder=\"password\"\r\n    size=\"25\"\r\n    type=\"password\"\r\n    name=\"password\">\r\n  <button\r\n    [disabled]=\"signInForm.invalid\"\r\n    (click)=\"login()\"\r\n  >Sign in\r\n  </button>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/signin/signin-page/signin-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/signin/signin-page/signin-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: SigninPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageComponent", function() { return SigninPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _models_BasicData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/BasicData */ "./src/app/models/BasicData.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");







var SigninPageComponent = /** @class */ (function () {
    function SigninPageComponent(mainService, dataService, activatedRoute, router, appComponent) {
        this.mainService = mainService;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.appComponent = appComponent;
        this.logForm = {
            loginEmail: '',
            password: ''
        };
        this.basicData = new _models_BasicData__WEBPACK_IMPORTED_MODULE_3__["BasicData"]();
    }
    SigninPageComponent.prototype.ngOnInit = function () {
    };
    SigninPageComponent.prototype.login = function () {
        var _this = this;
        if (this.dataService.emailRegExp.test(this.logForm.loginEmail)) {
            this.basicData.email = this.logForm.loginEmail;
            this.basicData.username = '';
        }
        else {
            this.basicData.username = this.logForm.loginEmail;
            this.basicData.email = '';
        }
        this.basicData.password = this.logForm.password;
        this.mainService.login(this.basicData)
            .subscribe(function (value) {
            var token = value.headers.get('Authorization');
            var userClass = value.headers.get('UserClass');
            var userId = value.headers.get('UserId');
            var loginStatusCode = Number(value.headers.get('LoginStatusCode')); // +'string'
            // console.log('token: ' + token);
            // console.log('userClass: ' + userClass);
            // console.log('userId: ' + userId);
            // console.log('loginStatusCode: ' + loginStatusCode);
            // console.log(value.body);
            if (loginStatusCode >= 200 && loginStatusCode < 400) {
                localStorage.setItem('_token', token);
                localStorage.setItem('_userClass', userClass);
                localStorage.setItem('_userId', userId);
                _this.router.navigate(['/']);
            }
            else {
                _this.appComponent.showModal(value.body);
                _this.router.navigate(['sign-in']);
            }
        }, function (error) {
            _this.appComponent.showModal(error);
        });
    };
    SigninPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin-page',
            template: __webpack_require__(/*! ./signin-page.component.html */ "./src/app/modules/signin/signin-page/signin-page.component.html"),
            styles: [__webpack_require__(/*! ./signin-page.component.css */ "./src/app/modules/signin/signin-page/signin-page.component.css"), __webpack_require__(/*! ../../signup/signup-page/signup-page.component.css */ "./src/app/modules/signup/signup-page/signup-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])
    ], SigninPageComponent);
    return SigninPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/signin/signin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/signin/signin.module.ts ***!
  \*************************************************/
/*! exports provided: SigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninModule", function() { return SigninModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin-page/signin-page.component */ "./src/app/modules/signin/signin-page/signin-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SigninModule = /** @class */ (function () {
    function SigninModule() {
    }
    SigninModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_3__["SigninPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [
                _signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_3__["SigninPageComponent"]
            ]
        })
    ], SigninModule);
    return SigninModule;
}());



/***/ }),

/***/ "./src/app/modules/signup/signup-page/signup-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/signup/signup-page/signup-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  box-sizing: border-box\r\n}\r\n\r\n\r\n.form {\r\n  padding: 16px;\r\n  margin-left: 35%;\r\n  margin-right: 35%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n.form > input, .form > div {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 5px 0 10px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n  word-break: break-all;\r\n}\r\n\r\n\r\n.form > div {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n\r\n.form > input:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: #4CAF50;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\n\r\nbutton:hover {\r\n  opacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaWdudXAvc2lnbnVwLXBhZ2Uvc2lnbnVwLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0FBQ0Y7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaWdudXAvc2lnbnVwLXBhZ2Uvc2lnbnVwLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxufVxyXG5cclxuXHJcbi5mb3JtIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvcm0gPiBpbnB1dCwgLmZvcm0gPiBkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxuLmZvcm0gPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5mb3JtID4gaW5wdXQ6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/signup/signup-page/signup-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/signup/signup-page/signup-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form #signUpForm='ngForm' class=\"form\">\r\n  <h2>Sign up</h2>\r\n  <p>Please, fill in this form to create an account.</p>\r\n  <hr>\r\n\r\n  <label><b>Type of user:</b></label>\r\n  <div>\r\n    <div>\r\n      <input #clientRadio type=\"radio\" name=\"type\" value=\"client\" checked> client\r\n    </div>\r\n    <div>\r\n      <input #ownerRadio type=\"radio\" name=\"type\" value=\"owner\"> owner\r\n    </div>\r\n  </div>\r\n\r\n  <label><b>Login:</b></label>\r\n  <input\r\n    [(ngModel)]=\"regForm.username\"\r\n    [ngStyle]=\"{border: usernameInp.invalid && usernameInp.dirty ? '2px solid red' : '2px solid green'}\"\r\n    #usernameInp='ngModel'\r\n    required pattern=\"{{dataService.passLoginRegExp.source}}\"\r\n    placeholder=\"3-20 latin letters/numbers\"\r\n    size=\"25\"\r\n    type=\"text\"\r\n    name=\"username\"\r\n    autocomplete=\"off\">\r\n  <label><b>Email:</b></label>\r\n  <input\r\n    [(ngModel)]=\"regForm.email\"\r\n    [ngStyle]=\"{border: emailInp.invalid && emailInp.dirty? '2px solid red' : '2px solid green'}\"\r\n    #emailInp='ngModel'\r\n    required pattern=\"{{dataService.emailRegExp.source}}\"\r\n    placeholder=\"email\"\r\n    size=\"25\"\r\n    type=\"text\"\r\n    name=\"email\"\r\n    autocomplete=\"off\">\r\n  <label><b>Password:</b></label>\r\n  <input\r\n    [(ngModel)]=\"regForm.password\"\r\n    [ngStyle]=\"{border: passwordInp.invalid && passwordInp.dirty? '2px solid red' : '2px solid green'}\"\r\n    #passwordInp='ngModel'\r\n    required pattern=\"{{dataService.passLoginRegExp.source}}\"\r\n    placeholder=\"3-20 latin letters/numbers\"\r\n    size=\"25\"\r\n    type=\"password\"\r\n    name=\"password\">\r\n  <button\r\n    [disabled]=\"signUpForm.invalid\"\r\n    (click)=\"saveUser(clientRadio.checked, ownerRadio.checked)\"\r\n  >Sign up\r\n  </button>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/signup/signup-page/signup-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/signup/signup-page/signup-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _models_Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/Client */ "./src/app/models/Client.ts");
/* harmony import */ var _models_Owner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/Owner */ "./src/app/models/Owner.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");







var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent(mainService, dataService, appComponent) {
        this.mainService = mainService;
        this.dataService = dataService;
        this.appComponent = appComponent;
        this.regForm = {
            username: '',
            password: '',
            email: ''
        };
        this.client = new _models_Client__WEBPACK_IMPORTED_MODULE_3__["Client"]();
        this.owner = new _models_Owner__WEBPACK_IMPORTED_MODULE_4__["Owner"]();
    }
    SignupPageComponent.prototype.ngOnInit = function () {
    };
    SignupPageComponent.prototype.saveUser = function (isClient, isOwner) {
        var _this = this;
        if (isClient) {
            this.client.username = this.regForm.username;
            this.client.password = this.regForm.password;
            this.client.email = this.regForm.email;
            this.mainService.saveClient(this.client)
                .subscribe(function (value) {
                _this.appComponent.showModal(value.message);
            }, function (error) {
                _this.appComponent.showModal(error);
            });
        }
        else if (isOwner) {
            this.owner.username = this.regForm.username;
            this.owner.password = this.regForm.password;
            this.owner.email = this.regForm.email;
            this.mainService.saveOwner(this.owner)
                .subscribe(function (value) {
                _this.appComponent.showModal(value.message);
            }, function (error) {
                _this.appComponent.showModal(error);
            });
        }
        else {
            console.log('ERROR of saveUser function');
        }
    };
    SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-page',
            template: __webpack_require__(/*! ./signup-page.component.html */ "./src/app/modules/signup/signup-page/signup-page.component.html"),
            styles: [__webpack_require__(/*! ./signup-page.component.css */ "./src/app/modules/signup/signup-page/signup-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]])
    ], SignupPageComponent);
    return SignupPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/signup/signup.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/signup/signup.module.ts ***!
  \*************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-page/signup-page.component */ "./src/app/modules/signup/signup-page/signup-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_3__["SignupPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [
                _signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_3__["SignupPageComponent"]
            ]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService() {
        // URL of the API
        this.url = 'http://localhost:8080';
        // public url = 'http://ec2-18-219-114-136.us-east-2.compute.amazonaws.com:8080';
        // this resource location is set by the resource handler in the WebConfig class in the API project
        this.pathToResources = this.url + '/logo';
        this.passLoginRegExp = new RegExp('^[a-zA-Z0-9]{3,20}$');
        this.emailRegExp = new RegExp('^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$');
        this.priceRegExp = new RegExp('^\\d+(\\.\\d{1,2})?$');
        this.siteRegExp = new RegExp('[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)');
        this.phoneRegExp = new RegExp('^\\+\\d{2}\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}$');
    }
    DataService.prototype.getAuthHeader = function () {
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ Authorization: localStorage.getItem('_token') });
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_TransferMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/TransferMessage */ "./src/app/models/TransferMessage.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");





var MainService = /** @class */ (function () {
    function MainService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.url = this.dataService.url;
    }
    MainService.prototype.saveClient = function (client) {
        return this.http.post(this.url + '/save/client', client);
    };
    MainService.prototype.saveOwner = function (owner) {
        return this.http.post(this.url + '/save/owner', owner);
    };
    MainService.prototype.activation = function (jwt) {
        return this.http.post(this.url + '/activation', new _models_TransferMessage__WEBPACK_IMPORTED_MODULE_3__["TransferMessage"](jwt));
    };
    MainService.prototype.login = function (loginData) {
        return this.http.post(this.url + '/login/try', loginData, { observe: 'response', responseType: 'text' });
    };
    MainService.prototype.getUserById = function (id) {
        // const headersOption = new HttpHeaders({Authorization: localStorage.getItem('_token')});
        return this.http.get(this.url + '/user/get/' + id, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.updateAccount = function (userId, basicData) {
        return this.http.post(this.url + '/user/update/' + userId, basicData, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.changeRestaurantData = function (restaurant) {
        return this.http.post(this.url + '/restaurant/change', restaurant, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.addRestaurant = function (ownerId, formData) {
        console.log(formData);
        return this.http.post(this.url + '/restaurant/add/' + ownerId, formData, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.changeLogo = function (restId, formData) {
        return this.http.post(this.url + '/restaurant/change/logo/' + restId, formData, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.getRestaurants = function (ownerId) {
        return this.http.get(this.url + '/restaurants/get/' + ownerId, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.getAllRestaurants = function () {
        return this.http.get(this.url + '/restaurants/get');
    };
    MainService.prototype.deleteRestaurant = function (id) {
        return this.http.delete(this.url + '/restaurant/delete/' + id, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.addMenuSection = function (restaurantId, newMenuSection) {
        return this.http.post(this.url + '/restaurant/menu-section/add/' + restaurantId, newMenuSection, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.getMenuSections = function (restaurantId) {
        return this.http.get(this.url + '/restaurant/menu-sections/get/' + restaurantId);
    };
    MainService.prototype.changeMenuSection = function (menuSection) {
        return this.http.post(this.url + '/restaurant/menu-section/change', menuSection, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.deleteMenuSection = function (id) {
        return this.http.delete(this.url + '/restaurant/menu-section/delete/' + id, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.addDish = function (restaurantId, sectionId, dish) {
        return this.http.post(this.url + '/restaurant/dish/add/' + restaurantId + '/' + sectionId, dish, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.getDishesBySectionId = function (sectionId) {
        return this.http.get(this.url + '/restaurant/dishes/get/{sectionId}' + sectionId, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.getDishesByRestaurantId = function (restaurantId) {
        return this.http.get(this.url + '/restaurant/dishes/get/' + restaurantId, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.changeDish = function (dish) {
        return this.http.post(this.url + '/restaurant/dish/change', dish, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.deleteDish = function (id) {
        return this.http.delete(this.url + '/restaurant/dish/delete/' + id, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.placeOrder = function (order, userId, restaurantId) {
        return this.http.post(this.url + '/order/place/' + userId + '/' + restaurantId, order, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.getMyOrders = function (userId) {
        return this.http.get(this.url + '/orders/get/my/' + userId, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.getOrdersByOwnerId = function (id) {
        return this.http.get(this.url + '/orders/get/clients/' + id, { headers: this.dataService.getAuthHeader() });
    };
    MainService.prototype.changeOrderStatus = function (order) {
        return this.http.post(this.url + '/order/change-status', order, { headers: this.dataService.getAuthHeader() });
    };
    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Okten\Project\restaurant2-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map