import {
  createOrder,
  findOrderById,
  userOrderHistory,
} from "../services/order.service.js";

// Create a new order
const createdOrder = async (req, res) => {
  const user = req.user;
  const shipAddress = req.body.shipAddress;  // Ensure shipAddress is being passed

  try {
    const newOrder = await createOrder(user, shipAddress); 
    return res.status(201).send(newOrder);
  } catch (error) {
    console.error(`Error creating order: ${error.message}`);
    return res.status(500).send({ error: "Failed to create order. Please try again." });
  }
};


// Find an order by ID
const findOrdersById = async (req, res) => {
  try {
    const order = await findOrderById(req.params.id);
    if (!order) {
      return res.status(404).send({ error: "Order not found" });
    }
    return res.status(200).send(order);
  } catch (error) {
    console.error(`Error fetching order: ${error.message}`);
    return res.status(500).send({ error: "Failed to fetch order. Please try again." });
  }
};


// Get user order history
const orderHistory = async (req, res) => {
  const user = req.user; // Assuming the user is added to the request by authentication middleware
  try {
    const history = await userOrderHistory(user._id);
    return res.status(200).send(history); // Sending history as response
  } catch (error) {
    console.error(`Error fetching order history: ${error.message}`);
    return res.status(500).send({ error: "Failed to fetch order history. Please try again." });
  }
};


export { createdOrder, findOrdersById, orderHistory };
