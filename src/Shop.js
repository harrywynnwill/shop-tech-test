"use strict";

var Shop = function(shoppingCart) {
	this.shoppingCart = shoppingCart
	this.products = [];
	this.ERROR = " out of stock!"
};

Shop.prototype.addProduct = function(item) {
	this.products.push(item);
};

Shop.prototype.addToCart = function(item) {
	if (item.inStock()) {
		item.removeStock();
		this.shoppingCart.addItem(item);
	}
	return item.getProductName() + this.ERROR;
};

Shop.prototype.removeFromCart = function(item) {
	this.shoppingCart.removeItem(item);
};

Shop.prototype.totalCartVoucher = function(voucher) {
	return this.shoppingCart.voucherChoice(voucher);
};

Shop.prototype.viewBasket = function() {
	return this.shoppingCart.basketViewer();
};

Shop.prototype.totalCart = function() {
	return this.shoppingCart.basketTotal();
};
