import itemModel from "../Models/ItemModel.js";
import { createEmbedding } from "../services/embeddingService.js"
import { generateTags } from "../services/tagsService.js";

export const saveItem = async (req, res) => {

    const { content, url, title, collectionId } = req.body;

    const tags = await generateTags(content);

    const embedding = await createEmbedding(content);

    const item = await itemModel.create({
        title,
        content,
        url,
        embedding,
        tags,
        collectionId
    })

    res.status(200).json({
        message: "Item saved successfully",
        success: true,
        item
    })

}



