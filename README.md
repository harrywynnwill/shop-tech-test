#Clothing Website

##Tech test

You’ve been asked to develop a responsive website for a clothing retailer.


The page that you develop should display all of the available products, as well as a shopping cart to which they can be added.


+ As a User I can add a product to my shopping cart.
+ As a User I can remove a product from my shopping cart.
+ As a User I can view the total price for the products in my shopping cart.
+ As a User I can apply a voucher to my shopping cart.
+ As a User I can view the total price for the products in my shopping cart with discounts applied.
+ As a User I am alerted when I apply an invalid voucher to my shopping.
+ As a User I am unable to Out of Stock products to the shopping cart.


##Install and run tests

```
git clone https://github.com/harrywynnwill/shop-tech-test
open test/index.html

```

##Design reasoning

I wrote the tech test in vanilla Javascript with the view to making the website responsive with JQuery or JS framework like Angular or React.

I took on the challenge of attempting the logic behind all the users stories over producing a front-end

I build it using TDD and all the public methods are tested using Jasmine.

##Classes

I chose 4 Classes

  Item - is to create object products for the shop - and to hold methods for the controlling the stock control.
  voucher - is the class for handling the vouchers and is injected to the shopping cart.
  shopping cart  - handles all basket/cart for the shop and is injected to the shop
  Shop - is the main interface and would be the front-end for the customers.
