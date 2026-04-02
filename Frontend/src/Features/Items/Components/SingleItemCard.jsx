import './style/ItemCard.scss'

const SingleItemCard = ({ item }) => {

    function SingleItemCardRender({ item }) {
        console.log(item);
        if (!item) return;

        return <article className="item-card">

            <div className="item-card__body">

                <div className='Item_thumbnail'>
                    <img src={item.previewImage} />
                </div>
                
                <h2 className="item-card__title">
                    {item.title}
                </h2>

                {item.summary && (

                    <p className="item-card__summary">
                        {item.summary}
                    </p>

                )}

                {item.tags?.length > 0 && (

                    <div className="item-card__tags">

                        {item.tags.map(tag => (

                            <span
                                key={tag}
                                className="item-card__tag"
                            >

                                {tag}

                            </span>

                        ))}

                    </div>

                )}



                {item.createdAt && (

                    <div className="item-card__date">
                        <h4>Saved on :</h4>
                        <p>{Math.floor((Date.now() - new Date(item.createdAt))
                            / (1000 * 60 * 60 * 24))} Days ago</p>

                    </div>

                )}
            </div>

            {item.url && (

                <div className="item-card__footer">



                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="item-card__link"
                    >

                        open source

                    </a>

                </div>

            )}

        </article>
    }

    return (
        <div>
            <SingleItemCardRender item={item} />
        </div>
    )
}

export default SingleItemCard
