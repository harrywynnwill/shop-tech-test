#Clothing Website

##Tech test

You’ve been asked to develop a responsive website for a clothing retailer.


The page that you develop should display all of the available products, as well as a shopping cart to which they can be added.


1. As a User I can add a product to my shopping cart.
2. As a User I can remove a product from my shopping cart.
3. As a User I can view the total price for the products in my shopping cart.
4. As a User I can apply a voucher to my shopping cart.
5. As a User I can view the total price for the products in my shopping cart with discounts applied.
6. As a User I am alerted when I apply an invalid voucher to my shopping.
7. As a User I am unable to Out of Stock products to the shopping cart.


##Install and run tests

```
git clone https://github.com/harrywynnwill/shop-tech-test
cd shop-tech-test
open test/index.html
```

##Design reasoning

I wrote the tech test in vanilla Javascript with the view to making the website responsive with JQuery or a JS framework like Angular or React.

I took on the task of attempting the logic behind all of the user stories.
If you look in `test/spec/features` each user story is a feature test.

I built it using TDD, the feature and unit tests are tested using Jasmine.

the tests can be found in the `/test/spec` directory.

##Classes

I chose 4 classes for the test:

+  Item - is to create objects for the shop and hold methods for stock control.
+  Voucher - is the class for handling the discounts and is injected to the shopping cart.
  I abstracted voucher from shopping cart, with the view of different marketing campaigns.

+  ShoppingCart  - is the class with the main logic for the program and is injected to the shop

  I was unsure on using the switch statement but I thought it was cleaner having a method with 1 parameter, than a method for each voucher in the interface although this could be refactored when the front-end was added

+  Shop - is the main interface and would be the front-end for the customers.

These are all found in `/src`
