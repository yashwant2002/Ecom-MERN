import { Review } from "../models/review.model";
import { findProductById } from "../services/product.service";

async function createReview(reqData, user) {
  const product = await findProductById(reqData.productId);

  const review = new Review({
    user: user._id,
    product: product._id,
    review: reqData.review,
    createdAt: new Date(),
  });

  await product.save();

  return await review.save();
}

async function getAllReviews(productId) {
  const product = await findProductById(reqData.productId);

  return await Review.find({ product: productId }).populate("user");
}

export { getAllReviews, createReview };
