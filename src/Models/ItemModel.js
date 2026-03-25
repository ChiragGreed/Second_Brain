import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    collectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "collection",
    }
},
    { timestamps: true }
)

const itemModel = mongoose.model("item", itemSchema);

export default itemModel;