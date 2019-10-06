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

module.exports = ".navbar {\r\n  overflow: hidden;\r\n  background-color: #333;\r\n  z-index: 2;\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 74px;\r\n}\r\n\r\n.navbar a {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  -o-border-image: none;\r\n     border-image: none;\r\n}\r\n\r\n.navbar a:hover {\r\n  background: #ddd;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar .right {\r\n  float: right;\r\n}\r\n\r\n/*Main content*/\r\n\r\n.main {\r\n  margin-top: 74px;\r\n}\r\n\r\n.modal {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 3;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow: auto;\r\n  background-color: rgb(0, 0, 0);\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.modal-response {\r\n  background-color: #fefefe;\r\n  margin: 15% auto 10px auto;\r\n  padding: 0 10px 20px 10px;\r\n  border: 1px solid #888;\r\n  width: 30%;\r\n}\r\n\r\n.modal-response > div {\r\n  padding: 20px;\r\n  word-break: break-word;\r\n}\r\n\r\n.modal-response > button {\r\n  height: 40px;\r\n  width: 50%;\r\n  background: silver;\r\n  margin: 0 25%;\r\n  border: none;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\n.modal-response > button:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.close-modal {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.close-modal:hover,\r\n.close-modal:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n}\r\n\r\n#dishes-img {\r\n  overflow: hidden;\r\n  z-index: 1;\r\n  top: 0;\r\n  width: 100%;\r\n}\r\n\r\n#basket-img {\r\n  overflow: hidden;\r\n  z-index: 1;\r\n  top: 0;\r\n  height: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlO0VBQ2YsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBa0I7S0FBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLGVBQWU7O0FBQ2Y7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixNQUFNO0VBQ04sV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzRweDtcclxufVxyXG5cclxuLm5hdmJhciBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXItaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZiYXIgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2RkZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2YmFyIC5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4vKk1haW4gY29udGVudCovXHJcbi5tYWluIHtcclxuICBtYXJnaW4tdG9wOiA3NHB4O1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ubW9kYWwtcmVzcG9uc2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgbWFyZ2luOiAxNSUgYXV0byAxMHB4IGF1dG87XHJcbiAgcGFkZGluZzogMCAxMHB4IDIwcHggMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5tb2RhbC1yZXNwb25zZSA+IGRpdiB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubW9kYWwtcmVzcG9uc2UgPiBidXR0b24ge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHNpbHZlcjtcclxuICBtYXJnaW46IDAgMjUlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4ubW9kYWwtcmVzcG9uc2UgPiBidXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jbG9zZS1tb2RhbCB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmNsb3NlLW1vZGFsOmhvdmVyLFxyXG4uY2xvc2UtbW9kYWw6Zm9jdXMge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxufVxyXG5cclxuI2Rpc2hlcy1pbWcge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNiYXNrZXQtaW1nIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTZweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <a routerLink=\"/\">Home</a>\r\n  <a routerLink=\"about\">About</a>\r\n\r\n  <div *ngIf=\"logged;else signInUp\">\r\n    <a class=\"right\" (click)=\"signOut()\">Sign out</a>\r\n    <a *ngIf=\"(userClass == 'Owner')||(userClass == 'Client')\" class=\"right\" routerLink=\"myAccount\">My account</a>\r\n    <a *ngIf=\"userClass == 'AdminInMemory'\" class=\"right\" routerLink=\"admin\">Admin page</a>\r\n    <a *ngIf=\"userClass == 'Owner'\" class=\"right\" routerLink=\"myRestaurants\">My restaurants</a>\r\n    <a *ngIf=\"userClass == 'Owner'\" class=\"right\" routerLink=\"orders/clients\">Clients' orders</a>\r\n    <a *ngIf=\"userClass !== 'AdminInMemory'\" class=\"right\" routerLink=\"orders/my\">My orders</a>\r\n  </div>\r\n  <ng-template #signInUp>\r\n    <a class=\"right\" routerLink=\"/sign-up\">Sign up</a>\r\n    <a class=\"right\" routerLink=\"/sign-in\">Sign in</a>\r\n  </ng-template>\r\n  <a class=\"right\" *ngIf=\"userClass !== 'AdminInMemory'\" routerLink=\"newOrder\">\r\n    <img id=\"basket-img\" src=\"../assets/img/basket.png\" alt=\"basket\">   {{totalAmount}}</a>\r\n\r\n  <img id=\"dishes-img\" src=\"../assets/img/dishes5.png\" alt=\"dishes\">\r\n</div>\r\n\r\n\r\n<div class=\"main\">\r\n  <router-outlet>\r\n\r\n  </router-outlet>\r\n</div>\r\n\r\n\r\n<div id=\"modalMessage\" class=\"modal\">\r\n  <div class=\"modal-response\">\r\n    <span class=\"close-modal\" (click)=\"closeModal()\">&times;</span>\r\n    <div>\r\n      <h3>Notice</h3>\r\n      <hr>\r\n      <p>{{responseMessage}}</p>\r\n    </div>\r\n    <button (click)=\"closeModal()\">Close</button>\r\n  </div>\r\n</div>\r\n"

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
        this.totalAmount = 0;
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
                if (_this.userClass == null) {
                    _this.logged = false;
                }
                else {
                    _this.logged = true;
                }
            }
        });
        this.totalAmount = +sessionStorage.getItem('_totalAmount');
    };
    AppComponent.prototype.signOut = function () {
        this.clearLocalStorage();
        this.clearSessionStorage();
        this.changeAmount();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.clearSessionStorage = function () {
        sessionStorage.removeItem('_restaurantId');
        sessionStorage.removeItem('_restaurantName');
        sessionStorage.removeItem('_totalAmount');
        sessionStorage.removeItem('_totalCost');
        sessionStorage.removeItem('_newOrder');
    };
    AppComponent.prototype.clearLocalStorage = function () {
        localStorage.removeItem('_token');
        localStorage.removeItem('_userClass');
        localStorage.removeItem('_userId');
    };
    AppComponent.prototype.changeAmount = function () {
        this.totalAmount = +sessionStorage.getItem('_totalAmount');
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
/* harmony import */ var _modules_about_about_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/about/about.module */ "./src/app/modules/about/about.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_7__["MainRoutingModule"],
                _modules_about_about_module__WEBPACK_IMPORTED_MODULE_10__["AboutModule"],
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
/* harmony import */ var _modules_about_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/about/about/about.component */ "./src/app/modules/about/about/about.component.ts");










var routes = [
    { path: 'home', component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] },
    { path: '', component: _modules_restaurants_restaurants_restaurants_component__WEBPACK_IMPORTED_MODULE_7__["RestaurantsComponent"] },
    { path: 'about', component: _modules_about_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] },
    { path: 'sign-up', component: _modules_signup_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_4__["SignupPageComponent"] },
    { path: 'sign-in', component: _modules_signin_signin_page_signin_page_component__WEBPACK_IMPORTED_MODULE_5__["SigninPageComponent"] },
    { path: 'restaurants/:id', component: _modules_restaurants_single_restaurant_single_restaurant_component__WEBPACK_IMPORTED_MODULE_8__["SingleRestaurantComponent"] },
    { path: 'myAccount', loadChildren: './modules/account/account.module#AccountModule' },
    { path: 'myRestaurants', loadChildren: './modules/my-restaurants/my-restaurants.module#MyRestaurantsModule' },
    { path: 'orders', loadChildren: './modules/orders/orders.module#OrdersModule' },
    { path: 'newOrder', loadChildren: './modules/orders/orders.module#OrdersModule' },
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

