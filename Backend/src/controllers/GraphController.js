import { buildKnowledgeGraph } from "../services/graphService.js"

export const getKnowledgeGraph =
    async (req, res) => {

        try {
            const graph = await buildKnowledgeGraph();

            res.status(200).json({
                message: "Fetched knowledgeGraph",
                success: true,
                graph
            })

        }
        catch (err) {

            res.status(500).json({
                error: err.message
            });

        }

    }