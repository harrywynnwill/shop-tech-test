describe("ShoppingCart", function() {
	var shoppingCart;
	var voucher;

	beforeEach(function() {
		voucher = jasmine.createSpyObj('voucher', ['five', 'ten', 'fifteen']);
		shoppingCart = new ShoppingCart(voucher);

		blueSuedeShoes = jasmine.objectContaining({
			productName: "Suede Shoes, Blue",
			category: "Women\’s Footwear",
			price: 270,
			quantity: 10
		});
		birdPrintDress = jasmine.objectContaining({
			productName: "Bird Print Dress, Black",
			category: "Women\’s Formalwear",
			price: 270,
			quantity: 10
		});
		goldButtonCardigan = jasmine.objectContaining({
			productName: "Gold Button Cardigan, Black",
			category: "Women’s Casualwear",
			price: 167,
			quantity: 6
		});
		flipFlopRed = jasmine.objectContaining({
			productName: "Flip Flops, Red",
			category: "Men\'s Footwear",
			price: 19,
			quantity: 6
		});
		cottonShortsRed = jasmine.objectContaining({
			productName: "Cotton Shorts, Medium Red",
			category: "Women\’s Casualwear",
			price: 30,
			quantity: 5
		});
	});

	describe("by default", function() {
		it("is empty", function() {
			expect(shoppingCart.basketViewer()).toEqual([]);
		});
	});
	describe("adding to the basket", function() {
		it("products can be added to the basket", function() {
			shoppingCart.addItem(blueSuedeShoes);
			expect(shoppingCart.basket).toEqual([blueSuedeShoes]);
		});
	});
	describe("removing from the basket", function() {
		it("products can be removed from the basket", function() {
			shoppingCart.addItem(blueSuedeShoes);
			shoppingCart.addItem(flipFlopRed);
			shoppingCart.removeItem(blueSuedeShoes);
			expect(shoppingCart.basket).toEqual([flipFlopRed]);
		});
	});
	describe("getting the basket total", function() {
		it("gives the total of the basket with one item", function() {
			shoppingCart.addItem(flipFlopRed.sample);
			expect(shoppingCart.basketTotal()).toEqual(19);
		});

		it("gives the total of the basket with many items", function() {
			shoppingCart.addItem(flipFlopRed.sample);
			shoppingCart.addItem(flipFlopRed.sample);
			shoppingCart.addItem(flipFlopRed.sample);
			expect(shoppingCart.basketTotal()).toEqual(57);
		});
	});

	describe("footwear counter", function() {
		it("counts the number of footwear items and not other items in the basket", function() {
			shoppingCart.addItem(flipFlopRed.sample);
			shoppingCart.addItem(flipFlopRed.sample);
			shoppingCart.addItem(birdPrintDress.sample);
			expect(shoppingCart._footwearCounter()).toEqual(2);
		});
		it("counts both men and womens footwear items in the basket", function() {
			shoppingCart.addItem(flipFlopRed.sample);
			shoppingCart.addItem(flipFlopRed.sample);
			shoppingCart.addItem(blueSuedeShoes.sample);
			expect(shoppingCart._footwearCounter()).toEqual(3);
		});
	});
	describe("voucher choice", function() {
		it("gives the customer a discounted total if they apply \u00A35 discount", function() {
			shoppingCart.addItem(flipFlopRed.sample);
			shoppingCart.addItem(flipFlopRed.sample);
			shoppingCart.voucherChoice(5);
			expect(voucher.five).toHaveBeenCalledWith(38);
		});
		it("gives the customer a discounted total if they apply \u00A310 discount", function() {
			shoppingCart.addItem(goldButtonCardigan.sample);
			shoppingCart.voucherChoice(10);
			expect(voucher.ten).toHaveBeenCalledWith(167);
		});
		it("gives the customer a discounted total if they apply \u00A315 discount", function() {
			shoppingCart.addItem(birdPrintDress.sample);
			shoppingCart.voucherChoice(15);
			expect(voucher.fifteen).toHaveBeenCalledWith(270, 0);
		});
	});
});