/***/ "./src/app/modules/about/about.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/about/about.module.ts ***!
  \***********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/modules/about/about/about.component.ts");




var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/modules/about/about/about.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/about/about/about.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  min-height: 100vh;\r\n  background: beige;\r\n  padding-top: 1px;\r\n}\r\n\r\n#header {\r\n  margin: 20px 0;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: larger;\r\n  color: darkred;\r\n}\r\n\r\np {\r\n  text-indent: 20px; /* Отступ первой строки в пикселах */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYm91dC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLG9DQUFvQztBQUN6RCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJvdXQvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGJlaWdlO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBjb2xvcjogZGFya3JlZDtcclxufVxyXG5cclxucCB7XHJcbiAgdGV4dC1pbmRlbnQ6IDIwcHg7IC8qINCe0YLRgdGC0YPQvyDQv9C10YDQstC+0Lkg0YHRgtGA0L7QutC4INCyINC/0LjQutGB0LXQu9Cw0YUgKi9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/about/about/about.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/about/about/about.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<div id=\"header\">About the project</div>\n<p>Using this app you can browse the list of registered restaurants, place orders in their menu\n  and manage your orders.</p>\n<p>You can sign up as a client or as an owner of restaurants.</p>\n<p>If you sign up as the owner:</p>\n<p>- you can register your restaurants, manage them and their client's orders.</p>\n<p>- all the client's functionality is also available to you.</p>\n<hr>\n<p>NOTICE:</p>\n<p>To save your time you can try this app using an existing account of the owner. Sign in using the next login and password: aaa.</p>\n<p>Please, don't delete the restaurant if use.</p>\n\n</body>\n"

/***/ }),

/***/ "./src/app/modules/about/about/about.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/about/about/about.component.ts ***!
  \********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/modules/about/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/modules/about/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
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

