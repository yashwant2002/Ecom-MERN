import { Cart } from "../models/cart.model.js";
import { CartItem } from "../models/cartItem.model.js";
import { Product } from "../models/product.model.js";

// Create Cart for a User
async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createdCart = await cart.save();
    console.log("New cart created:", createdCart);
    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Find User's Cart and Calculate Total Prices
async function findUserCart(userId) {
  try {
    let cart = await Cart.findOne({ user: userId }).populate({
      path: "cartItems",
      populate: {
        path: "product",
        model: "Product",
      },
    });

    if (!cart) {
      // If cart doesn't exist, create a new one
      console.log("Cart not found, creating a new cart for user:", userId);
      cart = await createCart(userId);
    }

    let totalPrice = 0;
    let totalDiscountPrice = 0;
    let totalItem = 0;

    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price * cartItem.quantity;
      totalDiscountPrice += cartItem.discountPrice * cartItem.quantity;
      totalItem += cartItem.quantity;
    }

    cart.totalPrice = totalPrice;
    cart.totalDiscountPrice = totalPrice - totalDiscountPrice;
    cart.totalItem = totalItem;

    await cart.save();
    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Add Item to User's Cart
async function addCartItem(userId, req) {
  try {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      console.log("Cart not found for user:", userId);
      cart = await createCart(userId);
    }

    const product = await Product.findById(req.productId);
    if (!product) {
      throw new Error("Product not found");
    }

    console.log("Product found:", product);

    // Check if the item is already in the cart
    const isPresent = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
    });

    if (!isPresent) {
      const cartItem = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: req.quantity || 1,
        userId,
        price: product.price,
        size: req.size,
        discountPrice: product.discountedPrice || product.price,
      });

      const createdCartItem = await cartItem.save();

      // Add the new cart item to the cart
      cart.cartItems.push(createdCartItem);
      await cart.save();

      console.log("Item added to the cart:", createdCartItem);
      return cart; // Return the updated cart object
    } else {
      console.log("Item already in the cart");
      return cart; // Return the cart object if item is already in the cart
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export { createCart, addCartItem, findUserCart };
