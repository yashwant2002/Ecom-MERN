import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CartItem"
    }],
    totalPrice: {
        type: Number,
        default: 0 // Corrected to a number (0 instead of "0")
    },
    totalDiscountPrice: {
        type: Number,
        default: 0 // Corrected to a number (0 instead of "0")
    },
    discount: {
        type: Number,
        default: 0 // Added default value for discount if needed
    }
}, { timestamps: true });

export const Cart = mongoose.model('Cart', cartSchema);
