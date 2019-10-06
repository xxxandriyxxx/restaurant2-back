(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-orders-orders-module"],{

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

/***/ "./src/app/modules/orders/new-order/new-order.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/orders/new-order/new-order.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  min-height: 100vh;\r\n  background: beige;\r\n  padding-top: 1px;\r\n}\r\n\r\n#restaurant-name{\r\n  margin: 20px 0;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  font-size: x-large;\r\n  color: darkred;\r\n}\r\n\r\n#signInMessage {\r\n  width: 100%;\r\n  padding-top: 10px;\r\n  text-align: center;\r\n  color: crimson;\r\n  background: beige;\r\n}\r\n\r\n.bold-color {\r\n  font-weight: bold;\r\n  font-size: larger;\r\n  color: darkred;\r\n}\r\n\r\n#orderDetails {\r\n  display: grid;\r\n  grid-gap: 1px;\r\n  width: 60%;\r\n  margin-left: 20%;\r\n  border: black solid 2px;\r\n}\r\n\r\n#orderDetailsName {\r\n  padding: 20px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n  background: silver;\r\n}\r\n\r\n#orderDetailsHeader {\r\n  display: grid;\r\n  grid-gap: 1px;\r\n  grid-template-columns: 4fr 1fr 1fr 1fr 2fr;\r\n}\r\n\r\n#orderDetailsHeader > div {\r\n  padding: .5em;\r\n  background: rosybrown;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n  font-weight: bold;\r\n}\r\n\r\n#orderDetailsSubgrid {\r\n  display: grid;\r\n  grid-template-columns: 4fr 1fr 1fr 1fr 2fr;\r\n  grid-gap: 1px;\r\n}\r\n\r\n#orderDetailsSubgrid > div {\r\n  padding: .5em;\r\n  background: silver;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n}\r\n\r\n#orderDetailsSubgrid > .dish-name {\r\n  text-align: left;\r\n  word-break: break-word;\r\n}\r\n\r\n#totalSubgrid {\r\n  display: grid;\r\n  grid-template-columns: 4fr 1fr 1fr 1fr 2fr;\r\n  grid-gap: 1px;\r\n}\r\n\r\n#total {\r\n  Grid-column-start: 1;\r\n  Grid-column-end: 4;\r\n}\r\n\r\n#totalSubgrid > div {\r\n  padding: .5em;\r\n  background: silver;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  word-break: break-word;\r\n  font-weight: bold;\r\n}\r\n\r\n#orderDetailsSubgrid button {\r\n  width: 30px;\r\n  height: 30px;\r\n  border: silver solid 1px;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n\r\n#orderDetailsSubgrid button:hover {\r\n  opacity: 1;\r\n}\r\n\r\n#confirm-btn {\r\n  padding: 12px;\r\n  width: 80%;\r\n  cursor: pointer;\r\n  opacity: 0.9;\r\n  background-color: #4CAF50;\r\n  border: whitesmoke solid 1px;\r\n  font-weight: bold;\r\n}\r\n\r\n#confirm-btn:hover, #cancel-btn:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.increase-btn {\r\n  background-color: #4CAF50;\r\n}\r\n\r\n.reduce-btn {\r\n  background-color: goldenrod;\r\n}\r\n\r\n.delete-btn {\r\n  background-color: indianred;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvbmV3LW9yZGVyL25ldy1vcmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL29yZGVycy9uZXctb3JkZXIvbmV3LW9yZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiBiZWlnZTtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG59XHJcblxyXG4jcmVzdGF1cmFudC1uYW1le1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuXHJcbiNzaWduSW5NZXNzYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbiAgYmFja2dyb3VuZDogYmVpZ2U7XHJcbn1cclxuXHJcbi5ib2xkLWNvbG9yIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBjb2xvcjogZGFya3JlZDtcclxufVxyXG5cclxuI29yZGVyRGV0YWlscyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMXB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcclxufVxyXG5cclxuI29yZGVyRGV0YWlsc05hbWUge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XHJcbn1cclxuXHJcbiNvcmRlckRldGFpbHNIZWFkZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDFweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnIgMWZyIDFmciAyZnI7XHJcbn1cclxuXHJcbiNvcmRlckRldGFpbHNIZWFkZXIgPiBkaXYge1xyXG4gIHBhZGRpbmc6IC41ZW07XHJcbiAgYmFja2dyb3VuZDogcm9zeWJyb3duO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI29yZGVyRGV0YWlsc1N1YmdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyIDFmciAxZnIgMmZyO1xyXG4gIGdyaWQtZ2FwOiAxcHg7XHJcbn1cclxuXHJcbiNvcmRlckRldGFpbHNTdWJncmlkID4gZGl2IHtcclxuICBwYWRkaW5nOiAuNWVtO1xyXG4gIGJhY2tncm91bmQ6IHNpbHZlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbiNvcmRlckRldGFpbHNTdWJncmlkID4gLmRpc2gtbmFtZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4jdG90YWxTdWJncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmciAxZnIgMWZyIDJmcjtcclxuICBncmlkLWdhcDogMXB4O1xyXG59XHJcblxyXG4jdG90YWwge1xyXG4gIEdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIEdyaWQtY29sdW1uLWVuZDogNDtcclxufVxyXG5cclxuI3RvdGFsU3ViZ3JpZCA+IGRpdiB7XHJcbiAgcGFkZGluZzogLjVlbTtcclxuICBiYWNrZ3JvdW5kOiBzaWx2ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jb3JkZXJEZXRhaWxzU3ViZ3JpZCBidXR0b24ge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6IHNpbHZlciBzb2xpZCAxcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuI29yZGVyRGV0YWlsc1N1YmdyaWQgYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4jY29uZmlybS1idG4ge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgYm9yZGVyOiB3aGl0ZXNtb2tlIHNvbGlkIDFweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2NvbmZpcm0tYnRuOmhvdmVyLCAjY2FuY2VsLWJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmluY3JlYXNlLWJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxufVxyXG5cclxuLnJlZHVjZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcclxufVxyXG5cclxuLmRlbGV0ZS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluZGlhbnJlZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/orders/new-order/new-order.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/orders/new-order/new-order.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n<div id=\"signInMessage\" *ngIf=\"!logged\">\n  Please, <a routerLink=\"/sign-in\">sign in</a> to be able to make an order\n</div>\n\n<div id=\"restaurant-name\">{{restaurantName}}</div>\n\n<div id=\"orderDetails\">\n  <div id=\"orderDetailsName\"><span class=\"bold-color\">New order</span></div>\n  <div id=\"orderDetailsHeader\">\n    <div>Name</div>\n    <div>Amount</div>\n    <div>Price</div>\n    <div>Cost</div>\n    <div>Actions</div>\n  </div>\n  <div id=\"orderDetailsSubgrid\" *ngFor=\"let d of newOrder.dishes\">\n    <div class=\"dish-name\">{{d.name}}</div>\n    <div>{{newOrder.amount[newOrder.dishes.indexOf(d)]}}</div>\n    <div>{{d.price}}</div>\n    <div>{{newOrder.amount[newOrder.dishes.indexOf(d)] * d.price | number}}</div>\n    <div>\n      <button class=\"increase-btn\" (click)=\"increaseAmount(newOrder.dishes.indexOf(d))\">+</button>\n      <button class=\"reduce-btn\" (click)=\"reduceAmount(newOrder.dishes.indexOf(d))\">-</button>\n      <button class=\"delete-btn\" (click)=\"deleteDish(newOrder.dishes.indexOf(d))\">X</button>\n    </div>\n  </div>\n  <div id=\"totalSubgrid\">\n    <div id=\"total\">Total sum</div>\n    <div>{{totalCost | number}}</div>\n    <div>\n      <button id=\"confirm-btn\" [disabled]=\"!newOrder.dishes.length || !logged\" (click)=\"placeOrder()\">Order now</button>\n    </div>\n  </div>\n</div>\n\n</body>\n"

/***/ }),

