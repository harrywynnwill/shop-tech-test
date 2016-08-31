describe("Item", function() {

	beforeEach(function() {
		item = new Item("Suede Shoes, Blue", "Women\'s Footwear", 270, 10);
	})

	it("creates items", function() {
		expect(item).toEqual(jasmine.objectContaining({
			productName: "Suede Shoes, Blue",
			category: "Women\'s Footwear",
			price: 270,
			quantityInStock: 10
		}));
	});

	describe("remove from stock", function() {
		it("removes one from the items stock", function() {
			item.removeStock();
			expect(item.quantityInStock).toEqual(9);
			expect(item.quantityInStock).not.toEqual(10);
		});
	});

	describe("check if in stock", function() {
		it("returns false when item is not in stock", function() {
			for (stock = 0; stock < 10; stock++) {
				item.removeStock();
			}
			expect(item.inStock()).toBe(false);
		});
		it("returns true if the item is in stock", function() {
			expect(item.inStock()).toBe(true);
		});
	});
	describe("get produtct name", function() {
		it("returns the name of the product from the item", function() {
			expect(item.getProductName()).toEqual("Suede Shoes, Blue")
		});
	});
});
