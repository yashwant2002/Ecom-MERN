import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },

    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true
    },

    review : {
        type : String,
        required : true
    }
    
},{timestamps: true})

export const Review = mongoose.model("Review", reviewSchema) 