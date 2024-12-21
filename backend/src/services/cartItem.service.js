import { CartItem } from '../models/cartItem.model.js';
import { findUserByID } from './user.service.js';

// Update Cart Item
async function updateCart(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);

    if (!item) {
      throw new Error(`Cart item not found: ${cartItemId}`);
    }

    const user = await findUserByID(item.userId);

    if (!user) {
      throw new Error(`User not found: ${userId}`);
    }

    if (user._id.toString() === userId.toString()) { // Compare userId
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountPrice = item.quantity * item.product.discountPrice;
      const updatedCartItem = await item.save();

      return updatedCartItem;
    } else {
      throw new Error("You can't update another user's cart item");
    }
  } catch (error) {
    throw new Error(error.message); // Fix error handling
  }
}

// Remove Cart Item
async function removeCartItem(userId, cartItemId) {
  const cartItem = await findCartItemById(cartItemId);
  const user = await findUserByID(userId);

  if (user._id.toString() === cartItem.userId.toString()) {
    await CartItem.findByIdAndDelete(cartItemId);
    return { message: "Cart item removed successfully" }; // Return success message
  } else {
    throw new Error("You can't remove another user's cart item");
  }
}

// Find Cart Item by ID
async function findCartItemById(cartItemId) {
  const cartItem = await CartItem.findById(cartItemId);
  if (cartItem) {
    return cartItem;
  } else {
    throw new Error("Cart item not found");
  }
}

export { updateCart, removeCartItem, findCartItemById };