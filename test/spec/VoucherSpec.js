describe("Voucher", function(){
  var vouchers;

  beforeEach(function(){
    shoppingCart = jasmine.createSpyObj('shoppingCart',['addItem', 'removeItem', 'basketTotal','removeVoucher','footwearCounter']);
    voucher = new Voucher(shoppingCart);
  });

  describe("15 pounds off", function(){
    it("removes five pounds from the basket total if the total is more than 15", function(){
      shoppingCart.basketTotal.and.callFake(function() { return 16;});
      voucher.Fifteen();
      expect(shoppingCart.removeVoucher).toHaveBeenCalledWith(5);
    });
    it("gives an error message saying that the user cannot apply the voucher", function(){
      shoppingCart.basketTotal.and.callFake(function() { return 13;});
      expect(voucher.Fifteen()).toEqual("need more than \u00A315 to redeem")
    });
  });

  describe("50 pounds off", function(){
    it("removes 15 pounds on orders over 50 pounds", function(){
      shoppingCart.basketTotal.and.callFake(function() { return 51;});
      voucher.Fifty();
      expect(shoppingCart.removeVoucher).toHaveBeenCalledWith(10);
    });
    it("gives an error message saying that the user cannot apply the voucher", function(){
      shoppingCart.basketTotal.and.callFake(function() { return 49;});
      expect(voucher.Fifty()).toEqual("need more than \u00A350 to redeem");
    });
  });

  describe("75 pounds off", function(){
    it("removes 15 pounds on an order over 75 pounds with shoes", function(){
      shoppingCart.basketTotal.and.callFake(function() { return 76;});
      shoppingCart.footwearCounter.and.callFake(function() { return 1;});
      voucher.SeventyFive();
      expect(shoppingCart.removeVoucher).toHaveBeenCalledWith(15);
    });
    it("gives an error message if over 75 pounds but no shoes", function(){
      shoppingCart.basketTotal.and.callFake(function() { return 76;});
      shoppingCart.footwearCounter.and.callFake(function() { return 1;});
      expect(voucher.SeventyFive()).toEqual("need more than \u00A3575 and a pair of shoes to redeem");
    });
    it("gives an error message if under 75 pounds but with shoes", function(){
      shoppingCart.basketTotal.and.callFake(function() { return 73;});
      shoppingCart.footwearCounter.and.callFake(function() { return 2;});
      expect(voucher.SeventyFive()).toEqual("need more than \u00A3575 and a pair of shoes to redeem");
    });
  });
});
