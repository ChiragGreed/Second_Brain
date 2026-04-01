import { createEmbedding } from "./embeddingService.js"
import { vectorSearch } from "../utils/vector.util.js"

export const semanticSearch = async (userid, query) => {

    const embedding = await createEmbedding(query)

    return vectorSearch({ userid: userid, embedding })

}