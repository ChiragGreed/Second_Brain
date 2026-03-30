import React, { useEffect } from 'react'
import ItemCard from '../../../Components/ItemCard/ItemCard';
import useCollections from '../../../Hooks/useCollections';
import useItems from '../../../Hooks/useItems';



const CollectionDets = () => {

    const { context_items } = useItems();
    const { getCollectionItemsHandler } = useCollections();
    const { Items } = context_items;

    useEffect(() => {
        getCollectionItemsHandler();
    }, []);

    return (
        <div>
            <ItemCard items={Items} />
        </div>
    )
}

export default CollectionDets
