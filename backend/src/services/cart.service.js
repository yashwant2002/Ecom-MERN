import { Cart } from "../models/cart.model.js";
import { CartItem } from "../models/cartItem.model.js";

async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createCart = await cart.save();

    return createCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserCart(userId) {
  try {
    let cart = await Cart.findOne({ user: userId });

    let cartItems = await CartItem.find({ cart: cart._id }.populate("product"));

    cart.cartItems = cartItems;

    let totalPrice = 0;
    let totalDiscountPrice = 0;
    let totalItem = 0;

    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountPrice += cartItem.discountPrice;
      totalItem += cartItem.quantity;
    }

    cart.totalPrice = totalPrice;
    cart.totalDiscountPrice = totalPrice - totalDiscountPrice;
    cart.totalItem = totalItem;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function addCartItem(userId, req) {
  try {
    const cart = await Cart.findOne({ user: userId });
    const product = await Product.findById(req.productId);

    const IsPresent = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      userId,
    });
    if (!IsPresent) {
      const cartItem = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.price,
        size: req.size,
        discountPrice: product.discountPrice,
      });

      const createCartItem = await cartItem.save();
      cart.cartItem.push(createCartItem);
      await cart.save();

      return "Item added to Cart";
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
export { createCart, addCartItem, findUserCart };
