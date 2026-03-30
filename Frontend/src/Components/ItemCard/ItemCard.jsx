import './ItemCard.scss';

function ItemCardRender({ items }) {
  return (
    items.map((item, idx) => {
      return <article key={idx} className="item-card">

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

const ItemCard = ({ items }) => {
  return (
    <div className='items_grid'>
      <ItemCardRender items={items} />
    </div>
  )

};


export default ItemCard;