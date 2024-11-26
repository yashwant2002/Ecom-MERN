import {
  createMultipleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
} from "../services/product.service.js";

const createProduct = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await deleteProduct(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await updateProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await findProductById(productId);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await getAllProducts(req.query);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const createMultipleProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await createMultipleProduct(req.body);
    return res.status(201).send({ message: "Product created Successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export {
  createMultipleProduct,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  findProductById,
};
