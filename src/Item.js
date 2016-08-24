var Item = function (productName, category, price, quantityInStock){
  this.productName = productName;
  this.category = category;
  this.price = price;
  this.quantityInStock = quantityInStock;
};

Item.prototype.removeStock = function(){
  this.quantityInStock -= 1;
};

Item.prototype.inStock = function () {
  return this.quantityInStock > 0;
};

Item.prototype.getProductName = function (){
  return this.productName;
}
