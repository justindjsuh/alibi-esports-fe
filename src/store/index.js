import { configureStore } from '@reduxjs/toolkit';
import playersReducer from '../features/form/formSlice';
import teamsReducer from '../features/teams/teamsSlice';

const store = configureStore({
  reducer: { players: playersReducer, teams: teamsReducer },
});

export default store;
