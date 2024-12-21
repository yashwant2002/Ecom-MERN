import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    discountedPrice: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return v <= this.price; // Ensure discountedPrice is not greater than price
            },
            message: props => `Discounted price (${props.value}) cannot be greater than the original price (${this.price}).`
        }
    },

    quantity: {
        type: Number,
        required: true
    },

    brand: {
        type: String,
    },

    color: {
        type: String,
        required: true
    },

    size: [{
        name: { type: String, required: true },
        quantity: { type: Number, required: true }
    }],

    image: {
        type: String,
        required: true
    },

    rating: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rating",
    },

    review: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    numRating: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);
