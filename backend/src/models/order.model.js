import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItem",
        required: true,
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    totalDiscountedPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    totalItem: {
      type: Number,
      required: true, // Make sure it's required
    },
    shipAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address", // Ensure this references the correct Address model
      required: true, // Make sure it's required
    },
  },
  { timestamps: true }
);


export const Order = mongoose.model("Order", orderSchema);
