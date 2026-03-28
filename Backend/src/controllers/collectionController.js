import collectionModel from "../Models/collectionModel.js";
import itemModel from "../models/ItemModel.js";

export const getCollections = async (req, res) => {
    try {
        const collections = await collectionModel.find();

        if (!collections) return res.status(200).json({
            message: "No collection made yet!",
            success: true,
        })

        res.status(200).json({
            message: "Fetched Item Collections",
            success: true,
            collections
        });

    } catch (error) {
        res.status(400).json({
            message: "Failed to fetch Collections",
            success: false,
            err: error
        });
    }
};

export const getCollectionItems = async (req, res) => {
    try {

        const { collectionId } = req.params;

        const items = await itemModel.find({ collectionId });

        res.status(200).json({
            message:"Fetched Items from collection",
            success: true,
            total: items.length,
            items
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err.message
        });

    }
};