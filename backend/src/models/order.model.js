import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },

    orderItem : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "OrderItem",
        required : true
    },

    orderDate : {
        type : Date,
        default : Date.now()
    },

    deliveryDate : {
        type : Date,
        required : true
    },

    shippingAddress : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Address",
        required : true
    },

    paymentDetails : {
        paymentMethod : {
            type : String,
        },
        paymentId : {
            type : String,
        },
        paymentStatus : {
            type : String,
        },
        transactionId : {
            type : String,
        },
    },

    totalPrice : {
        type : Number,
        required : true
    },

    totalDiscountedPrice : {
        type : Number,
        required : true
    },

    discount : {
        type : Number,
        required : true
    },

    totalItems : {
        type : Number,
        required : true
    },

    orderStatus : {
        type : String,
        required : true,
        default : "PENDING"
    },
},{timestamps: true});

export const Order = mongoose.model('Order', orderSchema)