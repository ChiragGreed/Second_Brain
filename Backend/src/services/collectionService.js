import Collection from "../Models/collectionModel.js";

export const findCollectionByName = async (name) => {

    if (!name) return null;

    return await Collection.findOne({
        name: name.trim()
    });

};


export const createCollectionIfNotExists = async (name) => {

    if (!name) return null;

    const normalized =
        name.trim();

    let collection =
        await Collection.findOne({
            name: normalized
        });

    if (!collection) {

        collection =
            await Collection.create({
                name: normalized
            });

    }

    return collection;

};