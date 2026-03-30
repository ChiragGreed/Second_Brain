import React, { useEffect } from 'react'
import ItemCard from '../../Components/ItemCard/ItemCard'
import useItems from '../../Hooks/useItems';

const Dashboard = () => {

    const { context_items, getItemsHandler } = useItems();
    const { Items } = context_items;

    useEffect(() => {
        getItemsHandler();
    }, []);


    return (
        <div>
            <ItemCard items={Items} />
        </div>
    )
}

export default Dashboard
