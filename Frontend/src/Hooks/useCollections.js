import { useContext } from "react";
import { getCollectionsApi } from "../services/collectionsApi"
import { collectionsContext } from "../state/collectionsContext";


const useCollections = () => {

    const context_collections = useContext(collectionsContext);
    const { setCollections, setLoading } = context_collections;


    const getCollectionsHandler = async () => {

        try {
            setLoading(true);
            const response = await getCollectionsApi();
            setCollections(response.collections);

        }
        catch (err) {
            return err;
        }
        finally {
            setLoading(false)
        }

    }

    return ({ context_collections, getCollectionsHandler })
}

export default useCollections