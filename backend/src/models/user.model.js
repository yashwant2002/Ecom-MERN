import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    email : {
        type : String,
        required : true
    },
    role : {
        required : true,
        type : String,
        default : 'CUSTOMER'
    },
    mobile : {
        type : String,
    },
    address : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Address"
        },
    ],
    paymentInformation : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "PaymentInformation"
    }],
    rating : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Rating"
    }],
    reviews : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Review"
    }]
},{timestamps:true})
export const User = mongoose.model('User', userSchema)