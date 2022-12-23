import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Public from './components/Public';
import PlayersList from './features/players/PlayersList';
import TeamsList from './features/teams/TeamsList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="/players" element={<PlayersList />} />
        <Route path="/teams" element={<TeamsList />} />
      </Route>
    </Routes>
  );
};

export default App;
