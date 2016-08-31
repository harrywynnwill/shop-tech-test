"use strict";

var ShoppingCart = function(voucher) {
	this.voucher = voucher;
	this.basket = [];
	this._FOOTWEAR = "Footwear";
};

ShoppingCart.prototype.addItem = function(item) {
	this.basket.push(item);
};

ShoppingCart.prototype.removeItem = function(item) {
	var index = this.basket.indexOf(item);
	this.basket.splice(index, 1);
};

ShoppingCart.prototype.basketTotal = function() {
	var total = this.basket.map(function(number) {
			return number.price
		})
		.reduce(function(a, b) {
			return a + b
		});
	return total;
};

ShoppingCart.prototype.voucherChoice = function(voucher) {
	var basketTotal = this.basketTotal();
	switch (voucher) {
		case 5:
			return this.voucher.five(basketTotal);
			break;
		case 10:
			return this.voucher.ten(basketTotal);
			break;
		case 15:
			return this.voucher.fifteen(basketTotal, this._footwearCounter());
			break;
	}
};

ShoppingCart.prototype.basketViewer = function() {
	return this.basket;
};

ShoppingCart.prototype._footwearCounter = function() {
	var shoeTotal = 0;
	for (var item in this.basket) {
		if (this.basket[item].category.includes(this._FOOTWEAR)) {
			shoeTotal++;
		}
	}
	return shoeTotal;
};
