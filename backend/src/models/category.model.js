import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        maxlength: 50
    },
    parentCategory : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    level : {
        type : Number,
        required : true
    }
},{timestamps: true});

export const Category = mongoose.model("Category", categorySchema)