import {
  createOrder,
  findOrderById,
  userOrderHistory,
} from "../services/order.service.js";

const createdOrder = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await createOrder(user, req.body);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findOrdersById = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await findOrderById(req.params.id);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const orderHistory = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await userOrderHistory(user._id);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export { createdOrder, findOrdersById, orderHistory };
