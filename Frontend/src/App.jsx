import React, { useState } from 'react';
import Sidebar from './Shared/Sidebar/Sidebar';
import KnowledgeGraph from './Pages/KnowledgeGraphPage/KnowlegeGraph';
import Collections from './Pages/CollectionsPage/Collections';
import Resurfacing from './Pages/ResurfacingPage/Resurfacing';
import ItemCard from './Components/ItemCard/ItemCard';
import Header from './Shared/Header/Header';
import SearchBar from './Shared/SearchBar/SearchBar';
import './Shared/style/app.scss';

const SCREENS = {
  graph:       <KnowledgeGraph />,
  collections: <Collections />,
  resurfacing: <Resurfacing />,
  dashboard: (
    <>
      <SearchBar />
      <Header />
      <ItemCard />
    </>
  ),
};

const App = () => {
  const [active, setActive] = useState('dashboard');

  return (
    <div className="app">
      <Sidebar activeScreen={active} onNavigate={setActive} />
      <main className="app__main">
        {SCREENS[active] ?? SCREENS.dashboard}
      </main>
    </div>
  );
};

export default App;