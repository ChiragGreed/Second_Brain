
import { useEffect } from 'react';
import useItems from '../../Hooks/useItems'

const SingleItemCard = () => {

    const { context_items } = useItems();
    const { SingleItem } = context_items;


    return (
        <div>
            <article className="item-card">

                <div className="item-card__body">

                    <h2 className="item-card__title">
                        {SingleItem.title}
                    </h2>

                    {SingleItem.summary && (

                        <p className="item-card__summary">
                            {SingleItem.summary}
                        </p>

                    )}

                    {SingleItem.tags?.length > 0 && (

                        <div className="item-card__tags">

                            {SingleItem.tags.map(tag => (

                                <span
                                    key={tag}
                                    className="item-card__tag"
                                >

                                    {tag}

                                </span>

                            ))}

                        </div>

                    )}



                    {SingleItem.createdAt && (

                        <div className="item-card__date">
                            <h4>Saved on :</h4>
                            <p>{new Date(SingleItem.createdAt).toLocaleDateString()}</p>

                        </div>

                    )}
                </div>

                {SingleItem.url && (

                    <div className="item-card__footer">



                        <a
                            href={SingleItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="item-card__link"
                        >

                            open source

                        </a>

                    </div>

                )}

            </article>
        </div>
    )
}

export default SingleItemCard
