import { findUserCart, addCartItem } from "../services/cart.service.js";

// Get User's Cart
const findUserCarts = async (req, res) => {
  const user = req.user;
  try {
    if (!user) {
      return res.status(400).send({ error: "User not authenticated" });
    }
    const cart = await findUserCart(user._id);
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

// Add Item to Cart
const addItemtoCart = async (req, res) => {
  const user = req.user;
  try {
    if (!user) {
      return res.status(400).send({ error: "User not authenticated" });
    }

    if (!req.body.productId) {
      return res.status(400).send({ error: "Product ID is required" });
    }

    // Pass the req.body to the addCartItem function
    const cart = await addCartItem(user._id, req.body);
    return res.status(200).send({ message: "Item added to Cart", cart });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export { findUserCarts, addItemtoCart };
