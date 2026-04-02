import './ItemDets.scss'
import SingleItemCard from '../Components/SingleItemCard'
import ItemCard from '../Components/ItemCard/ItemCard'
import useItems from '../Hook/useItems'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemDets = () => {

    const { context_items, getRelatedItemHandler, getSingleItemHandler } = useItems();
    const { Items, SingleItem } = context_items;
    const { itemId } = useParams();

    useEffect(() => {
        getSingleItemHandler(itemId);
        getRelatedItemHandler(itemId);
    }, [itemId])



    return (
        <div className='ItemsDetsPage'>
            <div className='item'>
                <SingleItemCard item={SingleItem} />
            </div>

            <h2 className='related_items_label'>Related suggestions</h2>

            <ItemCard items={Items} />
        </div>
    )
}

export default ItemDets
