import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  try {
    const token = jwt.sign({ userId }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRY });
    return token;
  } catch (error) {
    throw new Error('Token generation failed: ' + error.message);
  }
};

const getUserIdFromToken = (token) => {
  try {
    const decodeToken = jwt.verify(token, process.env.TOKEN_SECRET);
    return decodeToken.userId;
  } catch (error) {
    throw new Error('Token verification failed: ' + error.message);
  }
};

export { generateToken, getUserIdFromToken };
