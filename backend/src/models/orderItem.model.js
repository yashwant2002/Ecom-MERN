import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    size: {
      type: String,
      required: true,
      enum: ["XS", "S", "M", "L", "XL", "XXL"], // Example size options
    },
    quantity: {
      type: Number,
      required: true,
      min: 1, // Ensure at least one item is required
    },
    price: {
      type: Number,
      required: true,
      min: 0, // Ensure price is non-negative
    },
    discountedPrice: {
      type: Number,
      required: true,
      min: 0,
      default: function () {
        return this.price; // Fallback to the original price if discountedPrice is not set
      },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const OrderItem = mongoose.model("OrderItem", orderItemSchema);
