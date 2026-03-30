import { useContext } from "react";
import { getItemsApi, searchItemsApi } from "../services/itemsApi"
import { itemsContext } from "../state/itemsContext";
import { getCollectionItemsApi } from "../services/collectionsApi";


const useItems = () => {

    const context_items = useContext(itemsContext);
    const { setItems, Collections, setCollections, setLoading } = context_items;

    const getItemsHandler = async () => {

        try {
            setLoading(true);

            const response = await getItemsApi();
            setItems(response.items);
            setLoading(false);

        }
        catch (err) {
            return err;
        }
        finally {
            setLoading(false)
        }

    }

    const searchItemsHandler = async (Query) => {

        try {
            setLoading(true)
            const res = await searchItemsApi(Query);
            setItems(res.items)

        }
        catch (err) {
            return err;
        }
        finally {
            setLoading(false)
        }

    }

    const getCollectionsHandler = async (collectionId) => {

        try {
            setLoading(true);
            const response = await getCollectionItemsApi(collectionId);
            setCollections(response.collections);

        }
        catch (err) {
            return err;
        }
        finally {
            setLoading(false)
        }

    }

    return ({ context_items, getItemsHandler, searchItemsHandler, getCollectionsHandler })
}

export default useItems