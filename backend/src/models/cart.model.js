import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    cartItems : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "CartItem"
    }],
    totalPrice : {
        type : Number,
        default : "0"
    },
    totalDiscountPrice : {
        type : Number,
        default : "0"
    },
    discount : {
        type : Number
    }
},{timestamps : true});

export const Cart = mongoose.model('Cart', cartSchema)