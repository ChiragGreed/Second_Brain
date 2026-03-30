import React, { useState } from 'react';
import Sidebar from './Shared/Sidebar/Sidebar';
import './Shared/style/app.scss';
import { Outlet } from 'react-router-dom';
import SearchBar from './Shared/SearchBar/SearchBar';



const App = () => {
  const [active, setActive] = useState('dashboard');

  return (
    <div className="app">

      <Sidebar activeScreen={active} onNavigate={setActive} />
     
      <SearchBar />

      <Outlet />

    </div>

  );
};

export default App;