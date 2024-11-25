import {
  getAllOrder,
  confirmedOrder,
  deliveredOrder,
  cancelOrder,
  deleteOrder,
  shipedOrder,
} from "../services/order.service.js";

const getAllOrders = async (req, res) => {
  try {
    const orders = await getAllOrder();
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const confirmedOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await confirmedOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deliveredOrderOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await deliveredOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const canceledOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await cancelOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await deleteOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const shipedOrders = async (req, res) => {
  const orderId = req.params.orderId;
  try {
    const orders = await shipedOrder(orderId);
    return res.status(200).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export {
  getAllOrders,
  confirmedOrders,
  deleteOrders,
  canceledOrders,
  deliveredOrderOrders,
  shipedOrders,
};