/***/ "./src/app/modules/orders/new-order/new-order.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/orders/new-order/new-order.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOrderComponent", function() { return NewOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Order */ "./src/app/models/Order.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/OrderStatus */ "./src/app/models/OrderStatus.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/order.service */ "./src/app/services/order.service.ts");






var NewOrderComponent = /** @class */ (function () {
    function NewOrderComponent(orderService, appComponent) {
        this.orderService = orderService;
        this.appComponent = appComponent;
        this.totalAmount = 0;
        this.totalCost = 0;
        this.newOrder = new _models_Order__WEBPACK_IMPORTED_MODULE_2__["Order"]();
        this.restaurantName = '';
    }
    NewOrderComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('_newOrder')) {
            this.restaurantName = sessionStorage.getItem('_restaurantName');
            this.totalAmount = +sessionStorage.getItem('_totalAmount');
            this.totalCost = +sessionStorage.getItem('_totalCost');
            this.newOrder = JSON.parse(sessionStorage.getItem('_newOrder'));
        }
        var userClass = localStorage.getItem('_userClass');
        if (userClass && userClass !== 'AdminInMemory') {
            this.logged = true;
        }
        else {
            this.logged = false;
        }
    };
    NewOrderComponent.prototype.increaseAmount = function (index) {
        this.totalAmount += 1;
        this.totalCost += this.newOrder.dishes[index].price;
        this.newOrder.amount[index] += 1;
        this.changeSessionStorage(this.newOrder, this.totalAmount, this.totalCost);
        this.changeBasket();
    };
    NewOrderComponent.prototype.reduceAmount = function (index) {
        if (this.newOrder.amount[index] === 1) {
            this.deleteDish(index);
        }
        else {
            this.totalAmount -= 1;
            this.totalCost -= this.newOrder.dishes[index].price;
            this.newOrder.amount[index] -= 1;
        }
        this.changeSessionStorage(this.newOrder, this.totalAmount, this.totalCost);
        this.changeBasket();
        if (this.totalAmount === 0) {
            this.clearSessionStorage();
            this.restaurantName = '';
        }
    };
    NewOrderComponent.prototype.deleteDish = function (index) {
        console.log(this.newOrder);
        this.totalCost -= this.newOrder.dishes[index].price * this.newOrder.amount[index];
        this.totalAmount -= this.newOrder.amount[index];
        this.newOrder.dishes.splice(index, 1);
        this.newOrder.amount.splice(index, 1);
        this.changeSessionStorage(this.newOrder, this.totalAmount, this.totalCost);
        this.changeBasket();
        if (this.totalAmount === 0) {
            this.clearSessionStorage();
            this.restaurantName = '';
        }
    };
    NewOrderComponent.prototype.placeOrder = function () {
        var _this = this;
        this.newOrder.date = new Date();
        this.newOrder.status = _models_OrderStatus__WEBPACK_IMPORTED_MODULE_4__["OrderStatus"].ORDERED;
        this.orderService.placeOrder(this.newOrder, localStorage.getItem('_userId'), sessionStorage.getItem('_restaurantId'))
            .subscribe(function (val) {
            console.log(val);
            _this.newOrder = new _models_Order__WEBPACK_IMPORTED_MODULE_2__["Order"]();
            _this.totalAmount = 0;
            _this.totalCost = 0;
            _this.appComponent.showModal(val.message);
            _this.clearSessionStorage();
            _this.restaurantName = '';
            _this.appComponent.changeAmount();
        }, function (error) {
            console.log(error);
            _this.appComponent.showModal(error);
        });
    };
    NewOrderComponent.prototype.changeSessionStorage = function (newOrder, totalAmount, totalCost) {
        sessionStorage.setItem('_totalAmount', totalAmount.toString());
        sessionStorage.setItem('_totalCost', totalCost.toString());
        sessionStorage.setItem('_newOrder', JSON.stringify(newOrder));
    };
    NewOrderComponent.prototype.clearSessionStorage = function () {
        sessionStorage.removeItem('_restaurantId');
        sessionStorage.removeItem('_restaurantName');
        sessionStorage.removeItem('_totalAmount');
        sessionStorage.removeItem('_totalCost');
        sessionStorage.removeItem('_newOrder');
    };
    NewOrderComponent.prototype.changeBasket = function () {
        this.appComponent.changeAmount();
    };
    NewOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-order',
            template: __webpack_require__(/*! ./new-order.component.html */ "./src/app/modules/orders/new-order/new-order.component.html"),
            styles: [__webpack_require__(/*! ./new-order.component.css */ "./src/app/modules/orders/new-order/new-order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]])
    ], NewOrderComponent);
    return NewOrderComponent;
}());



