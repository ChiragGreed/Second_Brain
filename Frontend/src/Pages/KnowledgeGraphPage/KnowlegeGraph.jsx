import React from 'react';
import '../Styles/Pages.scss';

const KnowledgeGraph = () => {
  return (
    <div className="screen">
      <div className="screen__header">
        <div className="screen__eyebrow">Explore</div>
        <div className="screen__title">Knowledge graph</div>
      </div>

      <div className="screen__body">
        <div className="stat-grid">
          <div className="stat-card">
            <div className="stat-card__label">Nodes</div>
            <div className="stat-card__value">1,284</div>
            <div className="stat-card__delta">↑ 34 this week</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__label">Connections</div>
            <div className="stat-card__value">3,901</div>
            <div className="stat-card__delta">↑ 12%</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__label">Clusters</div>
            <div className="stat-card__value">47</div>
            <div className="stat-card__delta">↑ 3 new</div>
          </div>
        </div>

        <div className="graph-canvas">
          <svg
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
            viewBox="0 0 400 260"
          >
            <line x1="200" y1="130" x2="80" y2="50"  stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
            <line x1="200" y1="130" x2="320" y2="50" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
            <line x1="200" y1="130" x2="80" y2="210" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
            <line x1="200" y1="130" x2="320" y2="210" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
          </svg>
          <div className="graph-nodes">
            <div className="graph-node graph-node--center">Memory</div>
            <div className="graph-node graph-node--a">ML</div>
            <div className="graph-node graph-node--b">NLP</div>
            <div className="graph-node graph-node--c">APIs</div>
            <div className="graph-node graph-node--d">Data</div>
          </div>
        </div>

        <div className="card">
          <div className="card__title">Most connected node</div>
          <div className="card__sub">
            "Memory" is linked to 128 concepts across 14 clusters.
            Explore its connections to surface related ideas.
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeGraph;