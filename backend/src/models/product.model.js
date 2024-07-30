import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    discountedPrice : {
        type : Number,
        required : true
    },

    quantity : {
        type : Number,
        required : true
    },

    brand : {
        type : String,
    },

    color : {
        type : String,
        required : true
    },

    size : {
        name :{type : String},
        quantity : {type: String}
    },

    image : {
        type : String,
        required : true
    },

    rating : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Rating",
        // required : true
    },

    review : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Review",
        required : true
    },

    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true
    },

    numRating : {
        type: Number,
        default : 0
    }
},{timestamps: true})

export const Product = mongoose.model("Product", productSchema)