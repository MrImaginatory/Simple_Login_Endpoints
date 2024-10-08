import mongoose from "mongoose";

const user = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const userSchema = mongoose.model("UserCred", user);