describe("Voucher", function() {

	beforeEach(function() {
		voucher = new Voucher();
	});

	describe("removes \u00A35 on orders", function() {
		it("removes \u00A35 from the basket total if the total is more than \u00A315", function() {
			expect(voucher.five(16)).toEqual(11);
		});
	});

	describe("removes \u00A310 on order over \u00A350", function() {
		it("removes \u00A310 pounds from the basket on orders over \u00A350", function() {
			expect(voucher.ten(51)).toEqual(41);
		});
		it("gives an error message saying that the user cannot apply the voucher", function() {
			expect(voucher.ten(49)).toEqual("need more than \u00A350 to redeem");
		});
	});

	describe("removes \u00A315 on orders over \u00A375", function() {
		it("removes 15 pounds on an order over 75 pounds with shoes", function() {
			expect(voucher.fifteen(76, 1)).toEqual(61);
		});
		it("gives an error message if over \u00A375 but no shoes", function() {
			expect(voucher.fifteen(76, 0)).toEqual("need more than \u00A375 and a pair of shoes to redeem");
		});
		it("gives an error message if \u00A375 pounds but with shoes", function() {
			expect(voucher.fifteen(74, 1)).toEqual("need more than \u00A375 and a pair of shoes to redeem");

		});
	});
});
