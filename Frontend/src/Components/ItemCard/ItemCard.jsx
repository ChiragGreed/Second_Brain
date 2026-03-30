import { useNavigate } from 'react-router-dom';
import './ItemCard.scss';
import useItems from '../../Hooks/useItems';



const ItemCard = ({ items }) => {

  const navigate = useNavigate();
  const { getSingleItemHandler } = useItems();



  function ItemCardRender({ items }) {
    return (
      items.map((item, idx) => {
        return <article
          key={idx}
          className="item-card"
          onClick={async () => {
            await getSingleItemHandler(item._id);
            navigate(`/items/${item._id}`);
          }}
        >


          <div className="item-card__body">

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
                <p>{new Date(item.createdAt).toLocaleDateString()}</p>

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


      })
    )
  }

  return (
    <div className='items_grid'>
      <ItemCardRender items={items} />
    </div>
  )

};

export default ItemCard;