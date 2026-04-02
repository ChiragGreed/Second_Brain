import collectionModel from "../Models/collectionModel.js";

export const findCollectionByName = async (name) => {

    if (!name) return null;

    return await collectionModel.findOne({
        name: name.trim()
    });

};


export const createCollectionService = async (name, userid) => {

    if (!name) return null;

    const normalized = name.trim();

    let collection = await collectionModel.findOne({ userId: userid, name: normalized });

    if (collection) return "Collection already exist";

    collection = await collectionModel.create({ name: normalized, userId: userid });


    return collection;

};