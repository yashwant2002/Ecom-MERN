import { updateCart, removeCartItem } from "../services/cartItem.service.js";

// Update Cart Item
const updateCartItem = async (req, res) => {
  const user = req.user;
  try {
    // Await the updateCart call to ensure the cart item is updated before responding 
    const updatedCartItem = await updateCart(user._id, req.params.id, req.body);
    return res.status(200).send(updatedCartItem);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

// Remove Cart Item
const removeCartItems = async (req, res) => {
  const user = req.user;
  try {
    // Await the removeCartItem call to ensure the cart item is removed before responding
    await removeCartItem(user._id, req.params.id);
    return res.status(200).send("Cart item removed successfully");
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export { updateCartItem, removeCartItems };
