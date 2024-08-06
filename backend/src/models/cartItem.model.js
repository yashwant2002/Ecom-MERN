import mongoose from 'mongoose'

const cartItemSchema = new mongoose.Schema({
    cart : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Cart",
        required : true
    },
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true
    },
    size : {
        type : String,
        required : true
    }, 
    quantity : {
        type : Number,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    discountPrice : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
},{timestamps: true});

export const CartItem = mongoose.model('CartItem', cartItemSchema)