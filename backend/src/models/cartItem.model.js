import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    size: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number, // Changed to Number
        required: true
    },
    discountPrice: {
        type: Number, // Changed to Number
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false // If userId is optional, leave it as required: false or omit it
    }
}, { timestamps: true });

export const CartItem = mongoose.model('CartItem', cartItemSchema);
