import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
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

    rating: {
        type: Number, // Changed to Number
        required: true,
        min: [1, 'Rating must be between 1 and 5'], // Minimum value validation
        max: [5, 'Rating must be between 1 and 5']  // Maximum value validation
    }

}, { timestamps: true });

export const Rating = mongoose.model("Rating", ratingSchema);
