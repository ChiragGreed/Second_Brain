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
    }

}, { timestamps: true });

export default mongoose.models.collection || mongoose.model("collection", collectionSchema);