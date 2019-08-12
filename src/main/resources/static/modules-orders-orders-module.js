(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-orders-orders-module"],{

/***/ "./src/app/modules/orders/orders-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/orders/orders-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/modules/orders/orders/orders.component.ts");




var routes = [
    {
        path: ':whose', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"], children: [
            { path: '', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"] },
        ]
    },
];
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/orders/orders.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/orders/orders.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/modules/orders/orders-routing.module.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/modules/orders/orders/orders.component.ts");





var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"]
            ],
            exports: [
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"],
            ]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ }),

/***/ "./src/app/modules/orders/orders/orders.component.css":
/*!************************************************************!*\
  !*** ./src/app/modules/orders/orders/orders.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  min-height: 100vh;\r\n  background: beige;\r\n  padding-top: 1px;\r\n}\r\n\r\n.navbar {\r\n  z-index: 2;\r\n  position: fixed;\r\n  top: 110px;\r\n  width: 100%;\r\n}\r\n\r\n.main {\r\n  margin-top: 120px;\r\n}\r\n\r\n#shown {\r\n  top: 0;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  height: 45px;\r\n  background-color: white;\r\n  grid-gap: 1px;\r\n  border-bottom: #333 solid 6px;\r\n}\r\n\r\n#shown > div {\r\n  padding-left: 10px;\r\n  background: #aaaaaa;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n  word-break: break-word;\r\n}\r\n\r\n#show {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n#show > button {\r\n  border: none;\r\n  cursor: pointer;\r\n  height: 50px;\r\n  width: 500px;\r\n}\r\n\r\n#show > div {\r\n  height: 50px;\r\n  width: 200px;\r\n}\r\n\r\n#show > button:hover {\r\n  background-color: #3e8e41;\r\n\r\n}\r\n\r\n.drop-btn {\r\n  background: rosybrown;\r\n  border: none;\r\n  cursor: pointer;\r\n  height: 50px;\r\n  width: 200px;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n  background-color: #f1f1f1;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n  /*cursor: pointer;*/\r\n}\r\n\r\n.dropdown:hover .dropbtn {\r\n  background-color: #3e8e41;\r\n}\r\n\r\n.order {\r\n  display: grid;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  grid-gap: 1px;\r\n  width: 60%;\r\n  margin-left: 20%;\r\n  border: black solid 2px;\r\n  box-shadow: 9px 7px 10px 0 rgba(0,0,0,0.26);\r\n}\r\n\r\n.order-header {\r\n  display: grid;\r\n  grid-template-columns: 5fr 1fr 1fr 1fr;\r\n}\r\n\r\n.order-header > div {\r\n  padding: .5em;\r\n  background: silver;\r\n  word-break: break-all;\r\n  Grid-column-start: 1;\r\n  Grid-column-end: 2;\r\n}\r\n\r\n.order-header > .actions {\r\n  Grid-column-start: 2;\r\n  Grid-column-end: 5;\r\n  Grid-row-start: 1;\r\n  Grid-row-end: 5;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  background-color: silver;\r\n}\r\n\r\n.order-header > .actions > button {\r\n  height: 50px;\r\n  width: 100px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.order-header > .actions > button:hover {\r\n  background-color: #3e8e41;\r\n  cursor: pointer;\r\n}\r\n\r\n.header-names {\r\n  display: grid;\r\n  grid-gap: 1px;\r\n  grid-template-columns: 5fr 1fr 1fr 1fr;\r\n}\r\n\r\n.header-names > div {\r\n  padding: .5em;\r\n  background: rosybrown;\r\n  text-align: center;\r\n}\r\n\r\n.order-details {\r\n  display: grid;\r\n  grid-template-columns: 5fr 1fr 1fr 1fr;\r\n  grid-gap: 1px;\r\n}\r\n\r\n.order-details > div {\r\n  padding: .5em;\r\n  background: silver;\r\n  text-align: center;\r\n}\r\n\r\n.total {\r\n  Grid-column-start: 1;\r\n  Grid-column-end: 4;\r\n}\r\n\r\n.bold-shown{\r\n  font-weight: bold;\r\n  color: darkred;\r\n}\r\n\r\n.bold{\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxNQUFNO0VBQ04sYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiwyQ0FBMkM7RUFDM0MsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29yZGVycy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IGJlaWdlO1xyXG4gIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMTEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxufVxyXG5cclxuI3Nob3duIHtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gIGhlaWdodDogNDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBncmlkLWdhcDogMXB4O1xyXG4gIGJvcmRlci1ib3R0b206ICMzMzMgc29saWQgNnB4O1xyXG59XHJcblxyXG5cclxuI3Nob3duID4gZGl2IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2FhYWFhYTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcblxyXG4jc2hvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4jc2hvdyA+IGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4jc2hvdyA+IGRpdiB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuI3Nob3cgPiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcblxyXG59XHJcblxyXG4uZHJvcC1idG4ge1xyXG4gIGJhY2tncm91bmQ6IHJvc3licm93bjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvKmN1cnNvcjogcG9pbnRlcjsqL1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcbn1cclxuXHJcblxyXG4ub3JkZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdyaWQtZ2FwOiAxcHg7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xyXG4gIGJveC1zaGFkb3c6IDlweCA3cHggMTBweCAwIHJnYmEoMCwwLDAsMC4yNik7XHJcbn1cclxuXHJcbi5vcmRlci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyIDFmciAxZnI7XHJcbn1cclxuXHJcbi5vcmRlci1oZWFkZXIgPiBkaXYge1xyXG4gIHBhZGRpbmc6IC41ZW07XHJcbiAgYmFja2dyb3VuZDogc2lsdmVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICBHcmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBHcmlkLWNvbHVtbi1lbmQ6IDI7XHJcbn1cclxuXHJcbi5vcmRlci1oZWFkZXIgPiAuYWN0aW9ucyB7XHJcbiAgR3JpZC1jb2x1bW4tc3RhcnQ6IDI7XHJcbiAgR3JpZC1jb2x1bW4tZW5kOiA1O1xyXG4gIEdyaWQtcm93LXN0YXJ0OiAxO1xyXG4gIEdyaWQtcm93LWVuZDogNTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxufVxyXG5cclxuLm9yZGVyLWhlYWRlciA+IC5hY3Rpb25zID4gYnV0dG9uIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vcmRlci1oZWFkZXIgPiAuYWN0aW9ucyA+IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItbmFtZXMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDFweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyIDFmcjtcclxufVxyXG5cclxuLmhlYWRlci1uYW1lcyA+IGRpdiB7XHJcbiAgcGFkZGluZzogLjVlbTtcclxuICBiYWNrZ3JvdW5kOiByb3N5YnJvd247XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3JkZXItZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyIDFmcjtcclxuICBncmlkLWdhcDogMXB4O1xyXG59XHJcblxyXG4ub3JkZXItZGV0YWlscyA+IGRpdiB7XHJcbiAgcGFkZGluZzogLjVlbTtcclxuICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG90YWwge1xyXG4gIEdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIEdyaWQtY29sdW1uLWVuZDogNDtcclxufVxyXG5cclxuLmJvbGQtc2hvd257XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuXHJcbi5ib2xke1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/orders/orders/orders.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/orders/orders/orders.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n<!--<div *ngIf = \"myOrders\">-->\r\n<div class=\"navbar\">\r\n  <div id=\"shown\">\r\n    <div><span class=\"bold-shown\">{{whoseOrdersHeader}}</span></div>\r\n    <div><span class=\"bold-shown\">Restaurant:</span> {{restForShowName}}</div>\r\n    <div><span class=\"bold-shown\">Status of orders:</span> {{statusForShow}}</div>\r\n  </div>\r\n\r\n  <div id=\"show\">\r\n    <div class=\"dropdown\">\r\n      <button class=\"drop-btn\">Сhoose a restaurant</button>\r\n      <div class=\"dropdown-content\">\r\n        <a (click)=\"showAll()\">Show all orders</a>\r\n        <a *ngFor=\"let rest of restaurants\" (click)=\"showByRestaurant(rest.id)\">{{rest.name}}</a>\r\n      </div>\r\n    </div>\r\n    <button (click)=\"showByRestaurant(restForShowId)\">All</button>\r\n    <button (click)=\"showOrdered()\">Ordered</button>\r\n    <button (click)=\"showCanceledByClient()\">Canceled by client</button>\r\n    <button (click)=\"showCanceledByRest()\">Canceled by restaurant</button>\r\n    <button (click)=\"showConfirmed()\">Confirmed by restaurant</button>\r\n    <button (click)=\"showPaid()\">Paid</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"main\">\r\n  <div class=\"order\" *ngFor=\"let ord of ordersForShow\">\r\n    <div class=\"order-header\">\r\n      <div><span class=\"bold\">Restaurant:</span>  {{ord.restaurant.name}}</div>\r\n      <div><span class=\"bold\">Date:</span>  {{ord.date | date: 'dd LLL yyyy, HH:mm'}}</div>\r\n      <div><span class=\"bold\">User:</span> {{ord.username}}</div>\r\n      <div><span class=\"bold\">Status:</span> {{ord.status}}</div>\r\n      <div class=\"actions\">\r\n        <button [disabled]=\"!showCancelOrd[ordersForShow.indexOf(ord)]\" (click)=\"cancelOrder(ord)\">Cancel</button>\r\n        <button *ngIf=\"whoseOrders == 'clients'\" [disabled]=\"!showConfirmOrd[ordersForShow.indexOf(ord)]\"\r\n                (click)=\"confirmOrder(ord)\">Confirm\r\n        </button>\r\n        <button *ngIf=\"whoseOrders == 'clients'\" [disabled]=\"!showPaidOrd[ordersForShow.indexOf(ord)]\"\r\n                (click)=\"paidOrder(ord)\">Paid\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-names\">\r\n      <div>Name of dish</div>\r\n      <div>Amount</div>\r\n      <div>Price</div>\r\n      <div>Cost</div>\r\n    </div>\r\n    <div class=\"order-details\" *ngFor=\"let dish of ord.dishes\">\r\n      <div>{{dish.name}}</div>\r\n      <div>{{ord.amount[ord.dishes.indexOf(dish)]}}</div>\r\n      <div>{{dish.price}}</div>\r\n      <div>{{ord.amount[ord.dishes.indexOf(dish)] * dish.price | number}}</div>\r\n    </div>\r\n    <div class=\"order-details\">\r\n      <div class=\"total\"><span class=\"bold\">Total sum</span></div>\r\n      <div><span class=\"bold\">{{totalCost[myOrders.indexOf(ord)] | number}}</span></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--</div>-->\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/modules/orders/orders/orders.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/orders/orders/orders.component.ts ***!
  \***********************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/OrderStatus */ "./src/app/models/OrderStatus.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");