/***/ }),

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
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-order/new-order.component */ "./src/app/modules/orders/new-order/new-order.component.ts");





var routes = [
    {
        path: ':whose', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"], children: [
            { path: '', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"] },
        ]
    },
    { path: '', component: _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_4__["NewOrderComponent"] },
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
/* harmony import */ var _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-order/new-order.component */ "./src/app/modules/orders/new-order/new-order.component.ts");






var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_orders_orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"], _new_order_new_order_component__WEBPACK_IMPORTED_MODULE_5__["NewOrderComponent"]],
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

module.exports = "body{\r\n  min-height: 100vh;\r\n  background: beige;\r\n  padding-top: 1px;\r\n}\r\n\r\n.navbar {\r\n  z-index: 2;\r\n  position: fixed;\r\n  top: 74px;\r\n  width: 100%;\r\n}\r\n\r\n.main {\r\n  margin-top: 120px;\r\n}\r\n\r\n#shown {\r\n  top: 0;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  height: 45px;\r\n  background-color: white;\r\n  grid-gap: 1px;\r\n  border-bottom: #333 solid 6px;\r\n}\r\n\r\n#shown > div {\r\n  padding-left: 10px;\r\n  background: #aaaaaa;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n  word-break: break-word;\r\n}\r\n\r\n#show {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n#show > button {\r\n  border: none;\r\n  cursor: pointer;\r\n  height: 50px;\r\n  width: 500px;\r\n}\r\n\r\n#show > div {\r\n  height: 50px;\r\n  width: 200px;\r\n}\r\n\r\n#show > button:hover {\r\n  background-color: #3e8e41;\r\n}\r\n\r\n.drop-btn {\r\n  background: rosybrown;\r\n  border: none;\r\n  cursor: pointer;\r\n  height: 50px;\r\n  width: 200px;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n  background-color: #f1f1f1;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n  display: block;\r\n}\r\n\r\n.dropdown:hover .dropbtn {\r\n  background-color: #3e8e41;\r\n}\r\n\r\n.order {\r\n  display: grid;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  grid-gap: 1px;\r\n  width: 60%;\r\n  margin-left: 20%;\r\n  border: black solid 2px;\r\n  box-shadow: 9px 7px 10px 0 rgba(0,0,0,0.26);\r\n}\r\n\r\n.order-header {\r\n  display: grid;\r\n  grid-template-columns: 5fr 1fr 1fr 1fr;\r\n}\r\n\r\n.order-header > div {\r\n  padding: .5em;\r\n  background: silver;\r\n  word-break: break-all;\r\n  Grid-column-start: 1;\r\n  Grid-column-end: 2;\r\n}\r\n\r\n.order-header > .actions {\r\n  Grid-column-start: 2;\r\n  Grid-column-end: 5;\r\n  Grid-row-start: 1;\r\n  Grid-row-end: 5;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  background-color: silver;\r\n}\r\n\r\n.order-header > .actions > button {\r\n  height: 50px;\r\n  width: 100px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.order-header > .actions > button:hover {\r\n  background-color: #3e8e41;\r\n  cursor: pointer;\r\n}\r\n\r\n.header-names {\r\n  display: grid;\r\n  grid-gap: 1px;\r\n  grid-template-columns: 5fr 1fr 1fr 1fr;\r\n}\r\n\r\n.header-names > div {\r\n  padding: .5em;\r\n  background: rosybrown;\r\n  text-align: center;\r\n}\r\n\r\n.order-details {\r\n  display: grid;\r\n  grid-template-columns: 5fr 1fr 1fr 1fr;\r\n  grid-gap: 1px;\r\n}\r\n\r\n.order-details > div {\r\n  padding: .5em;\r\n  background: silver;\r\n  text-align: center;\r\n}\r\n\r\n.total {\r\n  Grid-column-start: 1;\r\n  Grid-column-end: 4;\r\n}\r\n\r\n.bold-shown{\r\n  font-weight: bold;\r\n  color: darkred;\r\n}\r\n\r\n.bold{\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vcmRlcnMvb3JkZXJzL29yZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxNQUFNO0VBQ04sYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JkZXJzL29yZGVycy9vcmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogYmVpZ2U7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgei1pbmRleDogMjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA3NHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbn1cclxuXHJcbiNzaG93biB7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZ3JpZC1nYXA6IDFweDtcclxuICBib3JkZXItYm90dG9tOiAjMzMzIHNvbGlkIDZweDtcclxufVxyXG5cclxuI3Nob3duID4gZGl2IHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2FhYWFhYTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbiNzaG93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbiNzaG93ID4gYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbiNzaG93ID4gZGl2IHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4jc2hvdyA+IGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxufVxyXG5cclxuLmRyb3AtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiByb3N5YnJvd247XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxufVxyXG5cclxuLm9yZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBncmlkLWdhcDogMXB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcclxuICBib3gtc2hhZG93OiA5cHggN3B4IDEwcHggMCByZ2JhKDAsMCwwLDAuMjYpO1xyXG59XHJcblxyXG4ub3JkZXItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmciAxZnIgMWZyO1xyXG59XHJcblxyXG4ub3JkZXItaGVhZGVyID4gZGl2IHtcclxuICBwYWRkaW5nOiAuNWVtO1xyXG4gIGJhY2tncm91bmQ6IHNpbHZlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgR3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgR3JpZC1jb2x1bW4tZW5kOiAyO1xyXG59XHJcblxyXG4ub3JkZXItaGVhZGVyID4gLmFjdGlvbnMge1xyXG4gIEdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gIEdyaWQtY29sdW1uLWVuZDogNTtcclxuICBHcmlkLXJvdy1zdGFydDogMTtcclxuICBHcmlkLXJvdy1lbmQ6IDU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XHJcbn1cclxuXHJcbi5vcmRlci1oZWFkZXIgPiAuYWN0aW9ucyA+IGJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ub3JkZXItaGVhZGVyID4gLmFjdGlvbnMgPiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLW5hbWVzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyIDFmciAxZnI7XHJcbn1cclxuXHJcbi5oZWFkZXItbmFtZXMgPiBkaXYge1xyXG4gIHBhZGRpbmc6IC41ZW07XHJcbiAgYmFja2dyb3VuZDogcm9zeWJyb3duO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm9yZGVyLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyIDFmciAxZnI7XHJcbiAgZ3JpZC1nYXA6IDFweDtcclxufVxyXG5cclxuLm9yZGVyLWRldGFpbHMgPiBkaXYge1xyXG4gIHBhZGRpbmc6IC41ZW07XHJcbiAgYmFja2dyb3VuZDogc2lsdmVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRvdGFsIHtcclxuICBHcmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBHcmlkLWNvbHVtbi1lbmQ6IDQ7XHJcbn1cclxuXHJcbi5ib2xkLXNob3due1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBkYXJrcmVkO1xyXG59XHJcblxyXG4uYm9sZHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/orders/orders/orders.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/orders/orders/orders.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n<!--<div *ngIf = \"myOrders\">-->\r\n\r\n<div class=\"navbar\">\r\n  <div id=\"shown\">\r\n    <div><span class=\"bold-shown\">{{whoseOrdersHeader}}</span></div>\r\n    <div><span class=\"bold-shown\">Restaurant:</span> {{restForShowName}}</div>\r\n    <div><span class=\"bold-shown\">Status of orders:</span> {{statusForShow}}</div>\r\n  </div>\r\n\r\n  <div id=\"show\">\r\n    <div class=\"dropdown\">\r\n      <button class=\"drop-btn\">Сhoose a restaurant</button>\r\n      <div class=\"dropdown-content\">\r\n        <a (click)=\"showAll()\">Show all orders</a>\r\n        <a *ngFor=\"let rest of restaurants\" (click)=\"showByRestaurant(rest.id)\">{{rest.name}}</a>\r\n      </div>\r\n    </div>\r\n    <button (click)=\"showByRestaurant(restForShowId)\">All</button>\r\n    <button (click)=\"showOrdered()\">Ordered</button>\r\n    <button (click)=\"showCanceledByClient()\">Canceled by client</button>\r\n    <button (click)=\"showCanceledByRest()\">Canceled by restaurant</button>\r\n    <button (click)=\"showConfirmed()\">Confirmed by restaurant</button>\r\n    <button (click)=\"showPaid()\">Paid</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"main\">\r\n  <div class=\"order\" *ngFor=\"let ord of ordersForShow\">\r\n    <div class=\"order-header\">\r\n      <div><span class=\"bold\">Restaurant:</span>  {{ord.restaurant.name}}</div>\r\n      <div><span class=\"bold\">Date:</span>  {{ord.date | date: 'dd LLL yyyy, HH:mm'}}</div>\r\n      <div><span class=\"bold\">User:</span> {{ord.username}}</div>\r\n      <div><span class=\"bold\">Status:</span> {{ord.status}}</div>\r\n      <div class=\"actions\">\r\n        <button [disabled]=\"!showCancelOrd[ordersForShow.indexOf(ord)]\" (click)=\"cancelOrder(ord)\">Cancel</button>\r\n        <button *ngIf=\"whoseOrders == 'clients'\" [disabled]=\"!showConfirmOrd[ordersForShow.indexOf(ord)]\"\r\n                (click)=\"confirmOrder(ord)\">Confirm\r\n        </button>\r\n        <button *ngIf=\"whoseOrders == 'clients'\" [disabled]=\"!showPaidOrd[ordersForShow.indexOf(ord)]\"\r\n                (click)=\"paidOrder(ord)\">Paid\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-names\">\r\n      <div>Name of dish</div>\r\n      <div>Amount</div>\r\n      <div>Price</div>\r\n      <div>Cost</div>\r\n    </div>\r\n    <div class=\"order-details\" *ngFor=\"let dish of ord.dishes\">\r\n      <div>{{dish.name}}</div>\r\n      <div>{{ord.amount[ord.dishes.indexOf(dish)]}}</div>\r\n      <div>{{dish.price}}</div>\r\n      <div>{{ord.amount[ord.dishes.indexOf(dish)] * dish.price | number}}</div>\r\n    </div>\r\n    <div class=\"order-details\">\r\n      <div class=\"total\"><span class=\"bold\">Total sum</span></div>\r\n      <div><span class=\"bold\">{{totalCost[myOrders.indexOf(ord)] | number}}</span></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--</div>-->\r\n</body>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/OrderStatus */ "./src/app/models/OrderStatus.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/order.service */ "./src/app/services/order.service.ts");






