import { buildKnowledgeGraph } from "../services/graphService.js"

export const getKnowledgeGraph = async (req, res) => {

    try {
        const { userid } = req.user;
        const graph = await buildKnowledgeGraph(userid);

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