var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(mainService, activatedRoute, appComponent) {
        this.mainService = mainService;
        this.activatedRoute = activatedRoute;
        this.appComponent = appComponent;
        this.whoseOrders = '';
        this.myOrders = [];
        this.ordersForShow = [];
        this.restForShowId = null;
        this.restForShowName = '';
        this.statusForShow = '';
        this.totalCost = [];
        this.showCancelOrd = [];
        this.showConfirmOrd = [];
        this.showPaidOrd = [];
        this.restaurants = [];
        this.whoseOrdersHeader = '';
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.whoseOrders = params.whose;
            _this.loadData();
        });
    };
    OrdersComponent.prototype.loadData = function () {
        var _this = this;
        this.myOrders = [];
        switch (this.whoseOrders) {
            case 'my': {
                this.mainService.getMyOrders(localStorage.getItem('_userId'))
                    .subscribe(function (val) {
                    val.reverse();
                    _this.myOrders = val;
                    _this.updateData();
                }, function (error) {
                    console.log(error);
                });
                break;
            }
            case 'clients': {
                this.mainService.getOrdersByOwnerId(localStorage.getItem('_userId'))
                    .subscribe(function (val) {
                    val.reverse();
                    _this.myOrders = val;
                    _this.updateData();
                }, function (error) {
                    console.log(error);
                });
                break;
            }
            default: {
                console.log('ERROR: whoseOrders = ' + this.whoseOrders);
                break;
            }
        }
    };
    OrdersComponent.prototype.updateData = function () {
        this.resetShow();
        this.restForShowId = null;
        this.restaurants = [];
        this.totalCost = [];
        this.ordersForShow = this.myOrders;
        this.restForShowName = 'all';
        this.statusForShow = 'all';
        console.log(this.myOrders);
        if (this.whoseOrders === 'my') {
            this.whoseOrdersHeader = 'My orders';
        }
        else if (this.whoseOrders === 'clients') {
            this.whoseOrdersHeader = 'Clients\' orders';
        }
        else {
            this.whoseOrdersHeader = 'ERROR: whoseOrders = ' + this.whoseOrders;
        }
        var _loop_1 = function (ord) {
            var ordCost = 0;
            for (var _i = 0, _a = ord.dishes; _i < _a.length; _i++) {
                var dish = _a[_i];
                ordCost += dish.price * ord.amount[ord.dishes.indexOf(dish)];
            }
            this_1.totalCost.push(ordCost);
            var item = this_1.restaurants.find(function (i) { return i.id === ord.restaurant.id; });
            if (!item) {
                this_1.restaurants.push(ord.restaurant);
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.myOrders; _i < _a.length; _i++) {
            var ord = _a[_i];
            _loop_1(ord);
        }
        this.assignShow(this.myOrders);
    };
    OrdersComponent.prototype.cancelOrder = function (ord) {
        var _this = this;
        if (this.whoseOrders === 'my') {
            ord.status = _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].CANCELED_BY_CLIENT;
        }
        else {
            ord.status = _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].CANCELED_BY_RESTAURANT;
        }
        this.mainService.changeOrderStatus(ord)
            .subscribe(function (value) {
            _this.appComponent.showModal(value.message);
            _this.loadData();
        }, function (error) {
            _this.appComponent.showModal(error);
        });
    };
    OrdersComponent.prototype.confirmOrder = function (ord) {
        var _this = this;
        ord.status = _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].CONFIRMED_BY_RESTAURANT;
        this.mainService.changeOrderStatus(ord)
            .subscribe(function (value) {
            _this.appComponent.showModal(value.message);
            _this.loadData();
        }, function (error) {
            _this.appComponent.showModal(error);
        });
    };
    OrdersComponent.prototype.paidOrder = function (ord) {
        var _this = this;
        ord.status = _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].PAID;
        this.mainService.changeOrderStatus(ord)
            .subscribe(function (value) {
            _this.appComponent.showModal(value.message);
            _this.loadData();
        }, function (error) {
            _this.appComponent.showModal(error);
        });
    };
    OrdersComponent.prototype.showAll = function () {
        // this.router.navigate(['orders/' + this.whoseOrders]);
        this.loadData();
    };
    OrdersComponent.prototype.showByRestaurant = function (id) {
        if (id === null) {
            this.loadData();
        }
        else {
            var rest = this.restaurants.find(function (i) { return i.id === id; });
            this.restForShowId = rest.id;
            this.restForShowName = rest.name;
            this.statusForShow = 'all';
            this.resetShow();
            for (var _i = 0, _a = this.myOrders; _i < _a.length; _i++) {
                var ord = _a[_i];
                if (ord.restaurant.id === rest.id) {
                    this.ordersForShow.push(ord);
                }
            }
            this.assignShow(this.ordersForShow);
        }
    };
    OrdersComponent.prototype.showOrdered = function () {
        this.resetShow();
        for (var _i = 0, _a = this.myOrders; _i < _a.length; _i++) {
            var ord = _a[_i];
            if (((this.restForShowId === null) || (ord.restaurant.id === this.restForShowId)) &&
                (ord.status === _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].ORDERED)) {
                this.ordersForShow.push(ord);
            }
        }
        this.assignShow(this.ordersForShow);
        this.statusForShow = 'ordered';
    };
    OrdersComponent.prototype.showCanceledByClient = function () {
        this.resetShow();
        for (var _i = 0, _a = this.myOrders; _i < _a.length; _i++) {
            var ord = _a[_i];
            if (((this.restForShowId === null) || (ord.restaurant.id === this.restForShowId)) &&
                (ord.status === _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].CANCELED_BY_CLIENT)) {
                this.ordersForShow.push(ord);
            }
        }
        this.assignShow(this.ordersForShow);
        this.statusForShow = 'canceled by client';
    };
    OrdersComponent.prototype.showCanceledByRest = function () {
        this.resetShow();
        for (var _i = 0, _a = this.myOrders; _i < _a.length; _i++) {
            var ord = _a[_i];
            if (((this.restForShowId === null) || (ord.restaurant.id === this.restForShowId)) &&
                (ord.status === _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].CANCELED_BY_RESTAURANT)) {
                this.ordersForShow.push(ord);
            }
        }
        this.assignShow(this.ordersForShow);
        this.statusForShow = 'canceled by restaurant';
    };
    OrdersComponent.prototype.showConfirmed = function () {
        this.resetShow();
        for (var _i = 0, _a = this.myOrders; _i < _a.length; _i++) {
            var ord = _a[_i];
            if (((this.restForShowId === null) || (ord.restaurant.id === this.restForShowId)) &&
                (ord.status === _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].CONFIRMED_BY_RESTAURANT)) {
                this.ordersForShow.push(ord);
            }
        }
        this.assignShow(this.ordersForShow);
        this.statusForShow = 'confirmed by restaurant';
    };
    OrdersComponent.prototype.showPaid = function () {
        this.resetShow();
        for (var _i = 0, _a = this.myOrders; _i < _a.length; _i++) {
            var ord = _a[_i];
            if (((this.restForShowId === null) || (ord.restaurant.id === this.restForShowId)) &&
                (ord.status === _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].PAID)) {
                this.ordersForShow.push(ord);
            }
        }
        this.assignShow(this.ordersForShow);
        this.statusForShow = 'paid';
    };
    OrdersComponent.prototype.assignShow = function (orders) {
        for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
            var ord = orders_1[_i];
            switch (ord.status) {
                case _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].ORDERED: {
                    this.showCancelOrd.push(true);
                    this.showConfirmOrd.push(true);
                    this.showPaidOrd.push(true);
                    break;
                }
                case _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].CONFIRMED_BY_RESTAURANT: {
                    this.showCancelOrd.push(false);
                    this.showConfirmOrd.push(false);
                    this.showPaidOrd.push(true);
                    break;
                }
                default: {
                    this.showCancelOrd.push(false);
                    this.showConfirmOrd.push(false);
                    this.showPaidOrd.push(false);
                    break;
                }
            }
        }
    };
    OrdersComponent.prototype.resetShow = function () {
        this.ordersForShow = [];
        this.showCancelOrd = [];
        this.showConfirmOrd = [];
        this.showPaidOrd = [];
    };
    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/modules/orders/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/modules/orders/orders/orders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-orders-orders-module.js.map