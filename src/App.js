import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Form from './features/form/Form';
import Public from './components/Public';
import Tournaments from './features/tournaments/Tournaments';
// import PlayersList from './features/players/PlayersList';
// import TeamsList from './features/teams/TeamsList';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
      </Route>
      <Route path="/signup" element={<Layout />}>
        <Route index element={<Form />} />
      </Route>
      <Route path="/tournaments" element={<Layout />}>
        <Route index element={<Tournaments />} />
      </Route>
    </Routes>
  );
};

export default App;
