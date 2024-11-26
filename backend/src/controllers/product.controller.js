import {
  createMultipleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProduct,
} from "../services/product.service.js";

const createdProduct = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    return res.status(201).send(product); 
  } catch (error) {
    return res.status(500).send({ error: error.message }); 
  }
};

const deletedProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await deleteProduct(productId);
    return res.status(200).send(product); 
  } catch (error) {
    return res.status(500).send({ error: error.message }); 
  }
};

const updatedProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await updateProduct(req.body);
    return res.status(200).send(product); 
  } catch (error) {
    return res.status(500).send({ error: error.message }); 
  }
};

const findProductByIds = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await findProductById(productId);
    return res.status(200).send(product); 
  } catch (error) {
    return res.status(500).send({ error: error.message }); 
  }
};

const getAllProducts = async (req, res) => {
  try {
    const product = await getAllProduct(req.query);
    return res.status(200).send(product); 
  } catch (error) {
    return res.status(500).send({ error: error.message }); 
  }
};

const createMultipleProducts = async (req, res) => {
  try {
    const product = await createMultipleProduct(req.body);
    return res
      .status(201)
      .send({ message: "Product created Successfully", product }); 
  } catch (error) {
    return res.status(500).send({ error: error.message }); 
  }
};

export {
  createMultipleProducts,
  getAllProducts,
  createdProduct,
  updatedProduct,
  deletedProduct,
  findProductByIds,
};
