"use strict";

var ShoppingCart = function () {
  this.basket = [];
  this.FOOTWEAR =  "Footwear";
};

ShoppingCart.prototype.addItem = function (item) {
  this.basket.push(item);
};

ShoppingCart.prototype.removeItem = function (item) {
  var index = this.basket.indexOf(item);
  this.basket.splice(index,1);
};

ShoppingCart.prototype.basketTotal = function (){
  var total = this.basket.map(function(number){return number.price})
    .reduce(function(a,b){return a+b});
      return total;
};

ShoppingCart.prototype.basketViewer = function () {
  return this.basket;
};

ShoppingCart.prototype.removeVoucher = function (value){
  return this.basketTotal() - value;
};

ShoppingCart.prototype.footwearCounter = function () {
  var shoeTotal = 0;
  for (var item in this.basket){
    if(this.basket[item].category.includes("Footwear")){
      shoeTotal++;
    }
  }
 return shoeTotal;
};
