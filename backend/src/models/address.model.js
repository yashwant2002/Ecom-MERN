import mongoose from "mongoose";

// Create the address schema
const addressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String, // Change to String if zip code might contain leading zeros
        required: true,
        minlength: 5, // Zip code length validation (can vary depending on country)
        maxlength: 10 // Zip code length validation
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    mobile: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/, // Regex to match a 10-digit mobile number
    }
}, { timestamps: true });

// Create and export the Address model
export const Address = mongoose.model("Address", addressSchema);
