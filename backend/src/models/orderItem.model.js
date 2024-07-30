import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
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
        type : String,
        required : true
    },
    
    price : {
        type : String,
        required : true
    },

    discountedPrice : {
        type : String,
        required : true
    },

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
},{timestamps: true})

export const OrderItem = mongoose.model("OrderItem", orderItemSchema)