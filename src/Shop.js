"use strict";

var Shop = function (shoppingCart, voucher){
  this.shoppingCart = shoppingCart;
  this.voucher = voucher;
  this.products = [];
  this.ERROR = " out of stock!"
};

Shop.prototype.addProduct = function (item) {
  this.products.push(item);
};

Shop.prototype.addToCart = function (item) {
  if (item.inStock()){
    item.removeStock();
    this.shoppingCart.addItem(item);
  }
  return item.getProductName() + this.ERROR;
};

Shop.prototype.removeFromCart = function (item) {
  this.shoppingCart.removeItem(item);
};

Shop.prototype.applyFiveVoucher = function (){
  if(this.voucher.overFifteen(this.totalCart)){
    this.shoppingCart.removeFivePounds();
  }
};

Shop.prototype.viewBasket = function(){
  return this.shoppingCart.basketViewer();
};

Shop.prototype.totalCart = function () {
  return this.shoppingCart.basketTotal();
};
