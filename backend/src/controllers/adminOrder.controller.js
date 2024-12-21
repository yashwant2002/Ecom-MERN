import {
  getAllOrder,
  confirmedOrder,
  deliveredOrder,
  cancelOrder,
  deleteOrder,
  shipedOrder,
} from "../services/order.service.js";

// Fetch all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await getAllOrder();
    return res.status(200).json(orders);
  } catch (error) {
    console.error(`Error fetching orders: ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

// Confirm an order
const confirmedOrders = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await confirmedOrder(orderId);
    return res.status(200).json(order);
  } catch (error) {
    console.error(`Error confirming order: ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

// Mark an order as delivered
const deliveredOrderOrders = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await deliveredOrder(orderId);
    return res.status(200).json(order);
  } catch (error) {
    console.error(`Error delivering order: ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

// Cancel an order
const canceledOrders = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await cancelOrder(orderId);
    return res.status(200).json(order);
  } catch (error) {
    console.error(`Error canceling order: ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

// Delete an order
const deleteOrders = async (req, res) => {
  const { orderId } = req.params;
  try {
    await deleteOrder(orderId);
    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(`Error deleting order: ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

// Mark an order as shipped
const shipedOrders = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await shipedOrder(orderId);
    return res.status(200).json(order);
  } catch (error) {
    console.error(`Error shipping order: ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

export {
  getAllOrders,
  confirmedOrders,
  deliveredOrderOrders,
  canceledOrders,
  deleteOrders,
  shipedOrders,
};