module.exports = "body{\r\n  min-height: 100vh;\r\n  background: beige;\r\n  padding-top: 1px;\r\n}\r\n\r\n.restaurant {\r\n  width: 80%;\r\n  margin: 20px 10%;\r\n  border: dimgrey solid 2px;\r\n  box-shadow: 9px 7px 10px 0 rgba(0,0,0,0.26);\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 2fr;\r\n  padding: 5px;\r\n  background: tan;\r\n}\r\n\r\n.details > div {\r\n  margin: 10px 20px;\r\n  word-break: break-word;\r\n}\r\n\r\n.name{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.logo-wrap {\r\n  height: 220px;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.logo {\r\n  min-height: 100px;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  border-radius: 5px;\r\n}\r\n\r\n.bold{\r\n  font-weight: bold;\r\n}\r\n\r\n.bold-color{\r\n  font-weight: bold;\r\n  font-size: x-large;\r\n  color: darkred;\r\n}\r\n\r\n.menu-btn {\r\n  padding: 14px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  background-color: #333;\r\n  color: #f2f2f2;\r\n}\r\n\r\n.menu-btn:hover {\r\n  background: #ddd;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\na:link {\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXN0YXVyYW50cy9yZXN0YXVyYW50cy9yZXN0YXVyYW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXN0YXVyYW50cy9yZXN0YXVyYW50cy9yZXN0YXVyYW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBiZWlnZTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG4ucmVzdGF1cmFudCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDIwcHggMTAlO1xyXG4gIGJvcmRlcjogZGltZ3JleSBzb2xpZCAycHg7XHJcbiAgYm94LXNoYWRvdzogOXB4IDdweCAxMHB4IDAgcmdiYSgwLDAsMCwwLjI2KTtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiB0YW47XHJcbn1cclxuXHJcbi5kZXRhaWxzID4gZGl2IHtcclxuICBtYXJnaW46IDEwcHggMjBweDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubmFtZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubG9nby13cmFwIHtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJvbGR7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ib2xkLWNvbG9ye1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBjb2xvcjogZGFya3JlZDtcclxufVxyXG5cclxuLm1lbnUtYnRuIHtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG4ubWVudS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYTpsaW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/restaurant.service */ "./src/app/services/restaurant.service.ts");





