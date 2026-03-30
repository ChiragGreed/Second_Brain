import React from 'react'
import ItemCard from '../../Components/ItemCard/ItemCard'
import useItems from '../../Hooks/useItems'

const SearchResult = () => {

    const { context_items } = useItems();
    const { Items } = context_items;

    return (
        <div>
            <ItemCard items={Items} />
        </div>
    )
}

export default SearchResult
