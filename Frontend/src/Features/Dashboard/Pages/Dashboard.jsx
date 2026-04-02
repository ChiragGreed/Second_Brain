import React, { useEffect } from 'react'
import ItemCard from '../../Items/Components/ItemCard/ItemCard'
import useItems from '../../Items/Hook/useItems';

const Dashboard = () => {

    const { context_items, getItemsHandler } = useItems();
    const { Items = [], Loading } = context_items;


    useEffect(() => {
        getItemsHandler();
    }, [])


    if (Loading) return <div><h1 className='loading_label'>Loading</h1></div>

    return (

        <div>
            <ItemCard items={Items} />
        </div>
    )
}

export default Dashboard
