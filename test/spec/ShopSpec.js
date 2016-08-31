describe("Shop", function() {


	beforeEach(function() {
		blueSuedeShoes = jasmine.createSpyObj('blueSuedeShoes', ['inStock', 'removeStock', 'getProductName']);
		shoppingCart = jasmine.createSpyObj('shoppingCart', ['addItem', 'removeItem', 'total', 'basketTotal',
			'basketViewer', 'voucherChoice'
		]);
		shop = new Shop(shoppingCart);
	});

	describe("adding productd to the shop", function() {
		it("adds products to the shop for consumers to buy", function() {
			shop.addProduct(blueSuedeShoes);
			expect(shop.products).toEqual([blueSuedeShoes]);
		});
	});
	describe("adding items from the shop to the cart", function() {
		it("adds items from the shop to the cart", function() {
			blueSuedeShoes.inStock.and.callFake(function() {
				return true;
			});
			shop.addToCart(blueSuedeShoes);
			expect(blueSuedeShoes.removeStock).toHaveBeenCalled();
			expect(shoppingCart.addItem).toHaveBeenCalledWith(blueSuedeShoes);

		});
		it("returns an error when the item is not in stock", function() {
			blueSuedeShoes.getProductName.and.callFake(function() {
				return "Blue Suede Shoes";
			});
			blueSuedeShoes.inStock.and.callFake(function() {
				return false;
			});
			expect(shop.addToCart(blueSuedeShoes)).toEqual("Blue Suede Shoes out of stock!");
		});

	});
	describe("removing items from the shop to the cart", function() {
		it("removes items from the cart", function() {
			shop.removeFromCart(blueSuedeShoes);
			expect(shoppingCart.removeItem).toHaveBeenCalledWith(blueSuedeShoes);
		});
	});

	describe("the total of the basket", function() {
		it("shows the user the baskets total", function() {
			shop.totalCart();
			expect(shoppingCart.basketTotal).toHaveBeenCalled();
		});
	});

	describe("view the basket", function() {
		it("shows the user the contents of the basket", function() {
			shop.viewBasket();
			expect(shoppingCart.basketViewer).toHaveBeenCalled();
		});
	});

	describe("the total of the basket with vouchers", function() {
		it("shows the user the baskets total when vouchers are applied", function() {
			shop.totalCartVoucher(1);
			expect(shoppingCart.voucherChoice).toHaveBeenCalledWith(1);
		});
	});
});
