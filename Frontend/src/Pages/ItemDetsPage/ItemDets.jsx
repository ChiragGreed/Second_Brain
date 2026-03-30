import './ItemDets.scss'
import SingleItemCard from '../../Components/SingleItemCard/SingleItemCard'
import ItemCard from '../../Components/ItemCard/ItemCard'
import useItems from '../../Hooks/useItems'
import { useEffect } from 'react'

const ItemDets = () => {

    const { context_items, getRelatedItemHandler } = useItems();
    const { Items, SingleItem } = context_items;

    useEffect(() => {
        getRelatedItemHandler(SingleItem._id)
    }, [])



    return (
        <div className='ItemsDetsPage'>
            <div className='item'>
                <SingleItemCard />
            </div>

            <h2 className='related_items_label'>Related suggestions</h2>

            <ItemCard items={Items} />
        </div>
    )
}

export default ItemDets
