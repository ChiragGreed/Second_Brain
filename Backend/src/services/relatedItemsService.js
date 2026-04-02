import Item from "../Models/itemModel.js"
import { vectorSearch } from "../utils/vector.util.js"

export const RelatedItemService = async (userid, itemId) => {


    const item = await Item.findOne({ _id: itemId })



    return vectorSearch({
        userid: userid,
        embedding: item.embedding,

        excludeId: itemId,

        limit: 5,

        threshold: 0.65

    })

}