var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(orderService, activatedRoute, appComponent) {
        this.orderService = orderService;
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
                this.orderService.getMyOrders(localStorage.getItem('_userId'))
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
                this.orderService.getOrdersByOwnerId(localStorage.getItem('_userId'))
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
            ord.status = _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].CANCELED_BY_CLIENT;
        }
        else {
            ord.status = _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].CANCELED_BY_RESTAURANT;
        }
        this.orderService.changeOrderStatus(ord)
            .subscribe(function (value) {
            _this.appComponent.showModal(value.message);
            _this.loadData();
        }, function (error) {
            _this.appComponent.showModal(error);
        });
    };
    OrdersComponent.prototype.confirmOrder = function (ord) {
        var _this = this;
        ord.status = _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].CONFIRMED_BY_RESTAURANT;
        this.orderService.changeOrderStatus(ord)
            .subscribe(function (value) {
            _this.appComponent.showModal(value.message);
            _this.loadData();
        }, function (error) {
            _this.appComponent.showModal(error);
        });
    };
    OrdersComponent.prototype.paidOrder = function (ord) {
        var _this = this;
        ord.status = _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].PAID;
        this.orderService.changeOrderStatus(ord)
            .subscribe(function (value) {
            _this.appComponent.showModal(value.message);
            _this.loadData();
        }, function (error) {
            _this.appComponent.showModal(error);
        });
    };
    OrdersComponent.prototype.showAll = function () {
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
                (ord.status === _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].ORDERED)) {
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
                (ord.status === _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].CANCELED_BY_CLIENT)) {
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
                (ord.status === _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].CANCELED_BY_RESTAURANT)) {
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
                (ord.status === _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].CONFIRMED_BY_RESTAURANT)) {
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
                (ord.status === _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].PAID)) {
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
                case _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].ORDERED: {
                    this.showCancelOrd.push(true);
                    this.showConfirmOrd.push(true);
                    this.showPaidOrd.push(true);
                    break;
                }
                case _models_OrderStatus__WEBPACK_IMPORTED_MODULE_3__["OrderStatus"].CONFIRMED_BY_RESTAURANT: {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");




var OrderService = /** @class */ (function () {
    function OrderService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
        this.url = this.dataService.url;
    }
    OrderService.prototype.placeOrder = function (order, userId, restaurantId) {
        return this.http.post(this.url + '/order/place/' + userId + '/' + restaurantId, order, { headers: this.dataService.getAuthHeader() });
    };
    OrderService.prototype.getMyOrders = function (userId) {
        return this.http.get(this.url + '/orders/get/my/' + userId, { headers: this.dataService.getAuthHeader() });
    };
    OrderService.prototype.getOrdersByOwnerId = function (id) {
        return this.http.get(this.url + '/orders/get/clients/' + id, { headers: this.dataService.getAuthHeader() });
    };
    OrderService.prototype.changeOrderStatus = function (order) {
        return this.http.post(this.url + '/order/change-status', order, { headers: this.dataService.getAuthHeader() });
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], OrderService);
    return OrderService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-orders-orders-module.js.map