import "../config/dotenvConfig.js";
import { MistralAIEmbeddings } from "@langchain/mistralai"

const embeddings = new MistralAIEmbeddings({
  model: "mistral-embed",
})

export const createEmbedding = async (text) => {

  if (!text) {
    throw new Error("Text is required")
  }

  const vector = await embeddings.embedQuery(text)

  return vector

}