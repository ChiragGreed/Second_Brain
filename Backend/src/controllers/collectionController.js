import collectionModel from "../Models/collectionModel.js";
import itemModel from "../models/itemModel.js";


export const getCollections = async (req, res) => {

    const { userid } = req.user;
    const collections = await collectionModel.find({ userId: userid });

    if (!collections) return res.status(200).json({
        message: "No collection made yet!",
        success: true,
    })

    res.status(200).json({
        message: "Fetched Item Collections",
        success: true,
        collections
    });
};

export const getCollectionItems = async (req, res) => {

    const { userid } = req.user;

    const { collectionId } = req.params;

    const items = await itemModel.find({ userId: userid, collectionId });

    res.status(200).json({
        message: "Fetched Items from collection",
        success: true,
        total: items.length,
        items
    });


};