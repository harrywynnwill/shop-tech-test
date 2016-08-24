describe("ShoppingCart", function(){
  var shoppingCart;

  beforeEach(function(){
    shoppingCart = new ShoppingCart();

    blueSuedeShoes = jasmine.objectContaining({ productName: "Suede Shoes, Blue", category: "Women\’s Footwear", price: 270 , quantity: 10});
    birdPrintDress = jasmine.objectContaining({ productName: "Bird Print Dress, Black", category: "Women\’s Formalwear", price: 270 , quantity: 10});
    goldButtonCardigan = jasmine.objectContaining({ productName: "Gold Button Cardigan, Black", category: "Women’s Casualwear", price: 167 , quantity: 6});
    flipFlopRed = jasmine.objectContaining({ productName: "Flip Flops, Red", category: "Men\'s Footwear", price: 19 , quantity: 6});
    cottonShortsRed= jasmine.objectContaining({ productName: "Cotton Shorts, Medium Red", category: "Women\’s Casualwear", price: 30 , quantity: 5});
  });

  describe("by default", function(){
    it("is empty", function(){
      expect(shoppingCart.basket).toEqual([]);
    });
  });
  describe("adding to the basket", function(){
    it("products can be added to the basket", function(){
      shoppingCart.addItem(blueSuedeShoes);
      expect(shoppingCart.basket).toEqual([blueSuedeShoes]);
    });
  });
  describe("removing from the basket", function(){
    it("products can be removed from the basket", function(){
      shoppingCart.addItem(blueSuedeShoes);
      shoppingCart.addItem(flipFlopRed);
      shoppingCart.removeItem(blueSuedeShoes);
      expect(shoppingCart.basket).toEqual([flipFlopRed]);
    });
  });
  describe("getting the basket total", function(){
    it("gives the total of the basket with one item", function(){
      shoppingCart.addItem(flipFlopRed.sample);
      expect(shoppingCart.basketTotal()).toEqual(19);
    });

    it("gives the total of the basket with many items", function(){
      shoppingCart.addItem(flipFlopRed.sample);
      shoppingCart.addItem(flipFlopRed.sample);
      shoppingCart.addItem(flipFlopRed.sample);
      expect(shoppingCart.basketTotal()).toEqual(57);
    });
  });

  describe("footwear counter", function(){
    it("counts the number of footwear items and not other items in the basket", function(){
      shoppingCart.addItem(flipFlopRed.sample);
      shoppingCart.addItem(flipFlopRed.sample);
      shoppingCart.addItem(birdPrintDress.sample);
      expect(shoppingCart.footwearCounter()).toEqual(2);
    });
    it("counts both men and womens footwear items in the basket", function(){
      shoppingCart.addItem(flipFlopRed.sample);
      shoppingCart.addItem(flipFlopRed.sample);
      shoppingCart.addItem(blueSuedeShoes.sample);
      expect(shoppingCart.footwearCounter()).toEqual(3);
    });
  });
});