import { useContext } from "react";
import { GraphContext } from "../State/GraphContext";
import { getGraphApi } from "../Services/GraphApi";


const useGraph = () => {

    const context_graph = useContext(GraphContext);

    const { setGraph, setLoading } = context_graph;

    const getGraphHandler = async () => {

        try {
            setLoading(true);
            const response = await getGraphApi();
            setGraph(response.graph);
            setLoading(false);
        }
        catch (err) {
            return err;
        }
        finally {
            setLoading(false)
        }

    }

    return ({ context_graph, getGraphHandler })
}

export default useGraph