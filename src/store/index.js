import { configureStore } from '@reduxjs/toolkit';
import playersReducer from '../features/form/formSlice';

const store = configureStore({
  reducer: { players: playersReducer },
});

export default store;
