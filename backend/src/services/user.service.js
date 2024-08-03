import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { getUserIdFromToken } from "../db/jwtProvider.js";

const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      throw new Error(`User already exists with email: ${email}`);
    }

    password = await bcrypt.hash(password, 8);

    const user = await User.create({ firstName, lastName, email, password });

    console.log("Created user:", user);

    return user;
  } catch (error) {
    throw new Error(error.message); 
  }
};

const findUserByID = async (userId) => {
  try {
    const user = await User.findById(userId)
    // .populate("address");
    if (!user) {
      throw new Error(`User not found: ${userId}`);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error(`User not found: ${email}`);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId = getUserIdFromToken(token);

    const user = await findUserByID(userId);

    if (!user) {
      throw new Error(`User not found: ${userId}`);
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { createUser, findUserByID, findUserByEmail, getUserProfileByToken, getAllUsers };
