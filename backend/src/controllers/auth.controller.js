import { createUser, findUserByEmail } from "../services/user.service.js";
import { generateToken } from "../db/jwtProvider.js";
import bcrypt from "bcrypt";
import { createCart } from "../services/cart.service.js";

const registerUser = async (req, res) => {
  // - Extract user details (username, email, password) from the request body
  // - Validate the input
  // - Check if the user already exists
  // - Save the user to the database
  // - Send response with user details and token
  try {
    const user = await createUser(req.body);
    const jwt = generateToken(user._id);

    await createCart(user);

    return res.status(201).send({ jwt, message: "Register Successful!!" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  // - Extract email and password from the request body
  // - Validate the input
  // - Check if the user exists in the database
  // - Compare the password with the hashed password stored in the database
  // - If the password matches, generate a token (e.g., JWT)
  // - Send response with user details and token

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Email and password are required" });
  }

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid password" });
    }

    const jwt = generateToken(user._id);

    return res.status(200).send({ jwt, message: "Login Successful!!" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export { registerUser, loginUser };
