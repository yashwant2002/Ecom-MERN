import { Category } from "../models/category.model.js";
import { Product } from "../models/product.model.js";

async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLevelCategory });

  if (!topLevel) {
    topLevel = new Category({
      name: reqData.topLevelCategory,
      level: 1,
    });
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLevelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    secondLevel = new Category({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountedPresent: reqData.discountedPresent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    sizes: reqData.size,
    quantity: reqData.quantity,
    category: thirdLevel._id,
  });

  return await product.save();
}

async function deleteProduct(productId) {
  const product = await findProductById(productId);

  await Product.findByIdAndDelete(productId);
  return "Product deleted Successfully";
}

async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(id) {
  const product = await Product.findById(id).populate("category").exec();

  if (!product) {
    throw new Error("Product not found with id " + id);
  }

  return product;
}

async function getAllProduct(reqQuery) {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pagesize,
  } = reqQuery;

  pagesize = pagesize || 10;

  let query = Product.find().populate("category");

  // Filter by Category
  if (category) {
    const existCategory = await Category.findOne({ name: category });
    if (existCategory) {
      query = query.where("category").equals(existCategory._id);
    } else {
      return { content: [], currentPage: 1, totalPages: 0 };
    }
  }

  // Filter by Color
  if (color) {
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase())
    );
    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
    query = query.where("color").regex(colorRegex);
  }

  // Filter by Sizes
  if (sizes) {
    const sizeSet = new Set(sizes);
    query = query.where("sizes.name").in([...sizeSet]);
  }

  // Filter by Price Range
  if (minPrice && maxPrice) {
    query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
  }

  // Filter by Minimum Discount
  if (minDiscount) {
    query = query.where("discountedPresent").gt(minDiscount);
  }

  // Filter by Stock Availability
  if (stock) {
    if (stock === "in_stock") {
      query = query.where("quantity").gt(0);
    } else if (stock === "out_of_stock") {
      query = query.where("quantity").lte(0);
    }
  }

  // Sorting
  if (sort) {
    const sortDirection = sort === "price_hight" ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }

  // Pagination
  const totalProducts = await Product.countDocuments(query);
  const skip = (pageNumber - 1) * pagesize;
  query = query.skip(skip).limit(pagesize);

  const products = await query.exec();
  const totalPages = Math.ceil(totalProducts / pagesize);

  return { content: products, currentPage: pageNumber, totalPages };
}

async function createMultipleProduct(product) {
  for (let prod of product) {
    await createProduct(prod);
  }
}

export {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProduct,
  findProductById,
  createMultipleProduct,
};
