import React from 'react';
import './Resurfacing.scss'

const ITEMS = [
    {
        title: 'Attention mechanisms in transformers',
        meta: '3 days ago · Research papers',
        excerpt: 'Self-attention allows each position to attend to all positions in the previous layer. This enables long-range dependencies across the sequence.',
        fresh: true,
    },
    {
        title: 'Graph neural networks — overview',
        meta: '1 week ago · Quick notes',
        excerpt: 'GNNs generalise convolutions to non-Euclidean data. Key variants: GCN, GAT, GraphSAGE.',
        fresh: true,
    },
    {
        title: 'REST vs GraphQL trade-offs',
        meta: '2 weeks ago · Code snippets',
        excerpt: 'GraphQL reduces over-fetching but adds query complexity. REST is cacheable at the HTTP layer.',
        fresh: false,
    },
    {
        title: 'Spaced repetition systems',
        meta: '1 month ago · Quick notes',
        excerpt: 'Review intervals grow exponentially. SM-2 algorithm drives Anki. Optimal review lands just before forgetting.',
        fresh: false,
    },
];

const Resurfacing = () => {
    return (
        <div className="screen">
            <div className="screen__header">
                <div className="screen__eyebrow">Explore</div>
                <div className="screen__title">Resurfacing</div>
            </div>

            <div className="screen__body">
                <div className="stat-grid">
                    <div className="stat-card">
                        <div className="stat-card__label">Due today</div>
                        <div className="stat-card__value">2</div>
                        <div className="stat-card__delta">↑ review now</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__label">Reviewed</div>
                        <div className="stat-card__value">41</div>
                        <div className="stat-card__delta">↑ this month</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card__label">Streak</div>
                        <div className="stat-card__value">6</div>
                        <div className="stat-card__delta">↑ days</div>
                    </div>
                </div>

                {ITEMS.map((item) => (
                    <div className="resurface-item" key={item.title}>
                        <div className={`resurface-item__dot${item.fresh ? '' : ' resurface-item__dot--dim'}`} />
                        <div>
                            <div className="resurface-item__title">{item.title}</div>
                            <div className="resurface-item__meta">{item.meta}</div>
                            <div className="resurface-item__excerpt">{item.excerpt}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resurfacing;