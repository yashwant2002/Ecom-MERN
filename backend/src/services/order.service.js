import { findUserCart } from "./cart.service.js";
import {Address} from "../models/address.model.js";
import { Order } from "../models/order.model.js";

async function createOrder(user, shipAddress) {
  let address;

  if (shipAddress._id) {
    let isExist = await Address.findById(shipAddress._id);
    address = isExist;
  } else {
    address = new Address(shipAddress);
    address.user = user;
    await address.save();

    user.Address.push(address);
    await user.save();
  }

  const cart = await findUserCart(user._id);
  const orderItems = [];

  for (const item of cart.cartItems) {
    const orderItem = new orderItems({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });

    const createOrderItems = await orderItem.save();
    orderItem.push(createOrderItems);
  }

  const createdOrder = new orderItems({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discounte: cart.discounte,
    totalItem: cart.totalItem,
    shipAddress: address,
  });

  const savedOrder = await createOrder.save();

  return savedOrder;
}

async function placeOrder(orderId) {
  const order = await findOrderById(orderId);

  (order.orderStatus = "PLACED"), (order.paymentDetails.status = "COMPLETED");

  return await order.save();
}

async function confirmedOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "CONFIRMED";

  return await order.save();
}

async function shipedOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "SHIPPED";

  return await order.save();
}

async function deliveredOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "DELIVERED";

  return await order.save();
}

async function cancelOrder(orderId) {
  const order = await findOrderById(orderId);
  order.orderStatus = "CANCELED";

  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");

  return order;
}

async function userOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })  
      .lean();

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrder() {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}

async function deleteOrder(orderId) {
  const order = await findOrderById(orderId);
  await Order.findByIdAndDelete(order._id);
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
