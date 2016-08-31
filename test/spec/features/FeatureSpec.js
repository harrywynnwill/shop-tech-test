describe("Feature Test", function() {
	var almondToeShoes, suedeShoes, leatherDriver, flipFlopsRed, flipFlopBlue, goldCardigan, cottonShorts;
	var shortSleeveGrey, shortSleeveGreen, sharkSkinWaist, blazer, birdPrintDress, dressPink;

	var shop;
	var shoppingCart;
	var voucher;

	beforeEach(function() {
		almondToeShoes = new Item("Almond Toe Court Shoes, Patent Black", "Women\’s Footwear", 99, 5);
		suedeShoes = new Item("Suede Shoes, Blue", "Women\’s Footwear", 42, 4);
		leatherDriver = new Item("Leather Driver Saddle Loafers, Tan", "Men\’s Footwear", 34, 12);
		flipFlopsRed = new Item("Flip Flops, Red", "Men\’s Footwear", 19, 6);
		flipFlopsBlue = new Item("Flip Flops, Blue", "Men\’s Footwear", 19, 0);
		goldCardigan = new Item("Gold Button Cardigan, Black", "Women\’s Casualwear", 167, 6);
		cottonShorts = new Item("Cotton Shorts, Medium Red", "Women\’s Casualwear", 30, 5);
		shortSleeveGrey = new Item("Fine Stripe Short Sleeve Shirt, Grey", "Men\’s Casualwear", 49.99, 9);
		shortSleeveGreen = new Item("Fine Stripe Short Sleeve Shirt, Grey", "Men\’s Casualwear", 39.99, 3);
		sharkSkinWaist = new Item("Sharkskin Waistcoat, Charcoal", "Men\’s Formalwear", 75, 2);
		blazer = new Item("Lightweight Patch Pocket Blazer, Deer", "Men\’s Formalwear", 175.50, 1);
		birdPrintDress = new Item("Bird Print Dress, Black", "Women\’s Formalwear", 270, 10);
		dressPink = new Item("Mid Twist Cut-Out Dress, Pink", "Women\’s Formalwear", 540, 5);

		voucher = new Voucher();
		shoppingCart = new ShoppingCart(voucher);
		shop = new Shop(shoppingCart);

		shop.addProduct(almondToeShoes);
		shop.addProduct(suedeShoes);
		shop.addProduct(leatherDriver);
		shop.addProduct(flipFlopsRed);
		shop.addProduct(goldCardigan);
		shop.addProduct(cottonShorts);
		shop.addProduct(shortSleeveGrey);
		shop.addProduct(shortSleeveGreen);
		shop.addProduct(sharkSkinWaist);
		shop.addProduct(blazer);
		shop.addProduct(birdPrintDress);
		shop.addProduct(dressPink);
	});
	it("1. As a User I can add a product to my shopping cart", function() {
		shop.addToCart(almondToeShoes);
		expect(shop.viewBasket()).toContain(almondToeShoes);
	});

	it("2. As a User I can remove a product from my shopping cart.", function() {
		shop.addToCart(almondToeShoes);
		shop.addToCart(sharkSkinWaist);
		shop.removeFromCart(almondToeShoes);
		expect(shop.viewBasket()).not.toContain(almondToeShoes);
		expect(shop.viewBasket()).toContain(sharkSkinWaist);
	});

	it("3. As a User I can view the total price for the products in my shopping cart.", function() {
		shop.addToCart(shortSleeveGrey);
		shop.addToCart(shortSleeveGreen);
		expect(shop.totalCart()).toEqual(89.98);
	});

	it("4. As a User I can apply a voucher to my shopping cart.", function() {
		shop.addToCart(shortSleeveGrey);
		shop.addToCart(shortSleeveGreen);
		expect(shop.totalCartVoucher(5)).toEqual(84.98);
	});

	it("5. As a User I can view the total price for the products\
     in my shopping cart with discounts applied.", function() {
		shop.addToCart(shortSleeveGrey);
		shop.addToCart(shortSleeveGreen);
		expect(shop.totalCartVoucher(10)).toEqual(79.98);
	});

	it("6. As a User I am alerted when I apply an invalid voucher to my shopping cart.", function() {
		shop.addToCart(flipFlopsRed);
		expect(shop.totalCartVoucher(15)).toEqual("need more than \u00A375 and a pair of shoes to redeem");
	});

	it("7. As a User I am unable to Out of Stock products to the shopping cart.", function() {
		expect(shop.addToCart(flipFlopsBlue)).toEqual("Flip Flops, Blue out of stock!");
	});
});
