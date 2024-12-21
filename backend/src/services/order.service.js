import mongoose from 'mongoose';
import { findUserCart } from "./cart.service.js";
import { Address } from "../models/address.model.js";
import { Order } from "../models/order.model.js";
import { OrderItem } from "../models/orderItem.model.js";

async function createOrder(user, shipAddress) {
  try {
    let address;

    // If the address has an ID, use the existing address, otherwise create a new one
    if (shipAddress && shipAddress._id) {
      const existingAddress = await Address.findById(shipAddress._id);
      address = existingAddress;
    } else {
      address = new Address(shipAddress);
      address.user = user;
      await address.save();

      user.address = user.address || [];
      user.address.push(address);
      await user.save();
    }

    // Fetch the user's cart and create order items
    const cart = await findUserCart(user._id);
    const orderItems = [];
    let totalItems = 0; // Initialize totalItems to 0
    let totalDiscountedPrice = 0;

    // Create order items and calculate totals
    for (const item of cart.cartItems) {
      const orderItem = new OrderItem({
        price: item.price,
        product: item.product,
        quantity: item.quantity,
        size: item.size,
        userId: item.userId,
        discountedPrice: item.discountedPrice || item.price, // Fallback to price if discountedPrice is missing
      });

      const savedOrderItem = await orderItem.save();
      orderItems.push(savedOrderItem);
      
      // Update totalItems and totalDiscountedPrice
      totalItems += item.quantity;
      totalDiscountedPrice += (item.discountedPrice || item.price) * item.quantity;
    }

    // Create the order with the required fields
    const createdOrder = new Order({
      user,
      orderItems,
      totalPrice: cart.totalPrice,
      totalDiscountedPrice: totalDiscountedPrice, // Total discounted price
      discount: cart.discount,
      totalItem: totalItems, // Total number of items in the cart
      shipAddress: address, // The shipping address
    });

    const savedOrder = await createdOrder.save();
    return savedOrder;
  } catch (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }
}


async function placeOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    order.orderStatus = "PLACED";
    order.paymentDetails = order.paymentDetails || {};
    order.paymentDetails.status = "COMPLETED";
    return await order.save();
  } catch (error) {
    throw new Error(`Error placing order: ${error.message}`);
  }
}

async function confirmedOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    order.orderStatus = "CONFIRMED";
    return await order.save();
  } catch (error) {
    throw new Error(`Error confirming order: ${error.message}`);
  }
}

async function shipedOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    order.orderStatus = "SHIPPED";
    return await order.save();
  } catch (error) {
    throw new Error(`Error shipping order: ${error.message}`);
  }
}

async function deliveredOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    order.orderStatus = "DELIVERED";
    return await order.save();
  } catch (error) {
    throw new Error(`Error delivering order: ${error.message}`);
  }
}

async function cancelOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    order.orderStatus = "CANCELED";
    return await order.save();
  } catch (error) {
    throw new Error(`Error canceling order: ${error.message}`);
  }
}

const findOrderById = async (orderId) => {
  console.log(`Finding order with ID: ${orderId}`); // Debugging line
  if (!mongoose.Types.ObjectId.isValid(orderId)) {
    throw new Error("Invalid Order ID");
  }

  try {
    const order = await Order.findById(orderId)
      .populate("user")
      .populate({ path: "orderItems", populate: { path: "product" } })
      .populate("shipAddress");

    console.log(`Found order:`, order); // Debugging line

    if (!order) {
      throw new Error("Order not found");
    }

    return order;
  } catch (error) {
    console.error(`Error finding order by ID: ${error.message}`);
    throw new Error(`Error finding order by ID: ${error.message}`);
  }
};


async function userOrderHistory(userId) {
  try {
    console.log(`Fetching orders for user: ${userId}`);
    // Query to fetch orders with "PLACED" status
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
    
    console.log(`Found orders:`, orders); // Debug log

    if (orders.length === 0) {
      console.log("No orders found with status 'PLACED' for user.");
    }

    return orders;
  } catch (error) {
    console.error(`Error fetching user order history: ${error.message}`);
    throw new Error(`Error fetching user order history: ${error.message}`);
  }
}


async function getAllOrder() {
  try {
    return await Order.find()
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();
  } catch (error) {
    throw new Error(`Error fetching all orders: ${error.message}`);
  }
}

async function deleteOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    await Order.findByIdAndDelete(order._id);
  } catch (error) {
    throw new Error(`Error deleting order: ${error.message}`);
  }
}

export {
  createOrder,
  placeOrder,
  confirmedOrder,
  shipedOrder,
  deleteOrder,
  deliveredOrder,
  cancelOrder,
  findOrderById,
  userOrderHistory,
  getAllOrder,
};
