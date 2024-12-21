import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50 // Ensures category name doesn't exceed 50 characters
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        default: null // Default to null if no parent category is provided
    },
    level: {
        type: Number,
        required: true,
        min: [1, 'Level must be greater than or equal to 1'], // Ensures level is at least 1
        max: [5, 'Level must be less than or equal to 5'] // Adjust this based on your category hierarchy
    }
}, { timestamps: true });

export const Category = mongoose.model("Category", categorySchema);
