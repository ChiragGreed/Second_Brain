import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    itemCount: {
        type: Number,
        default: 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }

}, { timestamps: true });

const collectionModel = mongoose.model("Collections", collectionSchema);
export default collectionModel