"use strict";

var Voucher = function (shoppingCart){
  this.ONE = 1;
  this.FIVE = 5;
  this.TEN = 10;
  this.FIFTEEN = 15;
  this.FIFTY = 50;
  this.SEVENTYFIVE = 75;
  this.FIFTEEN_ERROR = "need more than \u00A315 to redeem";
  this.FIFTY_ERROR = "need more than \u00A350 to redeem";
  this.SEVENTYFIVE_ERROR = "need more than \u00A3575 and a pair of shoes to redeem";
  this.shoppingCart = shoppingCart;
};

Voucher.prototype.Fifteen = function () {
  return this.isOverFifteen() ? this.shoppingCart.removeVoucher(this.FIVE) : this.FIFTEEN_ERROR
};
Voucher.prototype.Fifty = function () {
  return this.isOverFifty() ? this.shoppingCart.removeVoucher(this.TEN) : this.FIFTY_ERROR
};
Voucher.prototype.SeventyFive = function () {
  if(this.isOverFifty() && this.shoppingCart.footwearCounter() >= this.ONE){
    this.shoppingCart.removeVoucher(this.FIFTEEN)
  }
  return this.SEVENTYFIVE_ERROR;
};

Voucher.prototype.isOverFifteen = function (){
  return this.shoppingCart.basketTotal() > this.FIFTEEN;
};
Voucher.prototype.isOverFifty = function () {
  return this.shoppingCart.basketTotal() > this.FIFTY;
};
Voucher.prototype.isOverSeventyFive = function (){
  return this.shoppingCart.basketTotal() > this.SEVENTYFIVE;
};
