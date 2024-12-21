import { getUserIdFromToken } from "../db/jwtProvider.js";
import { findUserByID } from "../services/user.service.js";

const authenticate = async (req, res, next) => {
  try {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1]; // Use a space to split "Bearer <token>"
    if (!token) {
      return res.status(404).send({ error: "Token not found" });
    }

    // Extract user ID from the token
    const userId = getUserIdFromToken(token);

    // Find the user by ID
    const user = await findUserByID(userId);
    if (!user) {
      return res.status(401).send({ error: "Unauthorized user" });
    }

    // Attach the user to the request object
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle errors
    return res.status(500).send({ error: error.message });
  }
};

export { authenticate };