var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent(restaurantService, router, dataService) {
        this.restaurantService = restaurantService;
        this.router = router;
        this.dataService = dataService;
        this.restaurants = [];
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restaurantService.getAllRestaurants()
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_restaurant_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
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

module.exports = "body {\r\n  min-height: 100vh;\r\n  background: beige;\r\n  padding-top: 1px;\r\n}\r\n\r\n#restaurant-name{\r\n  margin: 20px 0;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.main {\r\n  margin-top: 120px;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-gap: 2px;\r\n  width: 60%;\r\n  margin: 20px 20%;\r\n  background: tan;\r\n  border: dimgrey solid 2px;\r\n  box-shadow: 9px 7px 10px 0 rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n.subgrid {\r\n  display: grid;\r\n  grid-template-columns: 5fr 1fr;\r\n  grid-gap: 2px;\r\n  border: lightgoldenrodyellow solid 1px;\r\n  margin: 0 20px 20px 20px;\r\n  background: lightgrey;\r\n}\r\n\r\n.header {\r\n  display: grid;\r\n  grid-template-columns: 2fr 3fr 1fr;\r\n  grid-gap: 1px;\r\n  background: white;\r\n  border-bottom: #333 solid 2px;\r\n}\r\n\r\n.header > div {\r\n  padding: .5em;\r\n  background: rosybrown;\r\n  text-align: center;\r\n}\r\n\r\n.subgrid > div {\r\n  padding: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n  text-align: left;\r\n  word-break: break-word;\r\n}\r\n\r\n.buy {\r\n  Grid-row-start: 1;\r\n  Grid-row-end: 4;\r\n  Grid-column-start: 2;\r\n  Grid-column-end: 3;\r\n}\r\n\r\n.section {\r\n  padding: 20px 10px 20px 100px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n}\r\n\r\n.section > button {\r\n  background-color: tan;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.section > button:hover {\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}\r\n\r\n.bold-color {\r\n  font-weight: bold;\r\n  font-size: larger;\r\n  color: darkred;\r\n}\r\n\r\n.bold-color-header {\r\n  font-weight: bold;\r\n  font-size: x-large;\r\n  color: darkred;\r\n}\r\n\r\n.bold-red {\r\n  font-weight: bold;\r\n  color: darkred;\r\n}\r\n\r\n#order {\r\n  top: 0;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  height: 50px;\r\n  background-color: white;\r\n  grid-gap: 1px;\r\n  border-bottom: #333 solid 6px;\r\n}\r\n\r\n#order > div {\r\n  padding-left: 10px;\r\n  background: #aaaaaa;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n  text-align: left;\r\n  word-break: break-word;\r\n}\r\n\r\n#order button {\r\n  background-color: #4CAF50;\r\n  padding: 8px;\r\n  width: 50%;\r\n  margin-left: 25%;\r\n  font-weight: bold;\r\n  border: silver solid 1px;\r\n  cursor: pointer;\r\n}\r\n\r\n#order button:hover {\r\n  background-color: #3e8e41;\r\n}\r\n\r\n#orderDetails {\r\n  display: grid;\r\n  grid-gap: 1px;\r\n  width: 60%;\r\n  margin-left: 20%;\r\n  border: black solid 2px;\r\n}\r\n\r\n#orderDetailsName {\r\n  padding: 20px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n  background: silver;\r\n}\r\n\r\n#orderDetailsHeader {\r\n  display: grid;\r\n  grid-gap: 1px;\r\n  grid-template-columns: 4fr 1fr 1fr 1fr 2fr;\r\n}\r\n\r\n#orderDetailsHeader > div {\r\n  padding: .5em;\r\n  background: rosybrown;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n  font-weight: bold;\r\n}\r\n\r\n#orderDetailsSubgrid {\r\n  display: grid;\r\n  grid-template-columns: 4fr 1fr 1fr 1fr 2fr;\r\n  grid-gap: 1px;\r\n}\r\n\r\n#orderDetailsSubgrid > div {\r\n  padding: .5em;\r\n  background: silver;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n}\r\n\r\n#orderDetailsSubgrid > .dish-name {\r\n  text-align: left;\r\n  word-break: break-word;\r\n}\r\n\r\n#totalSubgrid {\r\n  display: grid;\r\n  grid-template-columns: 4fr 1fr 1fr 1fr 2fr;\r\n  grid-gap: 1px;\r\n\r\n}\r\n\r\n#total {\r\n  Grid-column-start: 1;\r\n  Grid-column-end: 4;\r\n}\r\n\r\n#totalSubgrid > div {\r\n  padding: .5em;\r\n  background: silver;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n  font-weight: bold;\r\n\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}\r\n\r\n#orderDetailsSubgrid button {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: silver solid 1px;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\n#orderDetailsSubgrid button:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#cancel-btn {\r\n  margin: 10px 10px 10px 20%;\r\n  padding: 12px;\r\n  width: 15%;\r\n  background-color: indianred;\r\n  font-weight: bold;\r\n  border: none;\r\n  cursor: pointer;\r\n  opacity: 0.9;\r\n}\r\n\r\n#confirm-btn {\r\n  padding: 12px;\r\n  width: 80%;\r\n  border: none;\r\n  cursor: pointer;\r\n  opacity: 0.9;\r\n}\r\n\r\n#confirm-btn:hover, #cancel-btn:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.increase-btn {\r\n  background-color: #4CAF50;\r\n\r\n}\r\n\r\n.reduce-btn {\r\n  background-color: goldenrod;\r\n\r\n}\r\n\r\n.delete-btn {\r\n  background-color: indianred;\r\n}\r\n\r\n#confirm-btn {\r\n  background-color: #4CAF50;\r\n  border: whitesmoke solid 1px;\r\n  font-weight: bold;\r\n}\r\n\r\n.buy-btn {\r\n  margin: 10px 10px auto auto;\r\n  padding: 10px 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  background-color: #333;\r\n  color: #f2f2f2;\r\n}\r\n\r\n.buy-btn:hover {\r\n  background: whitesmoke;\r\n  color: black;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXN0YXVyYW50cy9zaW5nbGUtcmVzdGF1cmFudC9zaW5nbGUtcmVzdGF1cmFudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHNDQUFzQztFQUN0Qyx3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxNQUFNO0VBQ04sYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxhQUFhOztBQUVmOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7O0FBRW5COztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLDJCQUEyQjs7QUFFN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGlCQUFpQjtBQUNuQjs7QUFJQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVzdGF1cmFudHMvc2luZ2xlLXJlc3RhdXJhbnQvc2luZ2xlLXJlc3RhdXJhbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGJlaWdlO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbiNyZXN0YXVyYW50LW5hbWV7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAycHg7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDIwcHggMjAlO1xyXG4gIGJhY2tncm91bmQ6IHRhbjtcclxuICBib3JkZXI6IGRpbWdyZXkgc29saWQgMnB4O1xyXG4gIGJveC1zaGFkb3c6IDlweCA3cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbn1cclxuXHJcbi5zdWJncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcclxuICBncmlkLWdhcDogMnB4O1xyXG4gIGJvcmRlcjogbGlnaHRnb2xkZW5yb2R5ZWxsb3cgc29saWQgMXB4O1xyXG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDFmcjtcclxuICBncmlkLWdhcDogMXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b206ICMzMzMgc29saWQgMnB4O1xyXG59XHJcblxyXG4uaGVhZGVyID4gZGl2IHtcclxuICBwYWRkaW5nOiAuNWVtO1xyXG4gIGJhY2tncm91bmQ6IHJvc3licm93bjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWJncmlkID4gZGl2IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uYnV5IHtcclxuICBHcmlkLXJvdy1zdGFydDogMTtcclxuICBHcmlkLXJvdy1lbmQ6IDQ7XHJcbiAgR3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgR3JpZC1jb2x1bW4tZW5kOiAzO1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4IDIwcHggMTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uID4gYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0YW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb24gPiBidXR0b246aG92ZXIge1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ib2xkLWNvbG9yIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBjb2xvcjogZGFya3JlZDtcclxufVxyXG5cclxuLmJvbGQtY29sb3ItaGVhZGVyIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuXHJcbi5ib2xkLXJlZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuXHJcbiNvcmRlciB7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZ3JpZC1nYXA6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAjMzMzIHNvbGlkIDZweDtcclxufVxyXG5cclxuI29yZGVyID4gZGl2IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2FhYWFhYTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuI29yZGVyIGJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogc2lsdmVyIHNvbGlkIDFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNvcmRlciBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcbn1cclxuXHJcbiNvcmRlckRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDFweDtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgYm9yZGVyOiBibGFjayBzb2xpZCAycHg7XHJcbn1cclxuXHJcbiNvcmRlckRldGFpbHNOYW1lIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZDogc2lsdmVyO1xyXG59XHJcblxyXG4jb3JkZXJEZXRhaWxzSGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyIDFmciAxZnIgMmZyO1xyXG59XHJcblxyXG4jb3JkZXJEZXRhaWxzSGVhZGVyID4gZGl2IHtcclxuICBwYWRkaW5nOiAuNWVtO1xyXG4gIGJhY2tncm91bmQ6IHJvc3licm93bjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4jb3JkZXJEZXRhaWxzU3ViZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnIgMWZyIDFmciAyZnI7XHJcbiAgZ3JpZC1nYXA6IDFweDtcclxufVxyXG5cclxuXHJcbiNvcmRlckRldGFpbHNTdWJncmlkID4gZGl2IHtcclxuICBwYWRkaW5nOiAuNWVtO1xyXG4gIGJhY2tncm91bmQ6IHNpbHZlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcblxyXG4jb3JkZXJEZXRhaWxzU3ViZ3JpZCA+IC5kaXNoLW5hbWUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuI3RvdGFsU3ViZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnIgMWZyIDFmciAyZnI7XHJcbiAgZ3JpZC1nYXA6IDFweDtcclxuXHJcbn1cclxuXHJcbiN0b3RhbCB7XHJcbiAgR3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgR3JpZC1jb2x1bW4tZW5kOiA0O1xyXG59XHJcblxyXG4jdG90YWxTdWJncmlkID4gZGl2IHtcclxuICBwYWRkaW5nOiAuNWVtO1xyXG4gIGJhY2tncm91bmQ6IHNpbHZlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG5cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuI29yZGVyRGV0YWlsc1N1YmdyaWQgYnV0dG9uIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyOiBzaWx2ZXIgc29saWQgMXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbiNvcmRlckRldGFpbHNTdWJncmlkIGJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuI2NhbmNlbC1idG4ge1xyXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMjAlO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbiNjb25maXJtLWJ0biB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4jY29uZmlybS1idG46aG92ZXIsICNjYW5jZWwtYnRuOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uaW5jcmVhc2UtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG5cclxufVxyXG5cclxuLnJlZHVjZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcclxuXHJcbn1cclxuXHJcbi5kZWxldGUtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQ7XHJcbn1cclxuXHJcbiNjb25maXJtLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBib3JkZXI6IHdoaXRlc21va2Ugc29saWQgMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuXHJcbi5idXktYnRuIHtcclxuICBtYXJnaW46IDEwcHggMTBweCBhdXRvIGF1dG87XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuLmJ1eS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/restaurants/single-restaurant/single-restaurant.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/restaurants/single-restaurant/single-restaurant.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n<div id=\"restaurant-name\" class=\"bold-color-header\">{{restaurantName}}</div>\r\n\r\n<div class=\"grid\" *ngFor=\"let sect of menuSections\">\r\n  <div class=\"section\" (click)=\"showSection(sect.id)\"><span class=\"bold-color\">{{sect.name}}</span>\r\n    <button *ngIf=\"!showSect[sect.id]\"><span class=\"bold-color\">&#9660;</span>\r\n    </button>\r\n    <button *ngIf=\"showSect[sect.id]\"><span class=\"bold-color\">&#9650;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div *ngIf=\"showSect[sect.id]\">\r\n    <div class=\"subgrid\" *ngFor=\"let dish of sect.dishes\">\r\n      <div class=\"dish-name\"><span class=\"bold\">{{dish.name}}</span></div>\r\n      <div class=\"buy\">\r\n        <button class=\"buy-btn\" (click)=\"addDishToOrder(dish.id)\">buy</button>\r\n      </div>\r\n      <div class=\"dish-description\">{{dish.description}}</div>\r\n      <div><span class=\"bold\">Price:</span>{{dish.price}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n</body>\r\n\r\n"

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
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/Order */ "./src/app/models/Order.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/restaurant.service */ "./src/app/services/restaurant.service.ts");







var SingleRestaurantComponent = /** @class */ (function () {
    function SingleRestaurantComponent(restaurantService, dataService, activatedRoute, appComponent) {
        this.restaurantService = restaurantService;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.appComponent = appComponent;
        this.totalAmount = 0;
        this.totalCost = 0;
        this.restaurantId = '';
        this.menuSections = [];
        this.ordDishes = [];
        this.newOrder = new _models_Order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
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
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.restaurantName = params.name;
        });
        this.restaurantService.getMenuSections(this.restaurantId)
            .subscribe(function (sections) {
            _this.menuSections = sections;
            _this.ordDishes = [];
            for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
                var s = sections_1[_i];
                for (var _a = 0, _b = s.dishes; _a < _b.length; _a++) {
                    var d = _b[_a];
                    _this.ordDishes.push(d);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    SingleRestaurantComponent.prototype.updateData = function () {
        for (var _i = 0, _a = this.menuSections; _i < _a.length; _i++) {
            var sect = _a[_i];
            this.showSect.push(false);
        }
        if (+sessionStorage.getItem('_totalAmount') !== 0) {
            if (this.restaurantId === sessionStorage.getItem('_restaurantId')) {
                this.newOrder = JSON.parse(sessionStorage.getItem('_newOrder'));
                this.totalAmount = +sessionStorage.getItem('_totalAmount');
                this.totalCost = +sessionStorage.getItem('_totalCost');
            }
            else {
                this.appComponent.showModal('You have an unconfirmed order at another restaurant. ' +
                    'If you place an order at opened restaurant, the previous one will be canceled.');
            }
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
        this.totalAmount += 1;
        this.totalCost += item.price;
        sessionStorage.setItem('_restaurantId', this.restaurantId);
        sessionStorage.setItem('_restaurantName', this.restaurantName);
        sessionStorage.setItem('_totalAmount', this.totalAmount.toString());
        sessionStorage.setItem('_totalCost', this.totalCost.toString());
        sessionStorage.setItem('_newOrder', JSON.stringify(this.newOrder));
        this.appComponent.changeAmount();
    };
    SingleRestaurantComponent.prototype.showSection = function (id) {
        if (this.showSect[id] === true) {
            this.showSect[id] = false;
        }
        else {
            this.showSect[id] = true;
        }
    };
    SingleRestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-restaurant',
            template: __webpack_require__(/*! ./single-restaurant.component.html */ "./src/app/modules/restaurants/single-restaurant/single-restaurant.component.html"),
            styles: [__webpack_require__(/*! ./single-restaurant.component.css */ "./src/app/modules/restaurants/single-restaurant/single-restaurant.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_restaurant_service__WEBPACK_IMPORTED_MODULE_6__["RestaurantService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
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

module.exports = "<form #signInForm='ngForm' class=\"form\">\r\n  <h2>Sign in</h2>\r\n  <p>Please, fill in this form to sign in.</p>\r\n  <hr>\r\n  <label><b>Login or email:</b></label>\r\n  <input\r\n    [(ngModel)]=\"logForm.loginEmail\"\r\n    [ngStyle]=\"{border: usernameInp.invalid && usernameInp.dirty? '2px solid red' : '2px solid green'}\"\r\n    #usernameInp='ngModel'\r\n    required pattern=\"({{dataService.passLoginRegExp.source}})|({{dataService.emailRegExp.source}})\"\r\n    placeholder=\"login / email\"\r\n    size=\"25\"\r\n    type=\"text\"\r\n    name=\"username\"\r\n    autocomplete=\"off\">\r\n  <label><b>Password:</b></label>\r\n  <input\r\n    [(ngModel)]=\"logForm.password\"\r\n    [ngStyle]=\"{border: passwordInp.invalid && passwordInp.dirty? '2px solid red' : '2px solid green'}\"\r\n    #passwordInp='ngModel'\r\n    required pattern=\"{{dataService.passLoginRegExp.source}}\"\r\n    placeholder=\"password\"\r\n    size=\"25\"\r\n    type=\"password\"\r\n    name=\"password\">\r\n  <button\r\n    [disabled]=\"signInForm.invalid\"\r\n    (click)=\"signIn()\"\r\n  >Sign in\r\n  </button>\r\n</form>\r\n\r\n\r\n"

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
/* harmony import */ var _models_BasicData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/BasicData */ "./src/app/models/BasicData.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");







var SigninPageComponent = /** @class */ (function () {
    function SigninPageComponent(userService, dataService, activatedRoute, router, appComponent) {
        this.userService = userService;
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.appComponent = appComponent;
        this.logForm = {
            loginEmail: '',
            password: ''
        };
        this.basicData = new _models_BasicData__WEBPACK_IMPORTED_MODULE_2__["BasicData"]();
    }
    SigninPageComponent.prototype.ngOnInit = function () {
    };
    SigninPageComponent.prototype.signIn = function () {
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
        this.userService.login(this.basicData)
            .subscribe(function (value) {
            var token = value.headers.get('Authorization');
            var userClass = value.headers.get('UserClass');
            var userId = value.headers.get('UserId');
            var loginStatusCode = Number(value.headers.get('LoginStatusCode')); // +'string'
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
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

module.exports = "* {\r\n  box-sizing: border-box\r\n}\r\n\r\n.form {\r\n  padding: 16px;\r\n  margin-left: 35%;\r\n  margin-right: 35%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form > input, .form > div {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin: 5px 0 10px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n  word-break: break-all;\r\n}\r\n\r\n.form > div {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.form > input:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nbutton {\r\n  background-color: #4CAF50;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaWdudXAvc2lnbnVwLXBhZ2Uvc2lnbnVwLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NpZ251cC9zaWdudXAtcGFnZS9zaWdudXAtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gIG1hcmdpbi1yaWdodDogMzUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtID4gaW5wdXQsIC5mb3JtID4gZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4IDAgMTBweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbi5mb3JtID4gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZm9ybSA+IGlucHV0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/signup/signup-page/signup-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/signup/signup-page/signup-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #signUpForm='ngForm' class=\"form\">\r\n  <h2>Sign up</h2>\r\n  <p>Please, fill in this form to create an account.<br>\r\n    You will receive a confirmation email that contains a link to activate your account.</p>\r\n\r\n  <hr>\r\n\r\n  <label><b>Type of user:</b></label>\r\n  <div>\r\n    <div>\r\n      <input #clientRadio type=\"radio\" name=\"type\" value=\"client\" checked> client\r\n    </div>\r\n    <div>\r\n      <input #ownerRadio type=\"radio\" name=\"type\" value=\"owner\"> owner\r\n    </div>\r\n  </div>\r\n\r\n  <label><b>Login:</b></label>\r\n  <input\r\n    [(ngModel)]=\"regForm.username\"\r\n    [ngStyle]=\"{border: usernameInp.invalid && usernameInp.dirty ? '2px solid red' : '2px solid green'}\"\r\n    #usernameInp='ngModel'\r\n    required pattern=\"{{dataService.passLoginRegExp.source}}\"\r\n    placeholder=\"3-20 latin letters/numbers\"\r\n    size=\"25\"\r\n    type=\"text\"\r\n    name=\"username\"\r\n    autocomplete=\"off\">\r\n  <label><b>Email:</b></label>\r\n  <input\r\n    [(ngModel)]=\"regForm.email\"\r\n    [ngStyle]=\"{border: emailInp.invalid && emailInp.dirty? '2px solid red' : '2px solid green'}\"\r\n    #emailInp='ngModel'\r\n    required pattern=\"{{dataService.emailRegExp.source}}\"\r\n    placeholder=\"email\"\r\n    size=\"25\"\r\n    type=\"text\"\r\n    name=\"email\"\r\n    autocomplete=\"off\">\r\n  <label><b>Password:</b></label>\r\n  <input\r\n    [(ngModel)]=\"regForm.password\"\r\n    [ngStyle]=\"{border: passwordInp.invalid && passwordInp.dirty? '2px solid red' : '2px solid green'}\"\r\n    #passwordInp='ngModel'\r\n    required pattern=\"{{dataService.passLoginRegExp.source}}\"\r\n    placeholder=\"3-20 latin letters/numbers\"\r\n    size=\"25\"\r\n    type=\"password\"\r\n    name=\"password\">\r\n  <button\r\n    [disabled]=\"signUpForm.invalid\"\r\n    (click)=\"saveUser(clientRadio.checked, ownerRadio.checked)\"\r\n  >Sign up\r\n  </button>\r\n</form>\r\n\r\n"

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
/* harmony import */ var _models_Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Client */ "./src/app/models/Client.ts");
/* harmony import */ var _models_Owner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/Owner */ "./src/app/models/Owner.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");







var SignupPageComponent = /** @class */ (function () {
    function SignupPageComponent(userService, dataService, appComponent) {
        this.userService = userService;
        this.dataService = dataService;
        this.appComponent = appComponent;
        this.regForm = {
            username: '',
            password: '',
            email: ''
        };
        this.client = new _models_Client__WEBPACK_IMPORTED_MODULE_2__["Client"]();
        this.owner = new _models_Owner__WEBPACK_IMPORTED_MODULE_3__["Owner"]();
    }
    SignupPageComponent.prototype.ngOnInit = function () {
    };
    SignupPageComponent.prototype.saveUser = function (isClient, isOwner) {
        var _this = this;
        if (isClient) {
            this.client.username = this.regForm.username;
            this.client.password = this.regForm.password;
            this.client.email = this.regForm.email;
            this.userService.saveClient(this.client)
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
            this.userService.saveOwner(this.owner)
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
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
        // public url = 'http://localhost:8080';
        this.url = 'http://ec2-18-217-248-193.us-east-2.compute.amazonaws.com:8080';
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

/***/ "./src/app/services/restaurant.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/restaurant.service.ts ***!
  \************************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");




var RestaurantService = /** @class */ (function () {
    function RestaurantService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.url = this.dataService.url;
    }
    RestaurantService.prototype.getAllRestaurants = function () {
        return this.http.get(this.url + '/restaurants/get');
    };
    RestaurantService.prototype.getRestaurants = function (ownerId) {
        return this.http.get(this.url + '/restaurants/get/' + ownerId, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.addRestaurant = function (ownerId, formData) {
        console.log(formData);
        return this.http.post(this.url + '/restaurant/add/' + ownerId, formData, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.deleteRestaurant = function (id) {
        return this.http.delete(this.url + '/restaurant/delete/' + id, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.changeRestaurantData = function (restaurant) {
        return this.http.post(this.url + '/restaurant/change', restaurant, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.changeLogo = function (restId, formData) {
        return this.http.post(this.url + '/restaurant/change/logo/' + restId, formData, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.getMenuSections = function (restaurantId) {
        return this.http.get(this.url + '/restaurant/menu-sections/get/' + restaurantId);
    };
    RestaurantService.prototype.addMenuSection = function (restaurantId, newMenuSection) {
        return this.http.post(this.url + '/restaurant/menu-section/add/' + restaurantId, newMenuSection, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.changeMenuSection = function (menuSection) {
        return this.http.post(this.url + '/restaurant/menu-section/change', menuSection, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.deleteMenuSection = function (id) {
        return this.http.delete(this.url + '/restaurant/menu-section/delete/' + id, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.getDishesBySectionId = function (sectionId) {
        return this.http.get(this.url + '/restaurant/dishes/get/{sectionId}' + sectionId, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.getDishesByRestaurantId = function (restaurantId) {
        return this.http.get(this.url + '/restaurant/dishes/get/' + restaurantId, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.addDish = function (restaurantId, sectionId, dish) {
        return this.http.post(this.url + '/restaurant/dish/add/' + restaurantId + '/' + sectionId, dish, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.changeDish = function (dish) {
        return this.http.post(this.url + '/restaurant/dish/change', dish, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService.prototype.deleteDish = function (id) {
        return this.http.delete(this.url + '/restaurant/dish/delete/' + id, { headers: this.dataService.getAuthHeader() });
    };
    RestaurantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], RestaurantService);
    return RestaurantService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_TransferMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/TransferMessage */ "./src/app/models/TransferMessage.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");





var UserService = /** @class */ (function () {
    function UserService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.url = this.dataService.url;
    }
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.url + '/user/get/' + id, { headers: this.dataService.getAuthHeader() });
    };
    UserService.prototype.saveClient = function (client) {
        return this.http.post(this.url + '/save/client', client);
    };
    UserService.prototype.saveOwner = function (owner) {
        return this.http.post(this.url + '/save/owner', owner);
    };
    UserService.prototype.activation = function (jwt) {
        return this.http.post(this.url + '/activation', new _models_TransferMessage__WEBPACK_IMPORTED_MODULE_2__["TransferMessage"](jwt));
    };
    UserService.prototype.login = function (loginData) {
        return this.http.post(this.url + '/login/try', loginData, { observe: 'response', responseType: 'text' });
    };
    UserService.prototype.updateAccount = function (userId, basicData) {
        return this.http.post(this.url + '/user/update/' + userId, basicData, { headers: this.dataService.getAuthHeader() });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], UserService);
    return UserService;
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