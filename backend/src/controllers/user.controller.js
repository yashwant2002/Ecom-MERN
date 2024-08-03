import { getUserProfileByToken, getAllUsers } from "../services/user.service.js";

const getUserProfile = async (req, res) => {
  const authHeader = req.headers.authorization;
  const jwt = authHeader?.split(" ")[1];

  try {
    if (!jwt) {
      return res.status(404).send({ error: "Token not found" });
    }

    const user = await getUserProfileByToken(jwt);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await getAllUsers();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export { getAllUser, getUserProfile };
