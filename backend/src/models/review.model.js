import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },

    review: {
        type: String,
        required: true,
        minlength: [10, 'Review must be at least 10 characters long'], // Minimum length for reviews
        maxlength: [500, 'Review cannot exceed 500 characters'] // Maximum length for reviews
    }

}, { timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);
