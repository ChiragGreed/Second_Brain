import collectionModel from "../Models/collectionModel.js";
import itemModel from "../Models/itemModel.js";
import { createCollectionService } from "../services/collectionService.js";


export const createCollection = async (req, res) => {

    const { userid } = req.user;
    const { name } = req.body;

    if (!name) return res.status(400).json({
        message: "Collection name is required",
        success: false,
        err: "No Collection name provided"
    })

    const collection = await createCollectionService({ name, userid })

    res.status(201).json({
        message: "Collection created",
        success: true,
        collection
    })



}

export const getCollections = async (req, res) => {

    const { userid } = req.user;
    const collections = await collectionModel.find({ userId: userid });

    if (!collections) return res.status(200).json({
        message: "No collection made yet!",
        success: true,
    })

    console.log(collections);
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