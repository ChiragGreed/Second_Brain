import nlp from "compromise"
import { removeStopwords } from "stopword"
import { IGNORE_WORDS } from "../utils/ignoreWords.js"

export const generateTags = (content) => {

 let nouns = nlp(content)
  .nouns()
  .out("array")

 nouns = nouns.map(w => w.toLowerCase())

 nouns = removeStopwords(nouns)

 nouns = nouns.filter(w => !IGNORE_WORDS.includes(w))

 const unique = [...new Set(nouns)]

 return unique.slice(0,5)

}